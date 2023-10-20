"use strict";
exports.id = 769;
exports.ids = [769];
exports.modules = {

/***/ 8259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getActiveRepositoryName)
/* harmony export */ });
/* harmony import */ var _getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9248);
const getActiveRepositoryName=()=>{const[,repositoryName]=decodeURIComponent((0,_getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__/* .getPreviewCookie */ .k)()||"").match(/"([a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]).prismic.io"/)||[];return repositoryName;};

/***/ }),

/***/ 6780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ getDocument)
/* harmony export */ });
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(836);
const getDocument=prismicId=>{const state=_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__/* .usePrismicPreviewStore */ .K.getState();return state.documents[prismicId];};

/***/ }),

/***/ 9248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ getPreviewCookie)
/* harmony export */ });
const readValue=value=>{return value.replace(/%3B/g,";");};const getPreviewCookie=()=>{const cookies=document.cookie.split("; ");for(const cookie of cookies){const parts=cookie.split("=");const thisName=readValue(parts[0]).replace(/%3D/g,"=");if(thisName==="io.prismic.preview"){const value=parts.slice(1).join("=");return readValue(value);}}};

/***/ }),

/***/ 8581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ hasOwnProperty)
/* harmony export */ });
const hasOwnProperty=(obj,prop)=>{return obj.hasOwnProperty(prop);};

/***/ }),

/***/ 9656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ withPrismicPreview)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/Gold-For-Cash/node_modules/react/index.js"
var index_js_ = __webpack_require__(993);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js
var getActiveRepositoryName = __webpack_require__(8259);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js
var getDocument = __webpack_require__(6780);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js
var lib_hasOwnProperty = __webpack_require__(8581);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js + 2 modules
var usePrismicPreviewStore = __webpack_require__(836);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js
const mergePreviewData=({staticDataNode,publishedDocumentIDs})=>{const castedData=staticDataNode;if(typeof castedData==="object"&&castedData!==null&&!Array.isArray(castedData)){if((0,lib_hasOwnProperty/* hasOwnProperty */.n)(castedData,"_previewable")){const replacement=(0,getDocument/* getDocument */.M)(castedData._previewable);if(replacement){return replacement;}else{if(publishedDocumentIDs.length>0&&!publishedDocumentIDs.includes(castedData._previewable)){return null;}else{return staticDataNode;}}}else{const newNode={};for(const key in castedData){newNode[key]=mergePreviewData({staticDataNode:castedData[key],publishedDocumentIDs});}return newNode;}}else if(Array.isArray(staticDataNode)){return staticDataNode.map(element=>{return mergePreviewData({staticDataNode:element,publishedDocumentIDs});});}else{return staticDataNode;}};const useMergePrismicPreviewData=staticData=>{const isBootstrapped=(0,usePrismicPreviewStore/* usePrismicPreviewStore */.K)(state=>state.isBootstrapped);const publishedDocumentIDs=(0,usePrismicPreviewStore/* usePrismicPreviewStore */.K)(state=>state.publishedDocumentIDs);const documents=(0,usePrismicPreviewStore/* usePrismicPreviewStore */.K)(state=>state.documents);return index_js_.useMemo(()=>{if(staticData){const hasPreviewData=publishedDocumentIDs.length>0||Object.keys(documents).length>0;if(isBootstrapped&&hasPreviewData){return mergePreviewData({staticDataNode:staticData,publishedDocumentIDs});}else{return staticData;}}},[documents,publishedDocumentIDs,isBootstrapped,staticData]);};
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js
const withPrismicPreview=WrappedComponent=>{const WithPrismicPreview=props=>{const isBootstrapped=(0,usePrismicPreviewStore/* usePrismicPreviewStore */.K)(state=>state.isBootstrapped);const[isPrismicPreview,setIsPrismicPreview]=index_js_.useState(null);const mergedData=useMergePrismicPreviewData(props.data);index_js_.useEffect(()=>{const abortController=new AbortController();if(!isBootstrapped){const repositoryName=(0,getActiveRepositoryName/* getActiveRepositoryName */.G)();setIsPrismicPreview(!!repositoryName);if(repositoryName){Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(486), __webpack_require__.e(40)]).then(__webpack_require__.bind(__webpack_require__, 6486)).then(mod=>mod.default(repositoryName,abortController));}}return()=>abortController.abort();},[isBootstrapped]);return/* @__PURE__ */(0,jsx_runtime.jsx)(WrappedComponent,{...props,data:mergedData,originalData:props.data,isPrismicPreview});};if(false){}return WithPrismicPreview;};

/***/ }),

/***/ 7000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function useMediaQuery(query){const{0:matches,1:setMatches}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const media=window.matchMedia(query);if(media.matches!==matches){setMatches(media.matches);}const listener=()=>{setMatches(media.matches);};media.addListener(listener);return()=>media.removeListener(listener);},[matches,query]);return matches;}

/***/ }),

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9656);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4593);
/* harmony import */ var _components_tf_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7000);
// import { VideoComponent } from "../components/tf/video_component";
// import { VideoComponentNoControls } from "../components/tf/video-component-no-controls";
const Project=({data})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"testing");};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_4__/* .withPrismicPreview */ .O)(Project));const query="1636765148";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-project-js.js.map