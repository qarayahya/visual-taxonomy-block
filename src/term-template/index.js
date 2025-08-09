import { registerBlockType } from "@wordpress/blocks";
import "./paragraph-variations";
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import { layout } from "@wordpress/icons";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. T</svg>he code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

registerBlockType(metadata.name, {
	icon: layout,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
