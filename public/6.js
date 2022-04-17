(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Styles/Courrier.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Styles/Courrier.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".conteneur {\n\tcursor: pointer;\n\tposition: relative;\n\tmax-width: 100%;\n\tmargin: 15px 0;\n\theight: 200px;\n\tbackground: #fff;\n\tborder-radius: 3px;\n\t/* box-shadow: 0px 0px 4px orange; */\n\toverflow: hidden;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t    -ms-user-select: none;\n\t        user-select: none;\n}\n\n.conteneur:active {\n\topacity: .7;\n}\n\n.conteneur>.box_content>.courrier {\n\theight: 100%;\n\tbox-sizing: border-box;\n\tpadding: 5px;\n\tz-index: 0;\n\tcolor: black;\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n\n.conteneur>.box_content>.cover {\n\tbackground: rgba(255, 255, 255, 0.993);\n\tposition: absolute;\n\tbox-sizing: border-box;\n\ttop: 0;\n\tright: 0px;\n\theight: 100%;\n\tborder-radius: 3px;\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n\tz-index: 100;\n\tpadding: 10px;\n\toverflow: auto;\n}\n\n.conteneur>.box_content>.rempl {\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tbackground: #fff;\n\tborder-bottom-left-radius: 3px;\n}\n\n.conteneur>.box_content>.shadow>.flip-over {\n\tposition: absolute;\n\tbox-sizing: border-box;\n\ttransform: rotate(-45deg);\n\tborder: 140.75px solid transparent;\n\tborder-top-color: #acdda0;\n}\n\n.conteneur>.box_content>.shadow {\n\tposition: absolute;\n\tbox-shadow: 0px 0px 3px #000;\n\tborder-top-left-radius: 3px;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 110;\n}\n\n/* Animations du loader */\n\n.box {\n\t/* position: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\twidth: 300px;\n\theight: 300px;\n\tbackground: #111845a6; */\n\tbox-sizing: border-box;\n\t/* overflow: hidden; */\n\tbox-shadow: 0px 0px 5px rgba(255, 165, 0, 0.6);\n\tborder: 2px solid #fff;\n\t/* color: white; */\n\t/* padding: 20px; */\n}\n\n.box:hover {\n\tbox-shadow: 0px 0px 2px rgb(255, 165, 0);\n}\n\n.box:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 0;\n\tleft: -100%;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: rgba(0, 0, 0, 0.02);\n\t/* background: rgba(255, 255, 255, 0.1); */\n\ttransition: 0.25s;\n\tpointer-events: none;\n}\n\n.box:hover:before {\n\tleft: -50%;\n\ttransform: skewX(-5deg);\n}\n\n.box>.box_content {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\twidth: 100%;\n\tbottom: -1px;\n\t/* border: 1px solid rgb(255, 165, 0); */\n\t/* padding: 20px; */\n\ttext-align: center;\n\t/* box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5); */\n}\n\n.box>span {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: block;\n\tbox-sizing: border-box;\n}\n\n.box>span:nth-child(1) {\n\ttransform: rotate(0deg);\n}\n\n/* \n.box>span:nth-child(2) {\n\tright: 0;\n\ttransform: rotate(90deg);\n}\n\n.box>span:nth-child(3) {\n\ttransform: rotate(180deg);\n}\n\n.box>span:nth-child(4) {\n\ttransform: rotate(270deg);\n} */\n\n.box>span:before {\n\tleft: 0;\n\tcontent: \"\";\n\tposition: absolute;\n\twidth: 100%;\n\theight: 2px;\n\t/* background: #3de7e1; */\n\tborder-bottom: 2px solid rgba(228, 125, 23, 0.623);\n\t-webkit-animation: animate 2s linear infinite;\n\t        animation: animate 2s linear infinite;\n}\n\n@-webkit-keyframes animate {\n\t0% {\n\t\ttransform: scaleX(1);\n\t\ttransform-origin: left;\n\t\tborder-color: #3de7e1;\n\t}\n\t15% {\n\t\ttransform-origin: left;\n\t\ttransform: scaleX(0.75);\n\t\tborder-color: rgba(228, 125, 23, 0.623);\n\t}\n\t40% {\n\t\ttransform: scaleX(0.5);\n\t\ttransform-origin: center;\n\t\tborder-color: #3de7e1;\n\t}\n\t50% {\n\t\ttransform: scaleX(0.25);\n\t\ttransform-origin: center;\n\t}\n\t60% {\n\t\ttransform: scaleX(0.5);\n\t\ttransform-origin: center;\n\t\tborder-color: rgba(228, 125, 23, 0.623);\n\t}\n\t85% {\n\t\ttransform: scaleX(0.75);\n\t\tborder-color: #3de7e1;\n\t\ttransform-origin: right;\n\t}\n\t100% {\n\t\ttransform: scaleX(1);\n\t\ttransform-origin: right;\n\t}\n}\n\n@keyframes animate {\n\t0% {\n\t\ttransform: scaleX(1);\n\t\ttransform-origin: left;\n\t\tborder-color: #3de7e1;\n\t}\n\t15% {\n\t\ttransform-origin: left;\n\t\ttransform: scaleX(0.75);\n\t\tborder-color: rgba(228, 125, 23, 0.623);\n\t}\n\t40% {\n\t\ttransform: scaleX(0.5);\n\t\ttransform-origin: center;\n\t\tborder-color: #3de7e1;\n\t}\n\t50% {\n\t\ttransform: scaleX(0.25);\n\t\ttransform-origin: center;\n\t}\n\t60% {\n\t\ttransform: scaleX(0.5);\n\t\ttransform-origin: center;\n\t\tborder-color: rgba(228, 125, 23, 0.623);\n\t}\n\t85% {\n\t\ttransform: scaleX(0.75);\n\t\tborder-color: #3de7e1;\n\t\ttransform-origin: right;\n\t}\n\t100% {\n\t\ttransform: scaleX(1);\n\t\ttransform-origin: right;\n\t}\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Components/Courrier.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Components/Courrier.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Courrier; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Styles_Courrier_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styles/Courrier.css */ "./resources/js/components/Styles/Courrier.css");
/* harmony import */ var _Styles_Courrier_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_Courrier_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PDF__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PDF */ "./resources/js/components/Components/PDF.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Courrier(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? 1 : _ref$id,
      reference = _ref.reference,
      mention = _ref.mention,
      etat = _ref.etat,
      type_contenu = _ref.type_contenu,
      type_courrier = _ref.type_courrier,
      url_fichier = _ref.url_fichier,
      objet = _ref.objet,
      origine = _ref.origine;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      conteneur = _useState2[0],
      setConteneur = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isFetching = _useState6[0],
      setFetching = _useState6[1];

  function getWidth(element) {
    var width = element.offsetWidth;
    return width || 0;
  }

  function getHeight(element) {
    var height = element.offsetHeight;
    return height || 0;
  }

  function getCote(hypo) {
    return Math.sqrt(Math.pow(hypo, 2) / 2);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (url_fichier.substr(-4).toString() !== ".pdf") {
      setFetching(false);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (conteneur && !isFetching) {
      var init = function init() {
        var hypo = getWidth(flipOver);
        var contWidth = getWidth(conteneur);
        var contHeight = getHeight(conteneur);
        var cote = getCote(hypo);
        flipOver.style.top = "".concat(cote - hypo / 2, "px");
        flipOver.style.left = "".concat(cote - (hypo / 2 + 0.5), "px");
        rempl.style.height = "".concat(contHeight - cote, "px");
        rempl.style.width = "".concat(cote, "px");
        shadow.style.width = "".concat(cote, "px");
        shadow.style.height = "".concat(cote, "px");
        cover.style.width = "".concat(contWidth - cote + 1, "px");
      };

      var flipOver = conteneur.querySelector(".flip-over");
      var rempl = conteneur.querySelector(".rempl");
      var shadow = conteneur.querySelector(".shadow");
      var cover = conteneur.querySelector(".cover");
      setTimeout(function () {
        init();
      }, 200);
      window.addEventListener("resize", init);
      return function () {
        window.removeEventListener("resize", init);
      };
    }
  }, [conteneur, isFetching]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      if (!isFetching) setLoading(false);
    }, 500);
  }, [isFetching]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: isLoading ? "" : "/courriers/".concat(id),
    className: "conteneur position-relative box" + ' ' + etat.toLowerCase(),
    style: {
      width: "100%"
    },
    id: "courrier_".concat(id),
    ref: function ref(_ref2) {
      return setConteneur(_ref2);
    }
  }, isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      transition: "opacity 0.3s",
      opacity: isLoading ? 0 : 1,
      width: "100%",
      height: "100%"
    },
    className: "box_content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courrier"
  }, url_fichier.substr(-4).toString() === ".pdf" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PDF__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onLoaded: function onLoaded() {
      return setFetching(false);
    },
    url: url_fichier.replace(/^public/, "/storage")
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: url_fichier.replace(/^public/, "/storage"),
    width: "100%"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column align-items-end",
    style: {
      position: "absolute",
      bottom: "10px",
      right: "10px",
      zIndex: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: "16px",
      textDecoration: "underline"
    }
  }, "N\xB0 d'ordre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: "26px"
    }
  }, reference < 10 ? "00000".concat(reference) : reference < 100 ? "0000".concat(reference) : reference < 1000 ? "000".concat(reference) : reference < 10000 ? "00".concat(reference) : reference < 100000 ? "0".concat(reference) : reference)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flip-over"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rempl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cover d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", {
    className: "blockquote mb-0 p-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-absolute",
    style: {
      right: "10px",
      top: "-0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badge badge-success"
  }, type_contenu), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badge badge-warning"
  }, type_courrier), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badge badge-light"
  }, mention)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "text-uppercase text-left",
    title: "Objet du courrier"
  }, objet), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "blockquote-footer text-uppercase"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite", {
    title: "Prov\xE9nance du courrier"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, origine)))))));
}

