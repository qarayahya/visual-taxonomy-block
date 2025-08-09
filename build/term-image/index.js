/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/post-featured-image.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post-featured-image.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const postFeaturedImage = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M19 3H5c-.6 0-1 .4-1 1v7c0 .5.4 1 1 1h14c.5 0 1-.4 1-1V4c0-.6-.4-1-1-1zM5.5 10.5v-.4l1.8-1.3 1.3.8c.3.2.7.2.9-.1L11 8.1l2.4 2.4H5.5zm13 0h-2.9l-4-4c-.3-.3-.8-.3-1.1 0L8.9 8l-1.2-.8c-.3-.2-.6-.2-.9 0l-1.3 1V4.5h13v6zM4 20h9v-1.5H4V20zm0-4h16v-1.5H4V16z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postFeaturedImage);
//# sourceMappingURL=post-featured-image.js.map

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./src/term-image/block.json":
/*!***********************************!*\
  !*** ./src/term-image/block.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"visual-taxonomy-block/term-image","title":"Term Image","category":"taxonomies","description":"Display a term\'s featured image.","textdomain":"visual-taxonomy-block","ancestor":["visual-taxonomy-block/terms-loop"],"usesContext":["termId","taxonomyName"],"attributes":{"isLink":{"type":"boolean","default":false,"role":"content"},"aspectRatio":{"type":"string"},"width":{"type":"string"},"height":{"type":"string"},"scale":{"type":"string","default":"cover"},"sizeSlug":{"type":"string"},"rel":{"type":"string","attribute":"rel","default":"","role":"content"},"linkTarget":{"type":"string","default":"_self","role":"content"},"overlayColor":{"type":"string"},"customOverlayColor":{"type":"string"},"dimRatio":{"type":"number","default":0},"gradient":{"type":"string"},"customGradient":{"type":"string"}},"example":{"viewportWidth":350},"supports":{"align":["left","right","center","wide","full"],"color":{"text":false,"background":false},"__experimentalBorder":{"color":true,"radius":true,"width":true,"__experimentalSkipSerialization":true,"__experimentalDefaultControls":{"color":true,"radius":true,"width":true}},"filter":{"duotone":true},"shadow":{"__experimentalSkipSerialization":true},"html":false,"spacing":{"margin":true,"padding":true},"interactivity":{"clientNavigation":true}},"selectors":{"border":".wp-block-visual-taxonomy-block-term-image img, .wp-block-visual-taxonomy-block-term-image .block-editor-media-placeholder, .wp-block-visual-taxonomy-block-term-image .wp-block-visual-taxonomy-block-term-image__overlay","shadow":".wp-block-visual-taxonomy-block-term-image img, .wp-block-visual-taxonomy-block-term-image .components-placeholder","filter":{"duotone":".wp-block-visual-taxonomy-block-term-image img, .wp-block-visual-taxonomy-block-term-image .wp-block-visual-taxonomy-block-term-image__placeholder, .wp-block-visual-taxonomy-block-term-image .components-placeholder__illustration, .wp-block-visual-taxonomy-block-term-image .components-placeholder::before"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

/***/ }),

