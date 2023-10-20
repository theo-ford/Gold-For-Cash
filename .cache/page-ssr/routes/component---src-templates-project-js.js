exports.id = "component---src-templates-project-js";
exports.ids = ["component---src-templates-project-js"];
exports.modules = {

/***/ "./node_modules/gatsby-source-prismic/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-source-prismic/dist/index.js ***!
  \**********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/tf/media-query.js":
/*!******************************************!*\
  !*** ./src/components/tf/media-query.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMediaQuery: () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediaQuery(query) {
  const {
    0: matches,
    1: setMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
}

/***/ }),

/***/ "./src/components/utils/image-orientation.js":
/*!***************************************************!*\
  !*** ./src/components/utils/image-orientation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageOrientation: () => (/* binding */ ImageOrientation)
/* harmony export */ });
const ImageOrientation = image => {
  const isImageLandscape = image.dimensions.width > image.dimensions.height;
  const isImageSquare = image.dimensions.width === image.dimensions.height;
  if (isImageLandscape === true) {
    // console.log("landscape");
    return "landscape";
  } else if (isImageSquare === true) {
    // console.log("square");
    return "square";
  } else {
    // console.log("portrait");
    return "portrait";
  }
};

/***/ }),

/***/ "./src/templates/project.js?export=default":
/*!*************************************************!*\
  !*** ./src/templates/project.js?export=default ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_source_prismic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-source-prismic */ "./node_modules/gatsby-source-prismic/dist/index.js");
/* harmony import */ var gatsby_source_prismic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gatsby_source_prismic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_utils_image_orientation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils/image-orientation */ "./src/components/utils/image-orientation.js");
/* harmony import */ var _components_tf_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tf/media-query */ "./src/components/tf/media-query.js");







// import { VideoComponent } from "../components/tf/video_component";
// import { VideoComponentNoControls } from "../components/tf/video-component-no-controls";

const Project = ({
  data
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "testing");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,gatsby_source_prismic__WEBPACK_IMPORTED_MODULE_5__.withPreview)(Project));
const query = "1636765148";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-project-js.js.map