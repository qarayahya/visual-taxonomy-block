import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	SelectControl,
	Panel,
	PanelBody,
	__experimentalNumberControl as NumberControl,
	ToggleControl,
} from "@wordpress/components";
import { store as blockEditorStore } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import TermsPlaceholder from "./placeholder";

export default function Edit({ attributes, setAttributes, clientId, name }) {
	const { taxonomyName, itemsPerPage, hideEmpty } = attributes;

	// Get taxonomy options
	const taxonomyOptions = useSelect((select) => {
		const taxonomies = select("core").getTaxonomies();
		if (!taxonomies) return [];

		return taxonomies.map((taxonomy) => ({
			value: taxonomy.slug,
			label: taxonomy.name,
		}));
	}, []);

	const hasInnerBlocks = useSelect(
		(select) => !!select(blockEditorStore).getBlocks(clientId).length,
		[clientId],
	);

	const TEMPLATE = [["visual-taxonomy-block/term-template"]];
	const ALLOWED_BLOCKS = ["visual-taxonomy-block/term-template"];

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "visual-taxonomy-block__termd-list",
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: TEMPLATE,
			// orientation: "horizontal",
		},
	);

	return (
		<>
			{(!hasInnerBlocks || !taxonomyName) && (
				<TermsPlaceholder
					attributes={attributes}
					taxonomyOptions={taxonomyOptions}
					setAttributes={setAttributes}
					clientId={clientId}
					name={name}
				/>
			)}

			{hasInnerBlocks && taxonomyName && (
				<>
					<InspectorControls>
						<Panel>
							<PanelBody title="Terms settings">
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
								<NumberControl
									label="Items Per Page"
									value={itemsPerPage}
									onChange={(value) => setAttributes({ itemsPerPage: value })}
									help="Set how many taxonomy terms to display per page. Leave it empty to show all terms."
									min={0}
									__next40pxDefaultSize
									__nextHasNoMarginBottom
								/>
								<ToggleControl
									label="Hide Empty"
									checked={hideEmpty}
									onChange={() => setAttributes({ hideEmpty: !hideEmpty })}
									help="Enable to hide terms with no items."
									__nextHasNoMarginBottom
								/>
								{
									// TODO: Add "order" and "orderby" controls.
								}
							</PanelBody>
						</Panel>
					</InspectorControls>

					<div {...blockProps}>
						<div {...innerBlocksProps} />
					</div>
				</>
			)}
		</>
	);
}