/***/ "./src/term-image/dimension-controls.js":
/*!**********************************************!*\
  !*** ./src/term-image/dimension-controls.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




const SCALE_OPTIONS = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "cover",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Cover", "Scale option for Image dimension control")
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "contain",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Contain", "Scale option for Image dimension control")
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption, {
    value: "fill",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Fill", "Scale option for Image dimension control")
  })]
});
const DEFAULT_SCALE = "cover";
const scaleHelp = {
  cover: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image is scaled and cropped to fill the entire space without being distorted."),
  contain: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image is scaled to fill the space without clipping nor distorting."),
  fill: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image will be stretched and distorted to completely fill the space.")
};
const DimensionControls = ({
  clientId,
  attributes: {
    aspectRatio,
    width,
    height,
    scale
  },
  setAttributes
}) => {
  const [availableUnits, defaultRatios, themeRatios, showDefaultRatios] = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useSettings)("spacing.units", "dimensions.aspectRatios.default", "dimensions.aspectRatios.theme", "dimensions.defaultAspectRatios");
  const units = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseCustomUnits)({
    availableUnits: availableUnits || ["px", "%", "vw", "em", "rem"]
  });
  const onDimensionChange = (dimension, nextValue) => {
    const parsedValue = parseFloat(nextValue);
    /**
     * If we have no value set and we change the unit,
     * we don't want to set the attribute, as it would
     * end up having the unit as value without any number.
     */
    if (isNaN(parsedValue) && nextValue) {
      return;
    }
    setAttributes({
      [dimension]: parsedValue < 0 ? "0" : nextValue
    });
  };
  const scaleLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Scale", "Image scaling options");
  const showScaleControl = height || aspectRatio && aspectRatio !== "auto";
  const themeOptions = themeRatios?.map(({
    name,
    ratio
  }) => ({
    label: name,
    value: ratio
  }));
  const defaultOptions = defaultRatios?.map(({
    name,
    ratio
  }) => ({
    label: name,
    value: ratio
  }));
  const aspectRatioOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)("Original", "Aspect ratio option for dimensions control"),
    value: "auto"
  }, ...(showDefaultRatios ? defaultOptions : []), ...(themeOptions ? themeOptions : [])];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      hasValue: () => !!aspectRatio,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect ratio"),
      onDeselect: () => setAttributes({
        aspectRatio: undefined
      }),
      resetAllFilter: () => ({
        aspectRatio: undefined
      }),
      isShownByDefault: true,
      panelId: clientId,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect ratio"),
        value: aspectRatio,
        options: aspectRatioOptions,
        onChange: nextAspectRatio => setAttributes({
          aspectRatio: nextAspectRatio
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      className: "single-column",
      hasValue: () => !!height,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height"),
      onDeselect: () => setAttributes({
        height: undefined
      }),
      resetAllFilter: () => ({
        height: undefined
      }),
      isShownByDefault: true,
      panelId: clientId,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
        __next40pxDefaultSize: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height"),
        labelPosition: "top",
        value: height || "",
        min: 0,
        onChange: nextHeight => onDimensionChange("height", nextHeight),
        units: units
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      className: "single-column",
      hasValue: () => !!width,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width"),
      onDeselect: () => setAttributes({
        width: undefined
      }),
      resetAllFilter: () => ({
        width: undefined
      }),
      isShownByDefault: true,
      panelId: clientId,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
        __next40pxDefaultSize: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width"),
        labelPosition: "top",
        value: width || "",
        min: 0,
        onChange: nextWidth => onDimensionChange("width", nextWidth),
        units: units
      })
    }), showScaleControl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToolsPanelItem, {
      hasValue: () => !!scale && scale !== DEFAULT_SCALE,
      label: scaleLabel,
      onDeselect: () => setAttributes({
        scale: DEFAULT_SCALE
      }),
      resetAllFilter: () => ({
        scale: DEFAULT_SCALE
      }),
      isShownByDefault: true,
      panelId: clientId,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true,
        label: scaleLabel,
        value: scale,
        help: scaleHelp[scale],
        onChange: value => setAttributes({
          scale: value
        }),
        isBlock: true,
        children: SCALE_OPTIONS
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DimensionControls);

/***/ }),

/***/ "./src/term-image/edit.js":
/*!********************************!*\
  !*** ./src/term-image/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TermImageEdit)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dimension_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dimension-controls */ "./src/term-image/dimension-controls.js");
/* harmony import */ var _overlay_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlay-controls */ "./src/term-image/overlay-controls.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlay */ "./src/term-image/overlay.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




// Placeholder image path

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400?text=Image%20not%20set"; // TODO: Create a placeholder image.

