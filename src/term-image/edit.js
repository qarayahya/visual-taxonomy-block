/**
 * External dependencies
 */
import clsx from "clsx";

/**
 * WordPress dependencies
 */
import { useSelect } from "@wordpress/data";
import {
	ToggleControl,
	TextControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from "@wordpress/components";
import {
	InspectorControls,
	useBlockProps,
	__experimentalUseBorderProps as useBorderProps,
	__experimentalGetShadowClassesAndStyles as getShadowClassesAndStyles,
	useBlockEditingMode,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import DimensionControls from "./dimension-controls";
import OverlayControls from "./overlay-controls";
import Overlay from "./overlay";

// Placeholder image path
const PLACEHOLDER_IMAGE = "https://placehold.co/600x400?text=Image%20not%20set"; // TODO: Create a placeholder image.

export default function TermImageEdit({
	clientId,
	attributes,
	setAttributes,
	context: { termId, taxonomyName },
}) {
	const { termImageID, termLink } = useSelect(
		(select) => {
			const { getEntityRecord } = select("core");

			// Get the term record
			const term = getEntityRecord("taxonomy", taxonomyName, termId);

			// Return both term image id and link, or null if not loaded yet
			return {
				termImageID: term ? term._taxonomy_image_id : null,
				termLink: term ? term.link : null,
			};
		},
		[termId, taxonomyName],
	);

	const {
		isLink,
		aspectRatio,
		height,
		width,
		scale,
		sizeSlug,
		rel,
		linkTarget,
	} = attributes;

	// Get the actual image data if we have an image ID
	const { media } = useSelect(
		(select) => {
			const { getEntityRecord } = select("core");
			return {
				media:
					termImageID &&
					getEntityRecord("postType", "attachment", termImageID, {
						context: "view",
					}),
			};
		},
		[termImageID],
	);

	const mediaUrl = termImageID
		? media?.media_details?.sizes?.[sizeSlug]?.source_url || media?.source_url
		: PLACEHOLDER_IMAGE;

	const blockProps = useBlockProps({
		style: { width, height, aspectRatio },
	});
	const borderProps = useBorderProps(attributes);
	const shadowProps = getShadowClassesAndStyles(attributes);
	const blockEditingMode = useBlockEditingMode();

	const imageStyles = {
		...borderProps.style,
		...shadowProps.style,
		height: aspectRatio ? "100%" : height,
		width: !!aspectRatio && "100%",
		objectFit: !!(height || aspectRatio) && scale,
	};

	const controls = blockEditingMode === "default" && (
		<>
			<InspectorControls group="color">
				<OverlayControls
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			</InspectorControls>
			<InspectorControls group="dimensions">
				<DimensionControls
					clientId={clientId}
					attributes={attributes}
					setAttributes={setAttributes}
					media={media}
				/>
			</InspectorControls>
			<InspectorControls>
				<ToolsPanel
					label={__("Settings")}
					resetAll={() => {
						setAttributes({
							isLink: false,
							linkTarget: "_self",
							rel: "",
						});
					}}
				>
					<ToolsPanelItem
						label={__("Link to term")}
						isShownByDefault
						hasValue={() => !!isLink}
						onDeselect={() =>
							setAttributes({
								isLink: false,
							})
						}
					>
						<ToggleControl
							__nextHasNoMarginBottom
							label={__("Link to term")}
							onChange={() => setAttributes({ isLink: !isLink })}
							checked={isLink}
						/>
					</ToolsPanelItem>

					{isLink && (
						<ToolsPanelItem
							label={__("Open in new tab")}
							isShownByDefault
							hasValue={() => "_self" !== linkTarget}
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
					)}
					{isLink && (
						<ToolsPanelItem
							label={__("Link rel")}
							isShownByDefault
							hasValue={() => !!rel}
							onDeselect={() =>
								setAttributes({
									rel: "",
								})
							}
						>
							<TextControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								label={__("Link rel")}
								value={rel}
								onChange={(newRel) => setAttributes({ rel: newRel })}
							/>
						</ToolsPanelItem>
					)}
				</ToolsPanel>
			</InspectorControls>
		</>
	);

	// If no term context is available, show fallback
	if (!termId || !taxonomyName) {
		return (
			<>
				{controls}
				<figure {...blockProps}>
					<img
						className={borderProps.className}
						src={PLACEHOLDER_IMAGE}
						alt={__("Term image placeholder")}
						style={imageStyles}
					/>
					<Overlay
						attributes={attributes}
						setAttributes={setAttributes}
						clientId={clientId}
					/>
				</figure>
			</>
		);
	}

	const image = (
		<img
			className={borderProps.className}
			src={mediaUrl}
			alt={
				media && media?.alt_text
					? media.alt_text
					: termImageID
					? __("Term image")
					: __("Term image placeholder")
			}
			style={imageStyles}
		/>
	);

	return (
		<>
			{controls}
			<figure {...blockProps}>
				{/* If the term image is linked, wrap in an <a/> tag */}
				{!!isLink && termLink ? (
					<a
						href={termLink}
						target={linkTarget}
						rel={rel}
						onClick={(event) => event.preventDefault()} // Prevent navigation in editor
					>
						{image}
					</a>
				) : (
					image
				)}
				<Overlay
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			</figure>
		</>
	);
}
