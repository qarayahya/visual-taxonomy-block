=== Visual Taxonomy Block ===
Contributors: qarayahya
Tags: taxonomy, categories, tags, blocks, gutenberg, images, terms, custom taxonomy
Requires at least: 6.7
Tested up to: 6.8
Requires PHP: 7.4
Stable tag: 0.1.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Add images to taxonomies and display them with custom Gutenberg blocks. Perfect for creating visual category grids, tag clouds, and taxonomy showcases.

== Description ==

Visual Taxonomy Block transforms your WordPress taxonomies into visually displays. Add images to any taxonomy (categories, tags, or custom taxonomies) and showcase them using custom Gutenberg blocks.

== Custom Gutenberg Blocks ==

- Terms Loop - Display multiple terms in customizable layouts
- Term Template - Define how individual terms appear within loops
- Term Title - Display term names with heading levels and link options  
- Term Image - Show taxonomy images with styling controls

== Installation ==

1. Upload the plugin files to `/wp-content/plugins/visual-taxonomy-block/` directory, or install through WordPress admin
2. Activate the plugin through the 'Plugins' screen
3. Go to any taxonomy (Categories, Tags, etc.) and add images to your terms
4. In the block editor, find "Visual Taxonomy Block" category and start building!

== Frequently Asked Questions ==

= Does this work with custom taxonomies? =

Yes! Visual Taxonomy Block automatically works with all public taxonomies, including custom ones created by themes or plugins.

= Will this slow down my site? =

No. The plugin is built for performance with minimal database queries and optimized REST API integration. Images are only loaded when needed.

= Can I use this with my existing theme? =

Absolutely! Visual Taxonomy Block works with any WordPress theme, especially block-based and Full Site Editing themes.

= Do I need coding knowledge? =

Not at all. Everything is managed through the intuitive WordPress block editor interface.

= Can I customize the styling? =

Yes! All blocks include comprehensive styling options (spacing, colors, borders, etc.) and respect your theme's design system.

= Does it work with WooCommerce categories? =

Yes! WooCommerce product categories and tags are fully supported.

== Screenshots ==

1. Terms Loop block settings panel
2. Term Template block with inner blocks

== Changelog ==

= 1.0.0 =
* Initial release

== Upgrade Notice ==

= 1.0.0 =
Initial release of Visual Taxonomy Block. Start creating beautiful taxonomy displays today!

== Developer Notes ==

= Hooks & Filters =
- `vtb_taxonomy_image_taxonomies`: Filter supported taxonomies

= REST API Endpoints =
- Taxonomy images available via standard WordPress REST API
- Custom fields: `_taxonomy_image_id`

= Block Registration =
All blocks follow WordPress coding standards and are registered using `block.json` for optimal performance.

= GitHub Repository 
[https://github.com/qarayahya/visual-taxonomy-block](https://github.com/qarayahya/visual-taxonomy-block)

For developers and advanced users, full documentation and examples are available in the repository.