/***/ }),

/***/ "./resources/js/components/Components/PDF.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Components/PDF.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PDF; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pdf */ "./node_modules/react-pdf/dist/esm/entry.js");
/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Loader */ "./resources/js/components/Components/Loader.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




react_pdf__WEBPACK_IMPORTED_MODULE_1__["pdfjs"].GlobalWorkerOptions.workerSrc = "/js/pdf.worker.js";
function PDF(_ref) {
  var url = _ref.url,
      _ref$pagination = _ref.pagination,
      pagination = _ref$pagination === void 0 ? false : _ref$pagination,
      _ref$onLoaded = _ref.onLoaded,
      handleLoaded = _ref$onLoaded === void 0 ? function () {} : _ref$onLoaded;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      numPages = _useState2[0],
      setNumPages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      allowPagination = _useState4[0],
      setPagination = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState6 = _slicedToArray(_useState5, 2),
      pageNumber = _useState6[0],
      setPageNumber = _useState6[1];

  console.log(url);

  function onDocumentLoadSuccess(_ref2) {
    var numPages = _ref2.numPages;
    setNumPages(numPages);
    setPagination(true);
    handleLoaded(); // setTimeout(() => {
    // }, 5000);
  }

  function suivant() {
    window.$(window).scrollTop(0);
    setPageNumber(pageNumber + 1);
  }

  function precedent() {
    setPageNumber(pageNumber - 1);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border m-b-30",
    style: {
      minHeight: "500px",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pdf__WEBPACK_IMPORTED_MODULE_1__["Document"], {
    renderMode: "svg",
    file: url,
    loading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
      normal: "50px"
    }),
    onLoadSuccess: onDocumentLoadSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pdf__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    pageNumber: pageNumber
  }))), pagination && allowPagination && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Page ", pageNumber, " sur ", numPages), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pageNumber !== 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-outline-primary btn-lg mr-2",
    onClick: precedent
  }, "Page pr\xE9c\xE9dente"), pageNumber !== numPages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-primary btn-lg",
    onClick: suivant
  }, "Page suivante"))));
}

