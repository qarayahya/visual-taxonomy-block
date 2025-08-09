/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useSelect, useDispatch } from "@wordpress/data";
import {
	createBlocksFromInnerBlocksTemplate,
	store as blocksStore,
} from "@wordpress/blocks";
import {
	useBlockProps,
	store as blockEditorStore,
	__experimentalBlockVariationPicker as BlockVariationPicker,
} from "@wordpress/block-editor";
import { SelectControl, Placeholder } from "@wordpress/components";
import { loop } from "@wordpress/icons";

export default function TermsPlaceholder({
	attributes,
	setAttributes,
	clientId,
	name,
	taxonomyOptions,
}) {
	const { taxonomyName } = attributes;
	const blockProps = useBlockProps();

	// Get block type and variation info
	const { blockType, activeBlockVariation, variations } = useSelect(
		(select) => {
			const { getActiveBlockVariation, getBlockType, getBlockVariations } =
				select(blocksStore);
			return {
				blockType: getBlockType(name),
				activeBlockVariation: getActiveBlockVariation(name, attributes),
				variations: getBlockVariations(name, "block"),
			};
		},
		[name, attributes],
	);

	const { replaceInnerBlocks } = useDispatch(blockEditorStore);
	const label = activeBlockVariation?.title || blockType?.title;

	// Handle variation selection
	const handleVariationSelect = (variation) => {
		if (variation.innerBlocks) {
			replaceInnerBlocks(
				clientId,
				createBlocksFromInnerBlocksTemplate(variation.innerBlocks),
				false,
			);
		}
	};

	return (
		<div {...blockProps}>
			{!taxonomyName ? (
				<Placeholder
					icon={loop}
					label={label}
					instructions={__(
						"Choose a taxonomy (categories, tags, or custom) to display its terms.",
					)}
				>
					<SelectControl
						label="Select Taxonomy"
						value={taxonomyName || ""}
						options={[
							{ value: "", label: __("Select a taxonomy...") },
							...taxonomyOptions,
						]}
						onChange={(value) => setAttributes({ taxonomyName: value })}
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</Placeholder>
			) : (
				<BlockVariationPicker
					icon={loop}
					label={label}
					variations={variations || []}
					onSelect={handleVariationSelect}
				/>
			)}
		</div>
	);
}
