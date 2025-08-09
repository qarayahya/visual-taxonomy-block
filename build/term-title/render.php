<?php
/**
 * Render callback for the taxonomy term title block
 *
 * @param array    $attributes Block attributes
 * @param string   $content    Block default content
 * @param WP_Block $block      Block instance
 *
 * @return string Returns the block content
 */

// Check if we have the required context.
if ( ! isset( $block->context['termId'] ) || ! isset( $block->context['taxonomyName'] ) ) {
	return '';
}

$taxonomy_term = get_term( $block->context['termId'], $block->context['taxonomyName'] );

// If term doesn't exist or is an error, return empty.
if ( is_wp_error( $taxonomy_term ) || ! $taxonomy_term ) {
	return '';
}

$term_name = $taxonomy_term->name;

if ( ! $term_name ) {
	return '';
}

$tag_name = 'h2';

if ( isset( $attributes['level'] ) ) {
	$tag_name = 0 === $attributes['level'] ? 'p' : 'h' . (int) $attributes['level'];
}

if ( isset( $attributes['isLink'] ) && $attributes['isLink'] ) {

	$rel = ! empty( $attributes['rel'] ) ? 'rel="' . esc_attr( $attributes['rel'] ) . '"' : '';

	$term_name = sprintf( '<a href="%1$s" target="%2$s" %3$s>%4$s</a>', esc_url( get_term_link( $taxonomy_term ) ), esc_attr( $attributes['linkTarget'] ), $rel, $term_name );
}

$classes = array();

if ( isset( $attributes['textAlign'] ) ) {
	$classes[] = 'has-text-align-' . $attributes['textAlign'];
}
if ( isset( $attributes['style']['elements']['link']['color']['text'] ) ) {
	$classes[] = 'has-link-color';
}

$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ) ) );

printf(
	'<%1$s %2$s>%3$s</%1$s>',
	$tag_name,
	$wrapper_attributes,
	$term_name
);
