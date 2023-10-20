"use strict";
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 5790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(993);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3935);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7076);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9550);
/* harmony import */ var gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9656);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4593);
/* harmony import */ var _components_tf_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7000);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6066);
/* harmony import */ var _components_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2431);
/* harmony import */ var _assets_G4C_kern_black_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8459);
/* harmony import */ var _assets_G4C_kern_black_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_G4C_kern_black_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_tf_animation_fixed_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6802);
/* harmony import */ var _components_tf_zz_video_component_with_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9822);
/* harmony import */ var _components_tf_zz_video_component_no_controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3213);
/* harmony import */ var _components_tf_nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5191);
/* harmony import */ var _components_tf_index_archive_two_img__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1480);
/* harmony import */ var _components_tf_index_archive_four_img__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(617);
/* harmony import */ var _components_tf_index_archive_project_info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3155);
/* harmony import */ var _components_tf_index_archive_statement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3012);
/* harmony import */ var _components_tf_index_archive_intro__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4458);
/* harmony import */ var _components_tf_index_archive_sizzle_vid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4031);
/* harmony import */ var _components_tf_index_archive_contents__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9509);
// import Icon from "../../assets/WhiteLogo.svg";
// import { TwoVid } from "../components/tf/index_archive/two-vid";
const Grid16=styled_components__WEBPACK_IMPORTED_MODULE_19__["default"].div.withConfig({displayName:"archive__Grid16",componentId:"sc-1dj4idc-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr;grid-column-gap:10px;@media (max-width:666px){grid-template-columns:1fr 1fr 1fr 1fr;grid-column-gap:5px;}"]);const ProjectsCon=styled_components__WEBPACK_IMPORTED_MODULE_19__["default"].div.withConfig({displayName:"archive__ProjectsCon",componentId:"sc-1dj4idc-1"})(["float:left;width:100%;"]);const PageContentCon=styled_components__WEBPACK_IMPORTED_MODULE_19__["default"].div.withConfig({displayName:"archive__PageContentCon",componentId:"sc-1dj4idc-2"})(["position:absolute;top:0;z-index:100;overflow:hidden;"]);const PageLinks=styled_components__WEBPACK_IMPORTED_MODULE_19__["default"].p.withConfig({displayName:"archive__PageLinks",componentId:"sc-1dj4idc-3"})(["font-family:\"Helvetica Neue LT Pro\",sans-serif;font-size:32px;font-weight:bold;letter-spacing:-2%;line-height:112.5%;"]);const ContentsCon=styled_components__WEBPACK_IMPORTED_MODULE_19__["default"].div.withConfig({displayName:"archive__ContentsCon",componentId:"sc-1dj4idc-4"})(["margin-bottom:200px;margin-left:10px;@media (max-width:666px){margin-left:5px;}"]);const Archive=({data})=>{// console.log(data.prismicArchive.data.archive_relationship_group);
const Contents=()=>{const contents2=data.prismicArchive.data.archive_relationship_group.filter(function(content){if(content.archive_relationship_field.document.type=="statement"){return null;}return content;}).map((content,index)=>{if(content.archive_relationship_field.document.type=="project"){const handleClickScroll=()=>{var element=document.getElementById(`${content.archive_relationship_field.document.uid}`);if(element){element.scrollIntoView({behavior:"smooth"});}};var i=1;var x=i++;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{onClick:handleClickScroll},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageLinks,null,content.archive_relationship_field.document.data.index_number.text," ",content.archive_relationship_field.document.data.title.text));}});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentsCon,null,contents2);};const archive=data.prismicArchive.data.archive_relationship_group.map((content,index)=>{if(content.archive_relationship_field.document.type=="project"){const project=content.archive_relationship_field.document.data.body.map((content_four,index)=>{if(content_four.slice_type=="4ximg"){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_index_archive_four_img__WEBPACK_IMPORTED_MODULE_13__/* .FourImg */ .b,{data:content_four.primary});}else if(content_four.slice_type=="2ximg"){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_index_archive_two_img__WEBPACK_IMPORTED_MODULE_12__/* .TwoImg */ .c,{data:content_four.primary});}else if(content_four.slice_type=="video"){// return <TwoVid data={content_four.primary} />;
}});// console.log(
//   content.archive_relationship_field.document.data.title.text
// );
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{id:content.archive_relationship_field.document.uid},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_index_archive_project_info__WEBPACK_IMPORTED_MODULE_14__/* .ProjectInfo */ .v,{data:content.archive_relationship_field.document}),project);}if(content.archive_relationship_field.document.type=="statement"){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_index_archive_statement__WEBPACK_IMPORTED_MODULE_15__/* .Statement */ .P,{data:content.archive_relationship_field.document.data});}});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageContentCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_index_archive_sizzle_vid__WEBPACK_IMPORTED_MODULE_17__/* .SizzleVidComponent */ .q,{data:data.prismicHomepage.data}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_index_archive_intro__WEBPACK_IMPORTED_MODULE_16__/* .Intro */ .p,{data:data.prismicHomepage.data}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_nav__WEBPACK_IMPORTED_MODULE_11__/* .Nav */ .J,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Contents,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectsCon,null,archive)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_animation_fixed_1__WEBPACK_IMPORTED_MODULE_8__/* .AnimationFixed1 */ .E,null));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_20__/* .withPrismicPreview */ .O)(Archive));const query="74350747";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-archive-js.js.map