function TermImageEdit({
  clientId,
  attributes,
  setAttributes,
  context: {
    termId,
    taxonomyName
  }
}) {
  const {
    termImageID,
    termLink
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEntityRecord
    } = select("core");

    // Get the term record
    const term = getEntityRecord("taxonomy", taxonomyName, termId);

    // Return both term image id and link, or null if not loaded yet
    return {
      termImageID: term ? term._taxonomy_image_id : null,
      termLink: term ? term.link : null
    };
  }, [termId, taxonomyName]);
  const {
    isLink,
    aspectRatio,
    height,
    width,
    scale,
    sizeSlug,
    rel,
    linkTarget
  } = attributes;

  // Get the actual image data if we have an image ID
  const {
    media
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEntityRecord
    } = select("core");
    return {
      media: termImageID && getEntityRecord("postType", "attachment", termImageID, {
        context: "view"
      })
    };
  }, [termImageID]);
  const mediaUrl = termImageID ? media?.media_details?.sizes?.[sizeSlug]?.source_url || media?.source_url : PLACEHOLDER_IMAGE;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    style: {
      width,
      height,
      aspectRatio
    }
  });
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseBorderProps)(attributes);
  const shadowProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalGetShadowClassesAndStyles)(attributes);
  const blockEditingMode = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockEditingMode)();
  const imageStyles = {
    ...borderProps.style,
    ...shadowProps.style,
    height: aspectRatio ? "100%" : height,
    width: !!aspectRatio && "100%",
    objectFit: !!(height || aspectRatio) && scale
  };
  const controls = blockEditingMode === "default" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      group: "color",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_overlay_controls__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        clientId: clientId
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      group: "dimensions",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_dimension_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
        clientId: clientId,
        attributes: attributes,
        setAttributes: setAttributes,
        media: media
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanel, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Settings"),
        resetAll: () => {
          setAttributes({
            isLink: false,
            linkTarget: "_self",
            rel: ""
          });
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Link to term"),
          isShownByDefault: true,
          hasValue: () => !!isLink,
          onDeselect: () => setAttributes({
            isLink: false
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            __nextHasNoMarginBottom: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Link to term"),
            onChange: () => setAttributes({
              isLink: !isLink
            }),
            checked: isLink
          })
        }), isLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Open in new tab"),
          isShownByDefault: true,
          hasValue: () => "_self" !== linkTarget,
          onDeselect: () => setAttributes({
            linkTarget: "_self"
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            __nextHasNoMarginBottom: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Open in new tab"),
            onChange: value => setAttributes({
              linkTarget: value ? "_blank" : "_self"
            }),
            checked: linkTarget === "_blank"
          })
        }), isLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Link rel"),
          isShownByDefault: true,
          hasValue: () => !!rel,
          onDeselect: () => setAttributes({
            rel: ""
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Link rel"),
            value: rel,
            onChange: newRel => setAttributes({
              rel: newRel
            })
          })
        })]
      })
    })]
  });

  // If no term context is available, show fallback
  if (!termId || !taxonomyName) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [controls, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("figure", {
        ...blockProps,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          className: borderProps.className,
          src: PLACEHOLDER_IMAGE,
          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Term image placeholder"),
          style: imageStyles
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_overlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
          attributes: attributes,
          setAttributes: setAttributes,
          clientId: clientId
        })]
      })]
    });
  }
  const image = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
    className: borderProps.className,
    src: mediaUrl,
    alt: media && media?.alt_text ? media.alt_text : termImageID ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Term image") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Term image placeholder"),
    style: imageStyles
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [controls, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("figure", {
      ...blockProps,
      children: [!!isLink && termLink ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        href: termLink,
        target: linkTarget,
        rel: rel,
        onClick: event => event.preventDefault() // Prevent navigation in editor
        ,
        children: image
      }) : image, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_overlay__WEBPACK_IMPORTED_MODULE_7__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        clientId: clientId
      })]
    })]
  });
}

/***/ }),

