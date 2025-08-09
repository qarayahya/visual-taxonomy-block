/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import {
	titleCount,
	titleDescription,
	titleCountDescription,
	imageCountTitle,
} from "./icons";

const variations = [
	{
		name: "terms-loop-title-count",
		title: __("Title & Count"),
		icon: titleCount,
		attributes: {},
		innerBlocks: [
			[
				"visual-taxonomy-block/term-template",
				{},
				[
					["visual-taxonomy-block/term-title"],
					[
						"core/paragraph",
						{
							metadata: {
								bindings: {
									content: {
										source: "visual-taxonomy-block/count-binding",
									},
								},
							},
						},
					],
				],
			],
		],
		scope: ["block"],
	},
	{
		name: "terms-loop-title-description",
		title: __("Title & Description"),
		icon: titleDescription,
		attributes: {},
		innerBlocks: [
			[
				"visual-taxonomy-block/term-template",
				{},
				[
					["visual-taxonomy-block/term-title"],
					[
						"core/paragraph",
						{
							metadata: {
								bindings: {
									content: {
										source: "visual-taxonomy-block/description-binding",
									},
								},
							},
						},
					],
				],
			],
		],
		scope: ["block"],
	},
	{
		name: "terms-loop-title-count-description",
		title: __("Title, Count, & Description"),
		icon: titleCountDescription,
		attributes: {},
		innerBlocks: [
			[
				"visual-taxonomy-block/term-template",
				{},
				[
					["visual-taxonomy-block/term-title"],
					[
						"core/paragraph",
						{
							metadata: {
								bindings: {
									content: {
										source: "visual-taxonomy-block/count-binding",
									},
								},
							},
						},
					],
					[
						"core/paragraph",
						{
							metadata: {
								bindings: {
									content: {
										source: "visual-taxonomy-block/description-binding",
									},
								},
							},
						},
					],
				],
			],
		],
		scope: ["block"],
	},
	{
		name: "terms-loop-image-count-title",
		title: __("Image, Count, & Title"),
		icon: imageCountTitle,
		attributes: {},
		innerBlocks: [
			[
				"visual-taxonomy-block/term-template",
				{},
				[
					["visual-taxonomy-block/term-image"],
					[
						"core/paragraph",
						{
							metadata: {
								bindings: {
									content: {
										source: "visual-taxonomy-block/count-binding",
									},
								},
							},
						},
					],
					["visual-taxonomy-block/term-title"],
				],
			],
		],
		scope: ["block"],
	},
];

export default variations;
