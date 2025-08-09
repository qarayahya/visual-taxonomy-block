<?php
/**
 * Server-side rendering for the taxonomy template block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string  Rendered block output.
 */

$classnames = '';
if ( isset( $attributes['style']['elements']['link']['color']['text'] ) ) {
	$classnames .= ' has-link-color';
}

	// Ensure backwards compatibility by flagging the number of columns via classname when using grid layout.
if ( isset( $attributes['layout']['type'] ) && 'grid' === $attributes['layout']['type'] && ! empty( $attributes['layout']['columnCount'] ) ) {
	$classnames .= ' ' . sanitize_title( 'columns-' . $attributes['layout']['columnCount'] );
}

$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => trim( $classnames ) ) );

$context_taxonomy_name  = $block->context['taxonomyName'];
$context_items_per_page = $block->context['itemsPerPage'] ?? 0;
$context_hide_empty     = $block->context['hideEmpty'] ?? true;
$context_orderby        = $block->context['orderby'] ?? 'count';
$context_order          = $block->context['order'] ?? 'order';

$taxonomy_args = array(
	'taxonomy'   => $context_taxonomy_name,
	'hide_empty' => $context_hide_empty,
	'number'     => $context_items_per_page,
	'orderby'    => $context_orderby,
	'order'      => $context_order,
);

$taxonomy_terms = get_categories( $taxonomy_args );
$content        = '';

foreach ( $taxonomy_terms as $taxonomy_term ) {

	// Get an instance of the current Term Template block.
	$block_instance = $block->parsed_block;

	// Set the block name to one that does not correspond to an existing registered block.
	// This ensures that for the inner instances of the Term Template block, we do not render any block supports.
	$block_instance['blockName'] = 'core/null';

	$taxonomy_name = $context_taxonomy_name;
	$term_id       = $taxonomy_term->term_id;

	$filter_block_context = static function ( $context ) use ( $taxonomy_name, $term_id ) {
		$context['taxonomyName'] = $taxonomy_name;
		$context['termId']       = $term_id;
		return $context;
	};


	// Use an early priority to so that other 'render_block_context' filters have access to the values.
	add_filter( 'render_block_context', $filter_block_context, 1 );

	// Render the inner blocks of the Term Template block with `dynamic` set to `false` to prevent calling
	// `render_callback` and ensure that no wrapper markup is included.
	$block_content = ( new WP_Block( $block_instance ) )->render( array( 'dynamic' => false ) );
	remove_filter( 'render_block_context', $filter_block_context, 1 );


	// TODO: Add link functionality with editor controls (isLink, linkTarget, rel attributes).

	// $term_link = get_category_link( $term_id );
	// $content .= '<li><a href="' . esc_url( $term_link ) . '">' . $block_content . '</a></li>';

	$content .= '<li class="wp-block-vtb-taxonomy-term">' . $block_content . '</li>';
}

printf(
	'<ul %1$s>%2$s</ul>',
	$wrapper_attributes,
	$content
);
