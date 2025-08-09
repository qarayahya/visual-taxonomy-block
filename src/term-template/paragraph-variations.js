import { registerBlockVariation } from "@wordpress/blocks";
import { termDescription } from "@wordpress/icons";

// term count
registerBlockVariation("core/paragraph", {
	name: "visual-taxonomy-block/term-count",
	title: "Term Count",
	category: "taxonomies",
	description: "Display the number of posts assigned to the term.",
	icon: termDescription,
	attributes: {
		metadata: {
			bindings: {
				content: {
					source: "visual-taxonomy-block/count-binding",
				},
			},
		},
	},
	isActive: ["metadata"],
});

// term description
registerBlockVariation("core/paragraph", {
	name: "visual-taxonomy-block/term-description",
	title: "Term Description",
	category: "taxonomies",
	description: "Display a term's description.",
	icon: termDescription,
	attributes: {
		metadata: {
			bindings: {
				content: {
					source: "visual-taxonomy-block/description-binding",
				},
			},
		},
	},
	isActive: ["metadata"],
});

// TODO: Add term parent name.