/***/ }),

/***/ "./resources/js/components/Pages/Courriers.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Pages/Courriers.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Courriers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _Components_Courrier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Courrier */ "./resources/js/components/Components/Courrier.js");
/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Loader */ "./resources/js/components/Components/Loader.js");
/* harmony import */ var _Helpers_Const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Helpers/Const */ "./resources/js/components/Helpers/Const.js");
/* harmony import */ var _Services_Courrier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/Courrier */ "./resources/js/components/Services/Courrier.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Courriers() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      courriers = _React$useState2[0],
      setCourriers = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      isEmpty = _React$useState4[0],
      setEmpty = _React$useState4[1];

  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_Services_Courrier__WEBPACK_IMPORTED_MODULE_6__["default"].ExternalReceived),
      getExternalReceived = _useMutation.mutateAsync,
      isLoading = _useMutation.isLoading;

  var sortCourriers = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (_courriers) {
    var courTemp = _courriers.reduce(function ($c, courrier) {
      var date = new Date(courrier.updated_at);
      var d = date.toISOString();

      if (!$c[d] || !Array.isArray($c[d])) {
        $c[d] = [_objectSpread({
          heures: date.getHours(),
          minutes: date.getMinutes()
        }, courrier)];
      } else {
        $c[d].push(_objectSpread({
          heures: date.getHours(),
          minutes: date.getMinutes()
        }, courrier));
      }

      $c[d].sort(function (c1, c2) {
        return c1.updated_at < c2.updated_at ? 1 : c1.updated_at == c2.updated_at ? 0 : -1;
      });
      return $c;
    }, {});

    console.log(courTemp);
    var courDate = Object.keys(courTemp).sort().reverse();
    return courDate.reduce(function ($c, $d) {
      var date = new Date($d);
      var d = "".concat(date.getDate(), " ").concat(_Helpers_Const__WEBPACK_IMPORTED_MODULE_5__["MOIS"][date.getMonth()], " ").concat(date.getFullYear());

      if (!$c[d] || !Array.isArray($c[d])) {
        $c[d] = _toConsumableArray(courTemp[$d]);
      } else {
        var _$c$d;

        (_$c$d = $c[d]).push.apply(_$c$d, _toConsumableArray(courTemp[$d]));
      }

      return $c;
    }, {});
  }, []);
  var getCourriers = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var $courriers, tresUrgents, urgents, standards;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = Object;
            _context.next = 4;
            return getExternalReceived();

          case 4:
            _context.t1 = _context.sent;
            $courriers = _context.t0.values.call(_context.t0, _context.t1);
            setEmpty($courriers.length === 0);
            tresUrgents = $courriers.filter(function (courrier) {
              return courrier.mention === _Helpers_Const__WEBPACK_IMPORTED_MODULE_5__["TRES_URGENT"];
            });
            urgents = $courriers.filter(function (courrier) {
              return courrier.mention === _Helpers_Const__WEBPACK_IMPORTED_MODULE_5__["URGENT"];
            });
            standards = $courriers.filter(function (courrier) {
              return courrier.mention === _Helpers_Const__WEBPACK_IMPORTED_MODULE_5__["STANDARD"];
            });
            sortCourriers(tresUrgents);
            setCourriers([sortCourriers(tresUrgents), sortCourriers(urgents), sortCourriers(standards)]);
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t2 = _context["catch"](0);
            console.log(_context.t2);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  })), [sortCourriers, setCourriers, getExternalReceived]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    getCourriers();
  }, []);
  return isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    normal: "40px"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "timeline-container d-flex flex-column align-items-center h-100p ml-3 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "text-uppercase mb-5"
  }, "Liste des courriers"), isEmpty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "alert alert-warning mt-5",
    role: "alert"
  }, "Vous n'avez pas de nouveaux courriers."), Object.values(courriers).map(function ($courriers, mentionIndex) {
    return Object.keys($courriers).map(function (jour, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, i === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row d-flex align-items-center col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "border ".concat(mentionIndex === 0 ? "border-danger" : mentionIndex === 1 ? "border-warning" : "border-info")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-auto border rounded ".concat(mentionIndex === 0 ? "border-danger text-danger" : mentionIndex === 1 ? "border-warning text-warning" : "border-info text-info")
      }, mentionIndex === 0 ? "Courriers  très urgents" : mentionIndex === 1 ? "Courriers urgents" : "Courriers standards"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
        className: "border ".concat(mentionIndex === 0 ? "border-danger" : mentionIndex === 1 ? "border-warning" : "border-info")
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: i + 1,
        className: "timeline-data d-flex flex-column pt-4 position-relative",
        style: {
          width: "100%",
          maxWidth: "950px"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginLeft: "-30px",
          fontWeight: "bold"
        },
        className: "shadow timeline-date p-2 align-self-start rounded-circle border-warning"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, jour)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "timeline-contents border-left p-4 p-l-0 m-l-4 m-r-4"
      }, $courriers[jour] && $courriers[jour].map(function (courrier, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: index + 1,
          className: "timeline-content d-flex align-items-start position-relative"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "content-hr border-bottom border-warning",
          style: {
            width: "150px",
            marginTop: "-1px",
            paddingLeft: "30px"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
          style: {
            fontSize: "2.5em",
            fontFamily: "monospace",
            fontWeight: "bold",
            position: "relative"
          }
        }, courrier.heures < 10 ? "0".concat(courrier.heures) : courrier.heures, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          className: "d-inline-block position-absolute",
          style: {
            top: "5px",
            fontWeight: "normal",
            fontSize: "0.4em"
          }
        }, courrier.minutes < 10 ? "0".concat(courrier.minutes) : courrier.minutes))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Courrier__WEBPACK_IMPORTED_MODULE_3__["default"], courrier));
      }))));
    });
  })));
}

