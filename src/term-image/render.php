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

$term_id = $block->context['termId'];

$is_link        = isset( $attributes['isLink'] ) && $attributes['isLink'];
$size_slug      = isset( $attributes['sizeSlug'] ) ? $attributes['sizeSlug'] : 'post-thumbnail';
$attr           = get_block_core_post_featured_image_border_attributes( $attributes );
$overlay_markup = get_block_core_post_featured_image_overlay_element_markup( $attributes );

if ( $is_link ) {
	$term_name = $taxonomy_term->name;
	if ( $term_name ) {
		$attr['alt'] = esc_attr( $term_name );
	} else {
		$attr['alt'] = sprintf(
			// translators: %d is the term ID.
			__( 'Untitled term %d' ),
			$term_id
		);
	}
}

$extra_styles = '';

// Aspect ratio with a height set needs to override the default width/height.
if ( ! empty( $attributes['aspectRatio'] ) ) {
	$extra_styles .= 'width:100%;height:100%;';
} elseif ( ! empty( $attributes['height'] ) ) {
	$extra_styles .= "height:{$attributes['height']};";
}

if ( ! empty( $attributes['scale'] ) ) {
	$extra_styles .= "object-fit:{$attributes['scale']};";
}

if ( ! empty( $attributes['style']['shadow'] ) ) {
	$shadow_styles = wp_style_engine_get_styles( array( 'shadow' => $attributes['style']['shadow'] ) );

	if ( ! empty( $shadow_styles['css'] ) ) {
		$extra_styles .= $shadow_styles['css'];
	}
}

if ( ! empty( $extra_styles ) ) {
	$attr['style'] = empty( $attr['style'] ) ? $extra_styles : $attr['style'] . $extra_styles;
}

$image_id = get_term_meta( $term_id, '_taxonomy_image_id', true );

if ( ! $image_id ) {
	return '';
}

$term_image = wp_get_attachment_image( $image_id, $size_slug, false, $attr );

if ( ! $term_image ) {
	return '';
}

if ( $is_link ) {
	$link_target = $attributes['linkTarget'];
	$rel         = ! empty( $attributes['rel'] ) ? 'rel="' . esc_attr( $attributes['rel'] ) . '"' : '';
	$height      = ! empty( $attributes['height'] ) ? 'style="' . esc_attr( safecss_filter_attr( 'height:' . $attributes['height'] ) ) . '"' : '';
	$term_image  = sprintf(
		'<a href="%1$s" target="%2$s" %3$s %4$s>%5$s%6$s</a>',
		get_term_link( $taxonomy_term ),
		esc_attr( $link_target ),
		$rel,
		$height,
		$term_image,
		$overlay_markup
	);
} else {
	$term_image = $term_image . $overlay_markup;
}

	$aspect_ratio = ! empty( $attributes['aspectRatio'] )
		? esc_attr( safecss_filter_attr( 'aspect-ratio:' . $attributes['aspectRatio'] ) ) . ';'
		: '';
	$width        = ! empty( $attributes['width'] )
		? esc_attr( safecss_filter_attr( 'width:' . $attributes['width'] ) ) . ';'
		: '';
	$height       = ! empty( $attributes['height'] )
		? esc_attr( safecss_filter_attr( 'height:' . $attributes['height'] ) ) . ';'
		: '';
if ( ! $height && ! $width && ! $aspect_ratio ) {
	$wrapper_attributes = get_block_wrapper_attributes();
} else {
	$wrapper_attributes = get_block_wrapper_attributes( array( 'style' => $aspect_ratio . $width . $height ) );
}


printf(
	'<figure %1$s>%2$s</figure>',
	$wrapper_attributes,
	$term_image
);
