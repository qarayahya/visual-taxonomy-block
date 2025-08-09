<?php
// This file is generated. Do not modify it manually.
return array(
	'term-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'visual-taxonomy-block/term-image',
		'title' => 'Term Image',
		'category' => 'taxonomies',
		'description' => 'Display a term\'s featured image.',
		'textdomain' => 'visual-taxonomy-block',
		'ancestor' => array(
			'visual-taxonomy-block/terms-loop'
		),
		'usesContext' => array(
			'termId',
			'taxonomyName'
		),
		'attributes' => array(
			'isLink' => array(
				'type' => 'boolean',
				'default' => false,
				'role' => 'content'
			),
			'aspectRatio' => array(
				'type' => 'string'
			),
			'width' => array(
				'type' => 'string'
			),
			'height' => array(
				'type' => 'string'
			),
			'scale' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'sizeSlug' => array(
				'type' => 'string'
			),
			'rel' => array(
				'type' => 'string',
				'attribute' => 'rel',
				'default' => '',
				'role' => 'content'
			),
			'linkTarget' => array(
				'type' => 'string',
				'default' => '_self',
				'role' => 'content'
			),
			'overlayColor' => array(
				'type' => 'string'
			),
			'customOverlayColor' => array(
				'type' => 'string'
			),
			'dimRatio' => array(
				'type' => 'number',
				'default' => 0
			),
			'gradient' => array(
				'type' => 'string'
			),
			'customGradient' => array(
				'type' => 'string'
			)
		),
		'example' => array(
			'viewportWidth' => 350
		),
		'supports' => array(
			'align' => array(
				'left',
				'right',
				'center',
				'wide',
				'full'
			),
			'color' => array(
				'text' => false,
				'background' => false
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'width' => true,
				'__experimentalSkipSerialization' => true,
				'__experimentalDefaultControls' => array(
					'color' => true,
					'radius' => true,
					'width' => true
				)
			),
			'filter' => array(
				'duotone' => true
			),
			'shadow' => array(
				'__experimentalSkipSerialization' => true
			),
			'html' => false,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'interactivity' => array(
				'clientNavigation' => true
			)
		),
		'selectors' => array(
			'border' => '.wp-block-visual-taxonomy-block-term-image img, .wp-block-visual-taxonomy-block-term-image .block-editor-media-placeholder, .wp-block-visual-taxonomy-block-term-image .wp-block-visual-taxonomy-block-term-image__overlay',
			'shadow' => '.wp-block-visual-taxonomy-block-term-image img, .wp-block-visual-taxonomy-block-term-image .components-placeholder',
			'filter' => array(
				'duotone' => '.wp-block-visual-taxonomy-block-term-image img, .wp-block-visual-taxonomy-block-term-image .wp-block-visual-taxonomy-block-term-image__placeholder, .wp-block-visual-taxonomy-block-term-image .components-placeholder__illustration, .wp-block-visual-taxonomy-block-term-image .components-placeholder::before'
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'term-template' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'visual-taxonomy-block/term-template',
		'version' => '0.1.0',
		'title' => 'Term template',
		'category' => 'taxonomies',
		'icon' => 'layout',
		'ancestor' => array(
			'visual-taxonomy-block/terms-loop'
		),
		'keywords' => array(
			'term template',
			'taxonomy',
			'terms',
			'taxonomies'
		),
		'description' => 'Contains the block elements used to render a term, like the title, image, count, description, and more...',
		'textdomain' => 'visual-taxonomy-block',
		'usesContext' => array(
			'taxonomyName',
			'itemsPerPage',
			'hideEmpty'
		),
		'supports' => array(
			'reusable' => false,
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'layout' => true,
			'color' => array(
				'gradients' => true,
				'link' => true,
				'__experimentalDefaultControls' => array(
					'background' => true,
					'text' => true
				)
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true,
				'blockGap' => array(
					'__experimentalDefault' => '1.25em'
				),
				'__experimentalDefaultControls' => array(
					'blockGap' => true,
					'padding' => false,
					'margin' => false
				)
			),
			'__experimentalBorder' => array(
				'radius' => true,
				'color' => true,
				'width' => true,
				'style' => true
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'term-title' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'visual-taxonomy-block/term-title',
		'title' => 'Term Title',
		'category' => 'taxonomies',
		'description' => 'Display a term\'s title.',
		'textdomain' => 'visual-taxonomy-block',
		'ancestor' => array(
			'visual-taxonomy-block/terms-loop'
		),
		'usesContext' => array(
			'termId',
			'taxonomyName'
		),
		'attributes' => array(
			'textAlign' => array(
				'type' => 'string'
			),
			'level' => array(
				'type' => 'number',
				'default' => 2
			),
			'levelOptions' => array(
				'type' => 'array'
			),
			'isLink' => array(
				'type' => 'boolean',
				'default' => false,
				'role' => 'content'
			),
			'rel' => array(
				'type' => 'string',
				'attribute' => 'rel',
				'default' => '',
				'role' => 'content'
			),
			'linkTarget' => array(
				'type' => 'string',
				'default' => '_self',
				'role' => 'content'
			)
		),
		'example' => array(
			'viewportWidth' => 350
		),
		'supports' => array(
			'align' => array(
				'wide',
				'full'
			),
			'html' => false,
			'color' => array(
				'gradients' => true,
				'link' => true,
				'__experimentalDefaultControls' => array(
					'background' => true,
					'text' => true,
					'link' => true
				)
			),
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalTextTransform' => true,
				'__experimentalTextDecoration' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'interactivity' => array(
				'clientNavigation' => true
			),
			'__experimentalBorder' => array(
				'radius' => true,
				'color' => true,
				'width' => true,
				'style' => true,
				'__experimentalDefaultControls' => array(
					'radius' => true,
					'color' => true,
					'width' => true,
					'style' => true
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'terms-loop' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'visual-taxonomy-block/terms-loop',
		'version' => '0.1.0',
		'title' => 'Terms Loop',
		'category' => 'taxonomies',
		'icon' => 'category',
		'keywords' => array(
			'categories',
			'terms',
			'taxonomies',
			'taxonomy'
		),
		'description' => 'An advanced block that allows displaying terms based on a selected taxonomy and visual configurations',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'color' => array(
				'enableContrastChecker' => false,
				'background' => true,
				'gradients' => true,
				'text' => true,
				'__experimentalDefaultControls' => array(
					'text' => true,
					'background' => true
				)
			),
			'spacing' => array(
				'blockGap' => array(
					'horizontal',
					'vertical'
				),
				'margin' => true,
				'padding' => true,
				'units' => array(
					'px',
					'em',
					'rem',
					'vh',
					'vw'
				),
				'__experimentalDefaultControls' => array(
					'blockGap' => true,
					'margin' => false,
					'padding' => true
				)
			),
			'__experimentalBorder' => array(
				'radius' => true,
				'color' => true,
				'width' => true,
				'style' => true,
				'__experimentalDefaultControls' => array(
					'radius' => true,
					'color' => true,
					'width' => true,
					'style' => true
				)
			)
		),
		'attributes' => array(
			'taxonomyName' => array(
				'type' => 'string'
			),
			'itemsPerPage' => array(
				'type' => 'number'
			),
			'hideEmpty' => array(
				'type' => 'boolean',
				'default' => true
			),
			'orderby' => array(
				'type' => 'string',
				'default' => 'count'
			),
			'order' => array(
				'type' => 'string',
				'default' => 'DESC'
			)
		),
		'providesContext' => array(
			'taxonomyName' => 'taxonomyName',
			'itemsPerPage' => 'itemsPerPage',
			'hideEmpty' => 'hideEmpty',
			'orderby' => 'orderby',
			'order' => 'order'
		),
		'textdomain' => 'visual-taxonomy-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
