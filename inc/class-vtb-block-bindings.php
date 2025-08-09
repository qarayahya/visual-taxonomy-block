<?php
/**
 * VTB Block Bindings Handler
 *
 * Handles the registration of block bindings sources for the visual taxonomy block
 *
 * @since 0.1.0
 */

class VTB_Block_Bindings {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_block_bindings' ) );
	}

	/**
	 * Register all block bindings sources
	 */
	public function register_block_bindings() {
		// Term description binding.
		register_block_bindings_source(
			'visual-taxonomy-block/description-binding',
			array(
				'label'              => __( 'term_description', 'visual-taxonomy-block' ),
				'get_value_callback' => array( $this, 'get_term_description' ),
				'uses_context'       => array( 'termId' ),
			)
		);

		// Term count binding.
		register_block_bindings_source(
			'visual-taxonomy-block/count-binding',
			array(
				'label'              => __( 'term_count', 'visual-taxonomy-block' ),
				'get_value_callback' => array( $this, 'get_term_count' ),
				'uses_context'       => array( 'termId' ),
			)
		);

		// Term link binding.
		register_block_bindings_source(
			'visual-taxonomy-block/link-binding',
			array(
				'label'              => __( 'term_link', 'visual-taxonomy-block' ),
				'get_value_callback' => array( $this, 'get_term_link' ),
				'uses_context'       => array( 'termId' ),
			)
		);

		// Term slug binding.
		register_block_bindings_source(
			'visual-taxonomy-block/slug-binding',
			array(
				'label'              => __( 'term_slug', 'visual-taxonomy-block' ),
				'get_value_callback' => array( $this, 'get_term_slug' ),
				'uses_context'       => array( 'termId' ),
			)
		);
	}

	/**
	 * Get term ID from block context
	 *
	 * @param object $block_instance Block instance.
	 * @return int|false Term ID or false if not found
	 */
	private function get_term_id_from_context( $block_instance ) {
		if ( ! isset( $block_instance->context['termId'] ) ) {
			return false;
		}

		$term_id = absint( $block_instance->context['termId'] );
		return $term_id > 0 ? $term_id : false;
	}

	/**
	 * Get term object with validation
	 *
	 * @param int $term_id Term ID.
	 * @return WP_Term|false Term object or false if invalid
	 */
	private function get_validated_term( $term_id ) {
		if ( ! $term_id ) {
			return false;
		}

		$term = get_term( $term_id );
		return ( $term && ! is_wp_error( $term ) ) ? $term : false;
	}

	/**
	 * Get the term description
	 *
	 * @param array  $source_args    Source arguments.
	 * @param object $block_instance Block instance.
	 * @return string Term description or empty string
	 */
	public function get_term_description( $source_args, $block_instance ) {
		$term_id = $this->get_term_id_from_context( $block_instance );
		$term    = $this->get_validated_term( $term_id );

		return $term ? $term->description : '';
	}

	/**
	 * Get the term count
	 *
	 * @param array  $source_args    Source arguments.
	 * @param object $block_instance Block instance.
	 * @return string Term count or empty string
	 */
	public function get_term_count( $source_args, $block_instance ) {
		$term_id = $this->get_term_id_from_context( $block_instance );
		$term    = $this->get_validated_term( $term_id );

		if ( ! $term ) {
			return '';
		}

		if ( isset( $source_args['label'] ) ) {
			return sprintf(
				'%1$s <span class="term-count__label">%2$s</span>',
				$term->count,
				$source_args['label'],
			);
		}

		return (string) $term->count;
	}

	/**
	 * Get the term link
	 *
	 * @param array  $source_args    Source arguments.
	 * @param object $block_instance Block instance.
	 * @return string Term link URL or empty string
	 */
	public function get_term_link( $source_args, $block_instance ) {
		$term_id = $this->get_term_id_from_context( $block_instance );
		$term    = $this->get_validated_term( $term_id );

		if ( ! $term ) {
			return '';
		}

		$link = get_term_link( $term );
		return ( $link && ! is_wp_error( $link ) ) ? $link : '';
	}

	/**
	 * Get the term slug
	 *
	 * @param array  $source_args    Source arguments.
	 * @param object $block_instance Block instance.
	 * @return string Term slug or empty string
	 */
	public function get_term_slug( $source_args, $block_instance ) {
		$term_id = $this->get_term_id_from_context( $block_instance );
		$term    = $this->get_validated_term( $term_id );

		return $term ? $term->slug : '';
	}
}

new VTB_Block_Bindings();