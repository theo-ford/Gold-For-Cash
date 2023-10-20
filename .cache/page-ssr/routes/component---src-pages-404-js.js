"use strict";
exports.id = 883;
exports.ids = [883,678];
exports.modules = {

/***/ 4597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _404)
});

// EXTERNAL MODULE: external "/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/Gold-For-Cash/node_modules/react/index.js"
var index_js_ = __webpack_require__(993);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js
var getActiveRepositoryName = __webpack_require__(8259);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicUnpublishedPreview.js
const withPrismicUnpublishedPreview=WrappedComponent=>{const WithPrismicUnpublishedPreview=props=>{var _a;const[unpublishedData,setUnpublishedData]=index_js_.useState({});const ResolvedComponent=unpublishedData.component||WrappedComponent;const data=index_js_.useMemo(()=>({...props.data,...unpublishedData.data}),[props.data,unpublishedData.data]);index_js_.useEffect(()=>{const abortController=new AbortController();const repositoryName=(0,getActiveRepositoryName/* getActiveRepositoryName */.G)();if(repositoryName){Promise.all([Promise.all(/* import() */[__webpack_require__.e(121), __webpack_require__.e(486)]).then(__webpack_require__.bind(__webpack_require__, 6486)),__webpack_require__.e(/* import() */ 255).then(__webpack_require__.bind(__webpack_require__, 2255))]).then(([bootstrap,resolve])=>bootstrap.default(repositoryName,abortController).then(()=>{var _a2;return resolve.default(repositoryName,abortController,setUnpublishedData,(_a2=props.location)==null?void 0:_a2.pathname);}));}return()=>abortController.abort();},[(_a=props.location)==null?void 0:_a.pathname]);return/* @__PURE__ */(0,jsx_runtime.jsx)(ResolvedComponent,{...props,data});};if(false){}return WithPrismicUnpublishedPreview;};
// EXTERNAL MODULE: ./src/pages/index.js + 1 modules
var pages = __webpack_require__(7120);
;// CONCATENATED MODULE: ./src/pages/404.js
// import Template from "../templates/template";
const NotFoundPage=()=>/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement("h1",null,"Page not found!"));// If an unpublished `page` document is previewed, PageTemplate will be rendered.
/* harmony default export */ const _404 = (withPrismicUnpublishedPreview(NotFoundPage,{templateMap:{homepage:pages["default"]}}));

/***/ }),

