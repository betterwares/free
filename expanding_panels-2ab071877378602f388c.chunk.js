(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 149:
/***/ (function(module, exports) {

module.exports = "/packs/images/general-1826f6183b91d023fde0cd3065bc088f.svg";

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkElements; });
var isElement=function isElement(d){return d instanceof Element;};var checkElements=function checkElements(){for(var _len=arguments.length,elms=new Array(_len),_key=0;_key<_len;_key++){elms[_key]=arguments[_key];}return elms.reduce(function(check,elm){if(!check)return check;return isElement(elm);},true);};

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(7);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(8);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(5);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(3);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(2);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(25);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(26);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(6);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(1);

// EXTERNAL MODULE: /Users/terry/sites/gll_better_consumer/node_modules/@djforth/viewport-detection-fp/index.js
var viewport_detection_fp = __webpack_require__(49);
var viewport_detection_fp_default = /*#__PURE__*/__webpack_require__.n(viewport_detection_fp);

// EXTERNAL MODULE: ./images/general.svg
var general = __webpack_require__(149);
var general_default = /*#__PURE__*/__webpack_require__.n(general);

// CONCATENATED MODULE: ./modules/expanding_panels/create_btn.js
var create_btn_expanderWrapper=function expanderWrapper(inner){var css=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';var btnCss=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';return"\n    <div class=\"expanding_panels__expander\">\n      <div class='expanding_panels__original ".concat(css,"'>").concat(inner,"</div>\n      <div class='expanding_panels__btn-wrapper ").concat(btnCss,"'>\n        <button class=\"expanding_panels__btn\" aria-pressed=\"false\" role=\"button\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5.09 7.75\" class=\"expanding_panels__icon\">\n            <title>Open</title>\n            <use xlink:href=\"").concat(general_default.a,"#move-down-new\"></use>\n          </svg>\n      </button>\n      </div>\n    </div>\n");};var unwrapButton=function unwrapButton(el){if(el instanceof Element){var original=el.querySelector('.expanding_panels__original');var btn=el.querySelector('.expanding_panels__expander');// Remove button
if(btn instanceof Element){el.removeChild(btn);}// Replace original
if(original instanceof Element){var unwrappedButton=original.innerHTML;el.insertAdjacentHTML('beforeend',unwrappedButton);}}};/* harmony default export */ var create_btn = (function(_ref){var el=_ref.el,expanders=_ref.expanders;var contents=expanders.reduce(function(conts,expander){return conts+expander.outerHTML;},'');var expanderBtn=create_btn_expanderWrapper(contents,el.dataset.expanderClass,el.dataset.buttonClass);expanders.forEach(function(expander){el.removeChild(expander);});el.insertAdjacentHTML('afterbegin',expanderBtn);var btn=el.querySelector('.expanding_panels__btn');return btn instanceof Element?btn:null;});
// CONCATENATED MODULE: ./modules/expanding_panels/create_content.js
var contentWrapper=function contentWrapper(inner){var css=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';return"\n  <div class='expanding_panels__content ".concat(css,"' aria-hidden=\"true\">").concat(inner,"</div>\n");};var unwrapContent=function unwrapContent(el){var content=el.querySelector('.expanding_panels__content');if(content instanceof Element){var unwrappedContent=content.innerHTML;el.removeChild(content);el.insertAdjacentHTML('beforeend',unwrappedContent);}};/* harmony default export */ var create_content = (function(_ref){var el=_ref.el,contents=_ref.contents;var innerContents=contents.reduce(function(conts,content){return conts+content.outerHTML;},'');// if (content instanceof Element && content.firstElementChild instanceof Element) {
//   content.firstElementChild.classList.add('expanding_panels__first-item');
// }
var expanderContent=contentWrapper(innerContents,el.dataset.expandedClass);contents.forEach(function(content){el.removeChild(content);});el.insertAdjacentHTML('beforeend',expanderContent);var elm=el.querySelector('.expanding_panels__content');return elm;});
// EXTERNAL MODULE: ./modules/helpers/check_elements.js
var check_elements = __webpack_require__(30);

// CONCATENATED MODULE: ./modules/expanding_panels/expanding_panels.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkElement", function() { return checkElement; });
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var Animation=function Animation(content,height){return function(){if(content.style.height==='0px'){content.style.height="".concat(height+10,"px");content.setAttribute('aria-hidden','false');}else{content.style.height='0px';content.setAttribute('aria-hidden','true');}};};var checkForm=function checkForm(el){var form=el.closest('form');if(!form)return;form.addEventListener('keypress',function(e){if(e.key==='Enter'){el.disabled=true;form.submit();}});};var checkElement=function checkElement(el){return el instanceof Element;};var clickHandler=function clickHandler(btn,animator){return function(e){e.preventDefault();var pressed=btn.getAttribute('aria-pressed')==='false';btn.setAttribute('aria-pressed',pressed.toString());animator();};};var expanding_panels_setUpExpander=function setUpExpander(el){if(!checkElement(el))return;var expanders=_toConsumableArray(el.querySelectorAll('[data-expander]'));var contents=_toConsumableArray(el.querySelectorAll('[data-expanding-content]'));if(check_elements["a" /* checkElements */].apply(void 0,_toConsumableArray(contents))&&check_elements["a" /* checkElements */].apply(void 0,_toConsumableArray(expanders))){var expandedBtn=create_btn({el:el,expanders:expanders});var expandedContent=create_content({el:el,contents:contents});var sizes=expandedContent.getBoundingClientRect();// debugger;
if(!expandedContent)return;var animator=Animation(expandedContent,sizes.height+10);expandedContent.style.height=0;el.dataset.expandingSet='true';if(!expandedBtn)return;checkForm(expandedBtn);expandedBtn.addEventListener('click',clickHandler(expandedBtn,animator));}};var tracker=function tracker(elms){var device='';var original=elms.map(function(el){return el.cloneNode(true);});return function(d){if(d!==device){elms.forEach(function(el,i){var json=JSON.parse(el.dataset.expandingPanel);var devices=Array.isArray(json)?json:['mobile'];var set=el.dataset.expandingSet||'false';if(devices.includes(d)&&set==='false'){expanding_panels_setUpExpander(el);el.dataset.expandingSet='true';}else if(!devices.includes(d)&&set==='true'){el.innerHTML=original[i].innerHTML;el.dataset.expandingSet='false';}});}device=d;};};/* harmony default export */ var expanding_panels = __webpack_exports__["default"] = (function(){var elms=_toConsumableArray(document.querySelectorAll('[data-expanding-panel]'));if(elms.length<=0)return;var vpDetect=viewport_detection_fp_default()();var callback=tracker(elms);callback(vpDetect.getDevice());vpDetect.addCallback(callback);vpDetect.track();});

/***/ })

}]);
//# sourceMappingURL=expanding_panels-2ab071877378602f388c.chunk.js.map