/***/ }),

/***/ "./resources/js/components/Services/Courrier.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Services/Courrier.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Libs/useAxios */ "./resources/js/components/Libs/useAxios.js");

var CourrierService = {
  ExternalReceived: function ExternalReceived() {
    return Object(_Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__["default"])("/consultExternalReceived", {
      method: "GET"
    });
  },
  RegisterIncoming: function RegisterIncoming(_ref) {
    var data = _ref.data;
    return Object(_Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__["default"])("/registerIncoming", {
      data: data,
      isMultipart: true
    });
  },
  ConsultExternalOne: function ConsultExternalOne(_ref2) {
    var signal = _ref2.signal,
        params = _ref2.params,
        data = _ref2.data;
    return Object(_Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__["default"])("/consultExternalOne", {
      data: data,
      params: params,
      signal: signal
    });
  },
  TransferTo: function TransferTo(_ref3) {
    var data = _ref3.data;
    return Object(_Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__["default"])("/transfertTo", {
      data: data
    });
  },
  ValidateOrReject: function ValidateOrReject(_ref4) {
    var data = _ref4.data;
    return Object(_Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__["default"])("/validateOrReject", {
      data: data
    });
  },
  ImputeTo: function ImputeTo(_ref5) {
    var data = _ref5.data;
    return Object(_Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__["default"])("/imputeTo", {
      data: data
    });
  },
  TerminateIncoming: function TerminateIncoming(_ref6) {
    var data = _ref6.data;
    return Object(_Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__["default"])("/terminateIncoming", {
      data: data
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CourrierService);

/***/ }),

/***/ "./resources/js/components/Styles/Courrier.css":
/*!*****************************************************!*\
  !*** ./resources/js/components/Styles/Courrier.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./Courrier.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Styles/Courrier.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);