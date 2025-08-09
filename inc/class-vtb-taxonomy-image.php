<?php
/**
 * VTB Taxonomy Image Handler
 *
 * Handles image uploads and management for all taxonomies
 *
 * @since 0.1.0
 */
class VTB_Taxonomy_Image {

	/**
	 * @var array Supported taxonomies
	 */
	private $taxonomies = array();

	/**
	 * @var string Meta key for storing image ID
	 */
	const META_KEY_IMAGE_ID = '_taxonomy_image_id';

	/**
	 * @var string Nonce action
	 */
	const NONCE_ACTION = 'vtb_taxonomy_image_nonce';

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'init' ), 99 );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_assets' ) );
		add_action( 'rest_api_init', array( $this, 'register_rest_meta' ) );
	}

	/**
	 * Initialize the plugin
	 */
	public function init() {
		$this->setup_taxonomies();
		$this->setup_taxonomy_hooks();
	}

	/**
	 * Register REST API meta fields
	 */
	public function register_rest_meta() {
		foreach ( $this->taxonomies as $taxonomy ) {
			register_rest_field(
				$taxonomy,
				'_taxonomy_image_id',
				array(
					'get_callback' => array( $this, 'get_image_id_rest' ),
					'schema'       => array(
						'description' => __( 'Taxonomy image ID', 'visual-taxonomy-block' ),
						'type'        => 'integer',
						'context'     => array( 'view', 'edit' ),
					),
				)
			);
		}
	}

	/**
	 * Get image ID for REST API
	 */
	public function get_image_id_rest( $term_array ) {
		$image_id = get_term_meta( $term_array['id'], self::META_KEY_IMAGE_ID, true );
		return $image_id ? (int) $image_id : null;
	}

	/**
	 * Setup supported taxonomies
	 */
	private function setup_taxonomies() {
		$this->taxonomies = get_taxonomies( array( 'public' => true ), 'names' );
		$this->taxonomies = apply_filters( 'vtb_taxonomy_image_taxonomies', $this->taxonomies );
	}

	/**
	 * Setup hooks for each taxonomy
	 */
	private function setup_taxonomy_hooks() {
		foreach ( $this->taxonomies as $taxonomy ) {
			// Form fields
			add_action( "{$taxonomy}_edit_form_fields", array( $this, 'render_edit_form_field' ) );
			add_action( "{$taxonomy}_add_form_fields", array( $this, 'render_add_form_field' ) );

			// Save hooks
			add_action( "created_{$taxonomy}", array( $this, 'save_taxonomy_image' ) );
			add_action( "edited_{$taxonomy}", array( $this, 'save_taxonomy_image' ) );

			// Admin columns
			add_filter( "manage_edit-{$taxonomy}_columns", array( $this, 'add_image_column' ) );
			add_filter( "manage_{$taxonomy}_custom_column", array( $this, 'render_image_column' ), 10, 3 );
		}
	}

	/**
	 * Enqueue admin assets
	 */
	public function enqueue_admin_assets() {
		$screen = get_current_screen();

		if ( ! $this->is_taxonomy_screen( $screen ) ) {
			return;
		}

		wp_enqueue_media();
		wp_enqueue_script(
			'vtb-taxonomy-image',
			'',
			array( 'jquery', 'media-upload' ),
			'0.1.0',
			true
		);

		add_action( 'admin_footer', array( $this, 'output_admin_script' ) );
	}

	/**
	 * Check if current screen is a taxonomy screen
	 */
	private function is_taxonomy_screen( $screen ) {
		if ( ! $screen ) {
			return false;
		}

		return ( 'edit-tags' === $screen->base || 'term' === $screen->base ) &&
				in_array( $screen->taxonomy, $this->taxonomies, true );
	}

	/**
	 * Render image field for edit form
	 */
	public function render_edit_form_field( $term ) {
		if ( ! $term instanceof WP_Term ) {
			return;
		}

		$image_id = get_term_meta( $term->term_id, self::META_KEY_IMAGE_ID, true );
		$this->render_form_field( $image_id, true );
	}

	/**
	 * Render image field for add form
	 */
	public function render_add_form_field() {
		$this->render_form_field( '', false );
	}

	/**
	 * Render form field HTML
	 */
	private function render_form_field( $image_id, $is_edit_mode ) {
		$current_image = $image_id ? wp_get_attachment_image( $image_id, array( 100, 100 ) ) : '';
		$nonce         = wp_create_nonce( self::NONCE_ACTION );

		$wrapper = $is_edit_mode ? 'tr' : 'div';
		$class   = $is_edit_mode ? 'form-field' : 'form-field term-group';
		?>
<<?php echo esc_html( $wrapper ); ?> class="<?php echo esc_attr( $class ); ?>">
		<?php if ( $is_edit_mode ) : ?>
	<th scope="row">
		<label for="vtb_taxonomy_image"><?php esc_html_e( 'Image', 'visual-taxonomy-block' ); ?></label>
	</th>
	<td>
		<?php else : ?>
		<label for="vtb_taxonomy_image"><?php esc_html_e( 'Image', 'visual-taxonomy-block' ); ?></label>
		<?php endif; ?>

		<div id="vtb-taxonomy-image-preview" class="vtb-image-preview">
			<?php echo $current_image; ?>
		</div>

		<p class="vtb-image-controls">
			<button type="button" class="button vtb-select-image">
				<?php esc_html_e( 'Select Image', 'visual-taxonomy-block' ); ?>
			</button>
			<?php if ( $current_image ) : ?>
			<button type="button" class="button vtb-remove-image">
				<?php esc_html_e( 'Remove', 'visual-taxonomy-block' ); ?>
			</button>
			<?php endif; ?>
		</p>

		<input type="hidden" name="vtb_taxonomy_image_id" value="<?php echo esc_attr( $image_id ); ?>" />
		<?php wp_nonce_field( self::NONCE_ACTION, 'vtb_taxonomy_image_nonce' ); ?>

		<?php if ( $is_edit_mode ) : ?>
	</td>
	<?php endif; ?>
</<?php echo esc_html( $wrapper ); ?>>
		<?php
	}

	/**
	 * Output admin JavaScript.
	 */
	public function output_admin_script() {
		?>
<script type="text/javascript">
jQuery(document).ready(function($) {
	let mediaFrame;
	const $preview = $('#vtb-taxonomy-image-preview');
	const $input = $('[name="vtb_taxonomy_image_id"]');

	// Select image
	$(document).on('click', '.vtb-select-image', function(e) {
		e.preventDefault();

		if (mediaFrame) {
			mediaFrame.open();
			return;
		}

		mediaFrame = wp.media({
			title: '<?php echo esc_js( __( 'Select Image', 'visual-taxonomy-block' ) ); ?>',
			button: {
				text: '<?php echo esc_js( __( 'Use This Image', 'visual-taxonomy-block' ) ); ?>'
			},
			multiple: false,
			library: {
				type: 'image'
			}
		});

		mediaFrame.on('select', function() {
			const attachment = mediaFrame.state().get('selection').first().toJSON();
			$preview.html('<img src="' + attachment.url +
				'" style="max-width: 100px; height: auto;" />');
			$input.val(attachment.id);

			// Add remove button if not exists
			if (!$('.vtb-remove-image').length) {
				$('.vtb-select-image').after(
					'<button type="button" style="margin-left: 8px;" class="button vtb-remove-image"><?php echo esc_js( __( 'Remove', 'visual-taxonomy-block' ) ); ?></button>'
				);
			}
		});

		mediaFrame.open();
	});

	// Remove image
	$(document).on('click', '.vtb-remove-image', function(e) {
		e.preventDefault();
		$preview.empty();
		$input.val('');
		$(this).remove();
	});
});
</script>
		<?php
	}

	/**
	 * Save taxonomy image data
	 */
	public function save_taxonomy_image( $term_id ) {
		// Verify nonce
		if ( ! isset( $_POST['vtb_taxonomy_image_nonce'] ) ||
			! wp_verify_nonce( $_POST['vtb_taxonomy_image_nonce'], self::NONCE_ACTION ) ) {
			return;
		}

		// Check permissions
		if ( ! current_user_can( 'manage_categories' ) ) {
			return;
		}

		if ( ! isset( $_POST['vtb_taxonomy_image_id'] ) ) {
			return;
		}

		$image_id = sanitize_text_field( $_POST['vtb_taxonomy_image_id'] );

		if ( ! empty( $image_id ) && is_numeric( $image_id ) ) {
			if ( wp_attachment_is_image( $image_id ) ) {
				update_term_meta( $term_id, self::META_KEY_IMAGE_ID, (int) $image_id );
			}
		} else {
			delete_term_meta( $term_id, self::META_KEY_IMAGE_ID );
		}
	}

	/**
	 * Add image column to taxonomy admin table
	 */
	public function add_image_column( $columns ) {
		$new_columns = array();
		foreach ( $columns as $key => $value ) {
			$new_columns[ $key ] = $value;
			if ( 'cb' === $key ) {
				$new_columns['vtb_image'] = __( 'Image', 'visual-taxonomy-block' );
			}
		}
		return $new_columns;
	}

	/**
	 * Render image column content
	 */
	public function render_image_column( $content, $column_name, $term_id ) {
		if ( 'vtb_image' !== $column_name ) {
			return $content;
		}

		$image = self::get_taxonomy_image( $term_id, array( 40, 40 ) );
		return $image ?: '<span class="dashicons dashicons-format-image" style="color: #ccc;"></span>';
	}

	/**
	 * Get taxonomy image HTML
	 */
	public static function get_taxonomy_image( $term_id, $size = array( 40, 40 ) ) {
		$image_id = get_term_meta( $term_id, self::META_KEY_IMAGE_ID, true );

		if ( ! $image_id ) {
			return '';
		}

		return wp_get_attachment_image(
			$image_id,
			$size,
			false,
			array(
				'class'   => 'vtb-taxonomy-image',
				'loading' => 'lazy',
			)
		);
	}
}

new VTB_Taxonomy_Image();