/***/ 7120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/Gold-For-Cash/node_modules/react/index.js"
var index_js_ = __webpack_require__(993);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(9550);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js + 1 modules
var withPrismicPreview = __webpack_require__(9656);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
// EXTERNAL MODULE: ./src/components/tf/media-query.js
var media_query = __webpack_require__(7000);
// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(6066);
// EXTERNAL MODULE: ./src/components/hooks/useOnScreen.js
var useOnScreen = __webpack_require__(2431);
// EXTERNAL MODULE: ./assets/G4C_kern_black.svg
var G4C_kern_black = __webpack_require__(8459);
// EXTERNAL MODULE: ./src/components/tf/animation-fixed-1.js
var animation_fixed_1 = __webpack_require__(6802);
// EXTERNAL MODULE: ./src/components/tf/zz/video_component_with_controls.js
var video_component_with_controls = __webpack_require__(9822);
// EXTERNAL MODULE: ./src/components/tf/zz/video-component-no-controls.js
var video_component_no_controls = __webpack_require__(3213);
// EXTERNAL MODULE: ./src/components/tf/nav.js
var nav = __webpack_require__(5191);
// EXTERNAL MODULE: ./src/components/tf/index_archive/two-img.js
var two_img = __webpack_require__(1480);
// EXTERNAL MODULE: ./src/components/tf/index_archive/four-img.js
var four_img = __webpack_require__(617);
// EXTERNAL MODULE: ./node_modules/react-player/lib/index.js
var react_player_lib = __webpack_require__(2004);
;// CONCATENATED MODULE: ./src/components/tf/index_archive/two-vid.js
const Grid16=styled_components_esm["default"].div.withConfig({displayName:"two-vid__Grid16",componentId:"sc-1smx2hz-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr;grid-column-gap:10px;@media (max-width:666px){grid-template-columns:1fr 1fr 1fr 1fr;grid-column-gap:5px;}"]);const VideoConCon=styled_components_esm["default"].div.withConfig({displayName:"two-vid__VideoConCon",componentId:"sc-1smx2hz-1"})(["width:calc(100% - 20px);margin-left:10px;margin-top:100px;margin-bottom:100px;@media (max-width:666px){margin-top:100px;margin-bottom:100px;}"]);const VideoCon=styled_components_esm["default"].div.withConfig({displayName:"two-vid__VideoCon",componentId:"sc-1smx2hz-2"})(["grid-column:span 8;@media (max-width:666px){grid-column:span 4;}"]);const VideoCon2=styled_components_esm["default"].div.withConfig({displayName:"two-vid__VideoCon2",componentId:"sc-1smx2hz-3"})(["grid-column:9 / span 8;@media (max-width:666px){grid-column:0 / span 4;}"]);const VideoConInner=styled_components_esm["default"].div.withConfig({displayName:"two-vid__VideoConInner",componentId:"sc-1smx2hz-4"})(["width:100%;margin-bottom:5px;"]);const VideoConInner2=styled_components_esm["default"].div.withConfig({displayName:"two-vid__VideoConInner2",componentId:"sc-1smx2hz-5"})(["position:relative;padding-top:56.25%;.react-player{position:absolute;top:0;left:0;}"]);const DecimaPCon=styled_components_esm["default"].div.withConfig({displayName:"two-vid__DecimaPCon",componentId:"sc-1smx2hz-6"})(["p{font-family:\"DecimaMonoPro\",sans-serif;font-size:12px;letter-spacing:-2%;}"]);const DecimaP=styled_components_esm["default"].div.withConfig({displayName:"two-vid__DecimaP",componentId:"sc-1smx2hz-7"})(["font-family:\"DecimaMonoPro\",sans-serif;font-size:12px;letter-spacing:-2%;"]);const TwoVid=({data})=>{let isPageWide=(0,media_query/* useMediaQuery */.a)("(min-width: 667px)");var inner1background=null;var inner2background=null;if(data.video_url_1==null){inner1background=null;}else{inner1background=true;}if(data.video_url_2==null){inner2background=null;}else{inner2background=true;}// const player = new Plyr("#player");
if(isPageWide){return/*#__PURE__*/index_js_default().createElement(VideoConCon,null,/*#__PURE__*/index_js_default().createElement(Grid16,null,inner1background?/*#__PURE__*/index_js_default().createElement(VideoCon,null,/*#__PURE__*/index_js_default().createElement(VideoConInner,{style:inner1background?{backgroundColor:"black"}:{backgroundColor:"none"}},/*#__PURE__*/index_js_default().createElement(VideoConInner2,null,/*#__PURE__*/index_js_default().createElement(react_player_lib/* default */.Z,{className:"react-player",width:"100%",height:"100%"// height="56.25"
,controls:true,url:data.video_url_1.url}))),/*#__PURE__*/index_js_default().createElement(DecimaP,null,data.video_caption_1.text)):"",inner2background?/*#__PURE__*/index_js_default().createElement(VideoCon2,null,/*#__PURE__*/index_js_default().createElement(VideoConInner,{style:inner2background?{backgroundColor:"black"}:{backgroundColor:"none"}},/*#__PURE__*/index_js_default().createElement(VideoConInner2,null,/*#__PURE__*/index_js_default().createElement(react_player_lib/* default */.Z,{className:"react-player",width:"100%",height:"100%"// height="56.25"
,controls:true,url:data.video_url_2.url}))),/*#__PURE__*/index_js_default().createElement(DecimaP,null,data.video_caption_2.text)):""));}else{return/*#__PURE__*/index_js_default().createElement(VideoConCon,null,/*#__PURE__*/index_js_default().createElement(Grid16,null,inner1background?/*#__PURE__*/index_js_default().createElement(VideoCon,null,/*#__PURE__*/index_js_default().createElement(VideoConInner,{style:inner1background?{backgroundColor:"black"}:{backgroundColor:"none"}},/*#__PURE__*/index_js_default().createElement(VideoConInner2,null,/*#__PURE__*/index_js_default().createElement(react_player_lib/* default */.Z,{className:"react-player",width:"100%",height:"100%"// height="56.25"
,controls:true,url:data.video_url_1.url}))),/*#__PURE__*/index_js_default().createElement(DecimaP,null,data.video_caption_1.text)):"",inner2background?/*#__PURE__*/index_js_default().createElement(VideoCon,null,/*#__PURE__*/index_js_default().createElement(VideoConInner,{style:inner1background?{backgroundColor:"black"}:{backgroundColor:"none"}},/*#__PURE__*/index_js_default().createElement(VideoConInner2,null,/*#__PURE__*/index_js_default().createElement(react_player_lib/* default */.Z,{className:"react-player",width:"100%",height:"100%"// height="56.25"
,controls:true,url:data.video_url_2.url}))),/*#__PURE__*/index_js_default().createElement(DecimaP,null,data.video_caption_2.text)):""));}};
// EXTERNAL MODULE: ./src/components/tf/index_archive/project-info.js
var project_info = __webpack_require__(3155);
// EXTERNAL MODULE: ./src/components/tf/index_archive/statement.js
var statement = __webpack_require__(3012);
// EXTERNAL MODULE: ./src/components/tf/index_archive/intro.js
var intro = __webpack_require__(4458);
// EXTERNAL MODULE: ./src/components/tf/index_archive/sizzle-vid.js
var sizzle_vid = __webpack_require__(4031);
// EXTERNAL MODULE: ./src/components/tf/index_archive/contents.js
var contents = __webpack_require__(9509);
;// CONCATENATED MODULE: ./src/pages/index.js
// import Icon from "../../assets/WhiteLogo.svg";
const pages_Grid16=styled_components_esm["default"].div.withConfig({displayName:"pages__Grid16",componentId:"sc-mndyzf-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr;grid-column-gap:10px;@media (max-width:666px){grid-template-columns:1fr 1fr 1fr 1fr;grid-column-gap:5px;}"]);const ProjectsCon=styled_components_esm["default"].div.withConfig({displayName:"pages__ProjectsCon",componentId:"sc-mndyzf-1"})(["float:left;width:100%;"]);const PageContentCon=styled_components_esm["default"].div.withConfig({displayName:"pages__PageContentCon",componentId:"sc-mndyzf-2"})(["position:absolute;top:0;z-index:100;overflow:hidden;"]);const Index=({data})=>{let isPageWide=(0,media_query/* useMediaQuery */.a)("(min-width: 667px)");// console.log("Test");
// console.log(data.prismicHomepage.data.project_relationship_group);
// const contents2 = data.prismicHomepage.data.project_relationship_group
//   .filter(function(content) {
//     if (content.project_relationship_field.document.type == "statement") {
//       return null;
//     }
//     return content;
//   })
//   .map((content, index) => {
//     if (content.project_relationship_field.document.type == "project") {
//       const handleClickScroll = () => {
//         var element = document.getElementById(
//           `${content.project_relationship_field.document.uid}`
//         );
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       };
//       var i = 1;
//       var x = i++;
//       return (
//         <div onClick={handleClickScroll}>
//           <PageLinks>
//             {
//               content.project_relationship_field.document.data.index_number
//                 .text
//             }{" "}
//             {content.project_relationship_field.document.data.title.text}
//           </PageLinks>
//         </div>
//       );
//     }
//   });
const overview=data.prismicHomepage.data.project_relationship_group.map((content,index)=>{if(content.project_relationship_field.document.type=="project"){const project=content.project_relationship_field.document.data.body.map((content_four,index)=>{if(content_four.slice_type=="4ximg"){return/*#__PURE__*/index_js_default().createElement(four_img/* FourImg */.b,{data:content_four.primary});}else if(content_four.slice_type=="2ximg"){return/*#__PURE__*/index_js_default().createElement(two_img/* TwoImg */.c,{data:content_four.primary});}else if(content_four.slice_type=="video"){// console.log("VIDEO");
// console.log(content_four.primary.video_url_1);
// if (
//   content_four.primary.video_url_1 != null &&
//   content_four.primary.video_url_2 != null
// ) {
//   console.log(content_four.primary.video_url_1.url);
// }
return/*#__PURE__*/index_js_default().createElement(TwoVid,{data:content_four.primary});}});return/*#__PURE__*/index_js_default().createElement("div",{id:content.project_relationship_field.document.uid},/*#__PURE__*/index_js_default().createElement(project_info/* ProjectInfo */.v,{data:content.project_relationship_field.document}),project);}if(content.project_relationship_field.document.type=="statement"){return/*#__PURE__*/index_js_default().createElement(statement/* Statement */.P,{data:content.project_relationship_field.document.data});}});return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(PageContentCon,null,/*#__PURE__*/index_js_default().createElement(sizzle_vid/* SizzleVidComponent */.q,{data:data.prismicHomepage.data}),/*#__PURE__*/index_js_default().createElement(intro/* Intro */.p,{data:data.prismicHomepage.data}),/*#__PURE__*/index_js_default().createElement(nav/* Nav */.J,null),/*#__PURE__*/index_js_default().createElement(contents/* Contents */.A,{data:data.prismicHomepage.data.project_relationship_group}),/*#__PURE__*/index_js_default().createElement(ProjectsCon,null,overview)),/*#__PURE__*/index_js_default().createElement(animation_fixed_1/* AnimationFixed1 */.E,null));};/* harmony default export */ const pages = ((0,withPrismicPreview/* withPrismicPreview */.O)(Index));const query="316717394";

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map