/**
 * External dependencies
 */
import clsx from "clsx";
/**
 * WordPress dependencies
 */
import { memo, useMemo, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { __, _x } from "@wordpress/i18n";
import {
	BlockControls,
	BlockContextProvider,
	__experimentalUseBlockPreview as useBlockPreview,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { Spinner, ToolbarGroup } from "@wordpress/components";
import { list, grid } from "@wordpress/icons";

import "./editor.scss";

const TEMPLATE = [
	["visual-taxonomy-block/term-image"],
	["visual-taxonomy-block/term-title"],
];

function TermTemplateInnerBlocks({ classList }) {
	const innerBlocksProps = useInnerBlocksProps(
		{ className: "visual-taxonomy-block__term-item" },
		{ template: TEMPLATE, __unstableDisableLayoutClassNames: true },
	);
	return <li {...innerBlocksProps} />;
}

function TermTemplateBlockPreview({
	blocks,
	blockContextId,
	isHidden,
	setActiveBlockContextId,
}) {
	const blockPreviewProps = useBlockPreview({
		blocks,
	});

	const handleOnClick = () => {
		setActiveBlockContextId(blockContextId);
	};

	const style = {
		display: isHidden ? "none" : undefined,
	};

	return (
		<li
			{...blockPreviewProps}
			tabIndex={0}
			role="button"
			onClick={handleOnClick}
			style={style}
		/>
	);
}

const MemoizedTermTemplateBlockPreview = memo(TermTemplateBlockPreview);

export default function TermTemplateEdit({
	setAttributes,
	clientId,
	context,
	attributes,
	__unstableLayoutClassNames,
}) {
	const { taxonomyName, itemsPerPage = -1, hideEmpty } = context;
	const { layout } = attributes;
	const { type: layoutType, columnCount = 3 } = layout || {};
	const [activeBlockContextId, setActiveBlockContextId] = useState();
	const { terms, blocks } = useSelect(
		(select) => {
			const { getBlocks } = select(blockEditorStore);
			// Fetch terms based on taxonomyName
			const fetchedTerms =
				taxonomyName &&
				select("core").getEntityRecords("taxonomy", taxonomyName, {
					per_page: itemsPerPage || -1,
					orderby: "count",
					order: "desc",
					hide_empty: hideEmpty,
				});
			return {
				terms: fetchedTerms,
				blocks: getBlocks(clientId),
			};
		},
		[clientId, context],
	);

	const blockContexts = useMemo(
		() =>
			terms?.map((term) => ({
				termId: term.id,
				taxonomyName: taxonomyName,
			})),
		[terms, taxonomyName],
	);

	const blockProps = useBlockProps({
		className: clsx(__unstableLayoutClassNames, {
			[`columns-${columnCount}`]: layoutType === "grid" && columnCount, // Ensure column count is flagged via classname for backwards compatibility.
		}),
	});

	const setDisplayLayout = (newDisplayLayout) =>
		setAttributes({
			layout: { ...layout, ...newDisplayLayout },
		});

	const displayLayoutControls = [
		{
			icon: list,
			title: _x("List view", "Post template block display setting"),
			onClick: () => setDisplayLayout({ type: "default" }),
			isActive: layoutType === "default" || layoutType === "constrained",
		},
		{
			icon: grid,
			title: _x("Grid view", "Post template block display setting"),
			onClick: () =>
				setDisplayLayout({
					type: "grid",
					columnCount,
				}),
			isActive: layoutType === "grid",
		},
	];

	if (!terms) {
		return (
			<p {...blockProps}>
				<Spinner />
			</p>
		);
	}

	if (!terms.length) {
		return <p {...blockProps}> {__("No terms found.")}</p>;
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup controls={displayLayoutControls} />
			</BlockControls>
			<ul {...blockProps}>
				{blockContexts &&
					blockContexts.map((blockContext) => (
						<BlockContextProvider
							key={blockContext.termId}
							value={blockContext}
						>
							{blockContext.termId ===
							(activeBlockContextId || blockContexts[0]?.termId) ? (
								<TermTemplateInnerBlocks classList="single-tax" />
							) : null}
							<MemoizedTermTemplateBlockPreview
								blocks={blocks}
								blockContextId={blockContext.termId}
								classList={blockContext.classList}
								setActiveBlockContextId={setActiveBlockContextId}
								isHidden={
									blockContext.termId ===
									(activeBlockContextId || blockContexts[0]?.termId)
								}
							/>
						</BlockContextProvider>
					))}
			</ul>
		</>
	);
}
