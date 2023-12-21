"use strict";
exports.id = "component---src-templates-project-js";
exports.ids = ["component---src-templates-project-js"];
exports.modules = {

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveRepositoryName: () => (/* binding */ getActiveRepositoryName)
/* harmony export */ });
/* harmony import */ var _getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPreviewCookie.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js");

const getActiveRepositoryName = () => {
  const [, repositoryName] = decodeURIComponent((0,_getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__.getPreviewCookie)() || "").match(/"([a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]).prismic.io"/) || [];
  return repositoryName;
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComponentDisplayName: () => (/* binding */ getComponentDisplayName)
/* harmony export */ });
const getComponentDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || "Component";


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDocument: () => (/* binding */ getDocument)
/* harmony export */ });
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../usePrismicPreviewStore.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js");

const getDocument = prismicId => {
  const state = _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__.usePrismicPreviewStore.getState();
  return state.documents[prismicId];
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPreviewCookie: () => (/* binding */ getPreviewCookie)
/* harmony export */ });
const readValue = value => {
  return value.replace(/%3B/g, ";");
};
const getPreviewCookie = () => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const parts = cookie.split("=");
    const thisName = readValue(parts[0]).replace(/%3D/g, "=");
    if (thisName === "io.prismic.preview") {
      const value = parts.slice(1).join("=");
      return readValue(value);
    }
  }
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty)
/* harmony export */ });
const hasOwnProperty = (obj, prop) => {
  return obj.hasOwnProperty(prop);
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMergePrismicPreviewData: () => (/* binding */ useMergePrismicPreviewData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_getDocument_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/getDocument.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js");
/* harmony import */ var _lib_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/hasOwnProperty.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js");
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePrismicPreviewStore.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js");




const mergePreviewData = ({
  staticDataNode,
  publishedDocumentIDs
}) => {
  const castedData = staticDataNode;
  if (typeof castedData === "object" && castedData !== null && !Array.isArray(castedData)) {
    if ((0,_lib_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(castedData, "_previewable")) {
      const replacement = (0,_lib_getDocument_js__WEBPACK_IMPORTED_MODULE_2__.getDocument)(castedData._previewable);
      if (replacement) {
        return replacement;
      } else {
        if (publishedDocumentIDs.length > 0 && !publishedDocumentIDs.includes(castedData._previewable)) {
          return null;
        } else {
          return staticDataNode;
        }
      }
    } else {
      const newNode = {};
      for (const key in castedData) {
        newNode[key] = mergePreviewData({
          staticDataNode: castedData[key],
          publishedDocumentIDs
        });
      }
      return newNode;
    }
  } else if (Array.isArray(staticDataNode)) {
    return staticDataNode.map(element => {
      return mergePreviewData({
        staticDataNode: element,
        publishedDocumentIDs
      });
    });
  } else {
    return staticDataNode;
  }
};
const useMergePrismicPreviewData = staticData => {
  const isBootstrapped = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__.usePrismicPreviewStore)(state => state.isBootstrapped);
  const publishedDocumentIDs = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__.usePrismicPreviewStore)(state => state.publishedDocumentIDs);
  const documents = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__.usePrismicPreviewStore)(state => state.documents);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (staticData) {
      const hasPreviewData = publishedDocumentIDs.length > 0 || Object.keys(documents).length > 0;
      if (isBootstrapped && hasPreviewData) {
        return mergePreviewData({
          staticDataNode: staticData,
          publishedDocumentIDs
        });
      } else {
        return staticData;
      }
    }
  }, [documents, publishedDocumentIDs, isBootstrapped, staticData]);
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withPrismicPreview: () => (/* binding */ withPrismicPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getActiveRepositoryName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js");
/* harmony import */ var _lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/getComponentDisplayName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js");
/* harmony import */ var _useMergePrismicPreviewData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useMergePrismicPreviewData.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js");
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usePrismicPreviewStore.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js");






const withPrismicPreview = WrappedComponent => {
  const WithPrismicPreview = props => {
    const isBootstrapped = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_2__.usePrismicPreviewStore)(state => state.isBootstrapped);
    const [isPrismicPreview, setIsPrismicPreview] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const mergedData = (0,_useMergePrismicPreviewData_js__WEBPACK_IMPORTED_MODULE_3__.useMergePrismicPreviewData)(props.data);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
      const abortController = new AbortController();
      if (!isBootstrapped) {
        const repositoryName = (0,_lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_4__.getActiveRepositoryName)();
        setIsPrismicPreview(!!repositoryName);
        if (repositoryName) {
          __webpack_require__.e(/*! import() */ "node_modules_gatsby-plugin-prismic-previews_dist_lib_bootstrapPrismicPreview_js-_496f0").then(__webpack_require__.bind(__webpack_require__, /*! ./lib/bootstrapPrismicPreview.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/bootstrapPrismicPreview.js")).then(mod => mod.default(repositoryName, abortController));
        }
      }
      return () => abortController.abort();
    }, [isBootstrapped]);
    return /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent, {
      ...props,
      data: mergedData,
      originalData: props.data,
      isPrismicPreview
    });
  };
  if (true) {
    const wrappedComponentName = (0,_lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_5__.getComponentDisplayName)(WrappedComponent);
    WithPrismicPreview.displayName = `withPrismicPreview(${wrappedComponentName})`;
  }
  return WithPrismicPreview;
};


/***/ }),

/***/ "./src/components/tf/media-query.js":
/*!******************************************!*\
  !*** ./src/components/tf/media-query.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-plugin-prismic-previews */ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_5__.withPrismicPreview)(Project));
const query = "1636765148";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-project-js.js.map