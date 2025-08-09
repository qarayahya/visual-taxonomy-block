/**
 * External dependencies
 */
import clsx from "clsx";

/**
 * WordPress dependencies
 */
import {
	AlignmentControl,
	BlockControls,
	InspectorControls,
	useBlockProps,
	HeadingLevelDropdown,
	useBlockEditingMode,
} from "@wordpress/block-editor";
import {
	ToggleControl,
	TextControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";

export default function Edit({
	attributes: { level, levelOptions, textAlign, isLink, rel, linkTarget },
	setAttributes,
	context: { termId, taxonomyName },
}) {
	const TagName = level === 0 ? "p" : `h${level}`;

	const { termName, termLink } = useSelect(
		(select) => {
			const { getEntityRecord } = select("core");

			// Get the term record
			const term = getEntityRecord("taxonomy", taxonomyName, termId);

			// Return both term name and link, or null if not loaded yet
			return {
				termName: term ? term.name : null,
				termLink: term ? term.link : null,
			};
		},
		[termId, taxonomyName], // Dependencies array
	);

	const blockProps = useBlockProps({
		className: clsx({
			[`has-text-align-${textAlign}`]: textAlign,
		}),
	});
	const blockEditingMode = useBlockEditingMode();

	let titleElement = <TagName {...blockProps}>{__("Title")}</TagName>;

	if (termId && taxonomyName) {
		titleElement = (
			<TagName {...blockProps} dangerouslySetInnerHTML={{ __html: termName }} />
		);
	}

	if (isLink && taxonomyName && termId) {
		titleElement = (
			<TagName {...blockProps}>
				<a
					href={termLink}
					target={linkTarget}
					rel={rel}
					onClick={(event) => event.preventDefault()}
					dangerouslySetInnerHTML={{
						__html: termName,
					}}
				/>
			</TagName>
		);
	}

	return (
		<>
			{blockEditingMode === "default" && (
				<>
					<BlockControls group="block">
						<HeadingLevelDropdown
							value={level}
							options={levelOptions}
							onChange={(newLevel) => setAttributes({ level: newLevel })}
						/>
						<AlignmentControl
							value={textAlign}
							onChange={(nextAlign) => {
								setAttributes({ textAlign: nextAlign });
							}}
						/>
					</BlockControls>
					<InspectorControls>
						<ToolsPanel
							label={__("Settings")}
							resetAll={() => {
								setAttributes({
									rel: "",
									linkTarget: "_self",
									isLink: false,
								});
							}}
							dropdownMenuProps={{
								popoverProps: {
									placement: "left-start",
									offset: 259,
								},
							}}
						>
							<ToolsPanelItem
								label={__("Make title a link")}
								isShownByDefault
								hasValue={() => isLink}
								onDeselect={() => setAttributes({ isLink: false })}
							>
								<ToggleControl
									__nextHasNoMarginBottom
									label={__("Make title a link")}
									onChange={() => setAttributes({ isLink: !isLink })}
									checked={isLink}
								/>
							</ToolsPanelItem>
							{isLink && (
								<>
									<ToolsPanelItem
										label={__("Open in new tab")}
										isShownByDefault
										hasValue={() => linkTarget === "_blank"}
										onDeselect={() =>
											setAttributes({
												linkTarget: "_self",
											})
										}
									>
										<ToggleControl
											__nextHasNoMarginBottom
											label={__("Open in new tab")}
											onChange={(value) =>
												setAttributes({
													linkTarget: value ? "_blank" : "_self",
												})
											}
											checked={linkTarget === "_blank"}
										/>
									</ToolsPanelItem>
									<ToolsPanelItem
										label={__("Link rel")}
										isShownByDefault
										hasValue={() => !!rel}
										onDeselect={() => setAttributes({ rel: "" })}
									>
										<TextControl
											__next40pxDefaultSize
											__nextHasNoMarginBottom
											label={__("Link rel")}
											value={rel}
											onChange={(newRel) => setAttributes({ rel: newRel })}
										/>
									</ToolsPanelItem>
								</>
							)}
						</ToolsPanel>
					</InspectorControls>
				</>
			)}
			{titleElement}
		</>
	);
}
