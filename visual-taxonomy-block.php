<?php
/**
 * Plugin Name:       Visual Taxonomy Block
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            qarayahya
 * Author URI:        https://github.com/qarayahya
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       visual-taxonomy-block
 */



if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Initialize.
 */
require_once __DIR__ . '/inc/class-vtb-taxonomy-image.php';
require_once __DIR__ . '/inc/class-vtb-block-bindings.php';

/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function visual_taxonomy_block_register_block() {
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'visual_taxonomy_block_register_block' );


/**
 * Add "taxonomies" category to gutenberg blocks categories.
 *
 * @param  mixed $categories.
 * @return array
 */
function visual_taxonomy_block_register_block_category( $categories ) {

	$blocklayouts_block_categories = array(
		array(
			'slug'  => 'taxonomies',
			'title' => __( 'Taxonomies', 'visual-taxonomy-block' ),
		),
	);

	return array_merge( $categories, $blocklayouts_block_categories );
}
add_filter( 'block_categories_all', 'visual_taxonomy_block_register_block_category', 10, 2 );