/***/ "./src/term-image/index.js":
/*!*********************************!*\
  !*** ./src/term-image/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/term-image/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/term-image/block.json");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/post-featured-image.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/term-image/style.scss");





/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. T</svg>he code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/term-image/overlay-controls.js":
/*!********************************************!*\
  !*** ./src/term-image/overlay-controls.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */





const Overlay = ({
  clientId,
  attributes,
  setAttributes,
  overlayColor,
  setOverlayColor
}) => {
  const {
    dimRatio
  } = attributes;
  const {
    gradientValue,
    setGradient
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseGradient)();
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseMultipleOriginColorsAndGradients)();
  if (!colorGradientSettings.hasColorsOrGradients) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalColorGradientSettingsDropdown, {
      __experimentalIsRenderedInSidebar: true,
      settings: [{
        colorValue: overlayColor.color,
        gradientValue,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Overlay"),
        onColorChange: setOverlayColor,
        onGradientChange: setGradient,
        isShownByDefault: true,
        resetAllFilter: () => ({
          overlayColor: undefined,
          customOverlayColor: undefined,
          gradient: undefined,
          customGradient: undefined
        }),
        clearable: true
      }],
      panelId: clientId,
      ...colorGradientSettings
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToolsPanelItem, {
      hasValue: () => dimRatio !== undefined,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Overlay opacity"),
      onDeselect: () => setAttributes({
        dimRatio: 0
      }),
      resetAllFilter: () => ({
        dimRatio: 0
      }),
      isShownByDefault: true,
      panelId: clientId,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        __nextHasNoMarginBottom: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Overlay opacity"),
        value: dimRatio,
        onChange: newDimRatio => setAttributes({
          dimRatio: newDimRatio
        }),
        min: 0,
        max: 100,
        step: 10,
        required: true,
        __next40pxDefaultSize: true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.withColors)({
  overlayColor: "background-color"
})])(Overlay));

/***/ }),

/***/ "./src/term-image/overlay.js":
/*!***********************************!*\
  !*** ./src/term-image/overlay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/term-image/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const Overlay = ({
  attributes,
  overlayColor
}) => {
  const {
    dimRatio
  } = attributes;
  const {
    gradientClass,
    gradientValue
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseGradient)();
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseMultipleOriginColorsAndGradients)();
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalUseBorderProps)(attributes);
  const overlayStyles = {
    backgroundColor: overlayColor.color,
    backgroundImage: gradientValue,
    ...borderProps.style
  };
  if (!colorGradientSettings.hasColorsOrGradients || !dimRatio) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
    "aria-hidden": "true",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])("wp-block-visual-taxonomy-block-term-image__overlay", (0,_utils__WEBPACK_IMPORTED_MODULE_3__.dimRatioToClass)(dimRatio), {
      [overlayColor.class]: overlayColor.class,
      "has-background-dim": dimRatio !== undefined,
      "has-background-gradient": gradientValue,
      [gradientClass]: gradientClass
    }, borderProps.className),
    style: overlayStyles
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.withColors)({
  overlayColor: "background-color"
})])(Overlay));

/***/ }),

/***/ "./src/term-image/style.scss":
/*!***********************************!*\
  !*** ./src/term-image/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/term-image/utils.js":
/*!*********************************!*\
  !*** ./src/term-image/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dimRatioToClass: () => (/* binding */ dimRatioToClass)
/* harmony export */ });
/**
 * Generates the opacity/dim class based on given number.
 *
 * @param {number} ratio Dim/opacity number.
 *
 * @return {string} Generated class.
 */
function dimRatioToClass(ratio) {
  return ratio === undefined ? null : "has-background-dim-" + 10 * Math.round(ratio / 10);
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"term-image/index": 0,
/******/ 			"term-image/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkvisual_taxonomy_block"] = globalThis["webpackChunkvisual_taxonomy_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["term-image/style-index"], () => (__webpack_require__("./src/term-image/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map