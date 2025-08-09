import { registerBlockType } from "@wordpress/blocks";
import { loop } from "@wordpress/icons";

import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import variations from "./variations";

registerBlockType(metadata.name, {
	icon: loop,
	edit: Edit,
	save,
	variations,
});
