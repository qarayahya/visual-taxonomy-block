# Visual Taxonomy Block

Transform your WordPress taxonomies into visually displays. Add images to any taxonomy and showcase them using custom Gutenberg blocks.

![Visual Taxonomy Block](https://github.com/qarayahya/visual-taxonomy-block/blob/master/_wordpress-org/banner-1544x500.png)

## Features

### Taxonomy Images
- Add images to **any public taxonomy** (categories, tags, custom taxonomies)
- Automatic **REST API integration** for seamless block editor experience
- **Performance optimized** with minimal overhead
- Works with existing taxonomies - no data migration needed

### Custom Gutenberg Blocks

#### **Terms Loop Block**
Display multiple terms in customizable layouts with advanced query options.

#### **Term Template Block** 
Define how individual terms appear within loops using a visual template designer.

#### **Term Title Block**
Display term names with:
- Multiple heading levels (H1-H6, paragraph)
- Text alignment controls  
- Optional links to term archive pages
- Custom link attributes (target, rel)

#### **Term Image Block**
Show taxonomy images with:
- Responsive sizing controls
- Link overlay options
- Border and shadow styling
- Automatic fallback to placeholder

### Term Data Blocks (Core Paragraph Variations)

For displaying additional term information, use these paragraph block variations:

#### **Term Description** (`visual-taxonomy-block/term-description`)
Display term descriptions with full rich text formatting support.

#### **Term Count** (`visual-taxonomy-block/term-count`) 
Show the number of posts assigned to each term with customizable formatting.

### Basic Usage

1. **Add images to your taxonomies**
   - Go to Categories, Tags, or any custom taxonomy
   - Upload images using the built-in image selector

2. **Create a terms display**
   - Add a "Terms Loop" block to your page/post
   - Configure which terms to display by selecting the taxonomy
   - Select a template variation

3. **Design your term layout**
   - Inside the Term Template, add blocks like:
     - Term Image
     - Term Title  
     - Term Description (paragraph variation)
     - Term Count (paragraph variation)

## Development

### Block Structure

```
visual-taxonomy-block/
├── src/
│   ├── terms-loop/          # Query and display multiple terms
│   ├── term-template/       # Template for individual term display
│   ├── term-title/          # Term name with heading options
│   └── term-image/          # Taxonomy image display
├── includes/
│   └── class-vtb-taxonomy-image.php  # Image management system
│   └── class-vtb-block-bindings.php  # Registration of block bindings sources
└── visual-taxonomy-block.php
```

### Hooks & Filters

#### Taxonomy Support
```php
// Modify which taxonomies support images
add_filter('vtb_taxonomy_image_taxonomies', function($taxonomies) {
    // Remove support for tags
    unset($taxonomies['post_tag']);
    return $taxonomies;
});
```

## Use Cases

- **E-commerce**: Visual product categories with featured images
- **Portfolios**: Project categories with representative thumbnails
- **Blogs**: Enhanced category displays with descriptions
- **Business Sites**: Service categories with custom icons
- **Directories**: Visual organization of listings by category
- **Educational**: Course categories with subject illustrations

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following WordPress coding standards
4. **Test thoroughly** with different taxonomies and themes
5. **Submit a pull request**

---

**Made with ❤️ for the WordPress community**