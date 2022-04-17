(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/Components/FileInput.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Components/FileInput.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function FileInput(_ref) {
  var onLoaded = _ref.onLoaded,
      name = _ref.name,
      handleExtensionNotMatch = _ref.onExtensionNotMatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      container = _useState4[0],
      setContainer = _useState4[1];

  function onFileChange(e) {
    var _e$target$files = _slicedToArray(e.target.files, 1),
        f = _e$target$files[0];

    if (f && ["application/pdf", "image/jpg", "image/bitmap", "image/jpeg", "image/png"].includes(f.type)) {
      if (f) setFile(f);
      var reader = new FileReader();

      reader.onload = function () {
        if (onLoaded && typeof onLoaded === "function") {
          onLoaded(f, this.result);
        }
      };

      reader.readAsDataURL(f);
    } else {
      handleExtensionNotMatch();
    }
  }

  function onBlur(e) {
    e.currentTarget.style.borderColor = "#ffa50080";

    if (file) {
      window.$(e.currentTarget).find("b").css({
        color: "#000"
      });
    }
  }

  function onFocus(e) {
    if (!file) {
      e.currentTarget.style.borderColor = "#ffa50070";
    } else {
      window.$(e.currentTarget).find("b").css({
        color: "#ffa500f0"
      });
    }
  }

  function onClick(e) {
    var input = container.querySelector("input");
    input.click();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: function ref(_ref2) {
      return setContainer(_ref2);
    },
    className: "row flex-column align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column col-12 p-2 p-xl-3 align-items-center justify-content-center shadow-sm rounded-pill",
    style: {
      cursor: "pointer",
      border: "2px solid #ffa50080"
    },
    onClick: onClick,
    onMouseOver: onFocus,
    onMouseOut: onBlur
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    name: name,
    onChange: onFileChange,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    style: {
      cursor: "pointer",
      userSelect: "none",
      color: !file ? "lightgrey" : "black",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "100%"
    },
    className: "d-none d-xl-flex font-size-18 align-items-center justify-content-center m-0"
  }, file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, "Courrier charg\xE9:"))), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "font-size-22"
  }, file.name)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "align-self-center"
  }, "PDF, PNG, JPG, JPEG, BITMAP")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    style: {
      cursor: "pointer",
      userSelect: "none",
      color: !file ? "lightgrey" : "black",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "100%"
    },
    className: "d-flex d-xl-none align-items-center justify-content-center m-0"
  }, file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "d-none d-md-inline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, "Courrier charg\xE9:"))), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "font-size-20"
  }, file.name)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "align-self-center"
  }, "PDF, PNG, JPG, JPEG, BITMAP"))), !file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "form-text d-inline d-md-none text-center pr-2 pl-2 text-muted"
  }, "Cliquez dans la zone de texte pour commencer."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "form-text d-none d-md-inline text-center pr-2 pl-2 text-muted"
  }, "Cliquez dans la zone de texte et chargez le courrier \xE0 enregistrer depuis un espace de stockage.")));
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

/***/ "./resources/js/components/Helpers/Layout.js":
/*!***************************************************!*\
  !*** ./resources/js/components/Helpers/Layout.js ***!
  \***************************************************/
/*! exports provided: isMobile, isMobileLandscape, fromLandscapedMobile, isTablet, fromTablet, isDesktop, fromDesktop, isLarge, fromLarge, isExtraLarge, fromExtraLarge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileLandscape", function() { return isMobileLandscape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromLandscapedMobile", function() { return fromLandscapedMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTablet", function() { return isTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTablet", function() { return fromTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return isDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDesktop", function() { return fromDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLarge", function() { return isLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromLarge", function() { return fromLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExtraLarge", function() { return isExtraLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromExtraLarge", function() { return fromExtraLarge; });
function isMobile() {
  var width = window.$(window).width();
  return width <= 575.98;
}
function isMobileLandscape() {
  var width = window.$(window).width();
  return width >= 576 && width <= 767.98;
}
function fromLandscapedMobile() {
  var width = window.$(window).width();
  return width >= 576;
}
function isTablet() {
  var width = window.$(window).width();
  return width >= 768 && width <= 991.98;
}
function fromTablet() {
  var width = window.$(window).width();
  return width >= 768;
}
function isDesktop() {
  var width = window.$(window).width();
  return width >= 992 && width <= 1199.98;
}
function fromDesktop() {
  var width = window.$(window).width();
  return width >= 992;
}
function isLarge() {
  var width = window.$(window).width();
  return width >= 1200 && width <= 1439.98;
}
function fromLarge() {
  var width = window.$(window).width();
  return width >= 1200;
}
function isExtraLarge() {
  var width = window.$(window).width();
  return width >= 1440;
}
function fromExtraLarge() {
  var width = window.$(window).width();
  return width >= 1440;
}

/***/ }),

/***/ "./resources/js/components/Pages/Enregistrement.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Pages/Enregistrement.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enregistrement; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_FileInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/FileInput */ "./resources/js/components/Components/FileInput.js");
/* harmony import */ var _Components_PDF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/PDF */ "./resources/js/components/Components/PDF.js");
/* harmony import */ var _Helpers_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Helpers/Layout */ "./resources/js/components/Helpers/Layout.js");
/* harmony import */ var _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Helpers/Const */ "./resources/js/components/Helpers/Const.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _Services_Courrier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/Courrier */ "./resources/js/components/Services/Courrier.js");
/* harmony import */ var _Context_Session__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Context/Session */ "./resources/js/components/Context/Session.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Enregistrement() {
  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(_Services_Courrier__WEBPACK_IMPORTED_MODULE_8__["default"].RegisterIncoming),
      registerIncoming = _useMutation.mutateAsync,
      isLoading = _useMutation.isLoading,
      isSuccess = _useMutation.isSuccess;

  var _useSession = Object(_Context_Session__WEBPACK_IMPORTED_MODULE_9__["useSession"])(),
      user = _useSession.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      preview = _useState2[0],
      setPreview = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      register = _useState4[0],
      setRegister = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      file = _useState6[0],
      setFile = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      dataURL = _useState8[0],
      setDataURL = _useState8[1];

  var $ = window.$;
  var swal = window.swal;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  function onFileLoaded(f, data) {
    setFile(f);
    setDataURL(data);
  }

  function onFileExtensionNotMatch() {
    window.toastr["error"]("Ce type de fichier n'est pas valide !", "Fichier non gérée");
  }

  function showPreview() {
    if (file) setPreview(true);
  }

  function showRegisterForm() {
    if (preview) {
      setRegister(true);
    }
  }

  var handleSubmit = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var formData, _yield$registerIncomi, message, courrier;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              formData = new FormData(e.target);
              _context.next = 5;
              return registerIncoming({
                data: formData
              });

            case 5:
              _yield$registerIncomi = _context.sent;
              message = _yield$registerIncomi.message;
              courrier = _yield$registerIncomi.courrier;
              swal("Enregistrement terminé", message, "success").then(function () {
                swal.close();
                history.push("/courriers/".concat(courrier));
              });
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [registerIncoming]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $(window).scrollTop(0);

    if (preview && !register) {
      setTimeout(function () {
        $(".button-continue").css("top", "40px");
      }, 800);
    } else if (register) {
      $(".select2-courrier").select2({
        placeholder: "Sélectionnez un type de courrier"
      });
      $(".select2-contenu").select2({
        placeholder: "Sélectionnez un type de contenu"
      });
      $(".select2-mention").select2({
        placeholder: "Sélectionnez une mention"
      });
    }
  }, [preview, register]); // useEffect(() => {
  //     $(".header.d-print-none").css("z-index", "99999");
  //     return () => $(".header.d-print-none").css("z-index", "");
  // }, []);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: !preview && !register ? "" : "none"
    },
    className: "mt-3 mt-lg-4 mt-xl-5 col-8 offset-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "text-center text-warning text-uppercase mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/assets/images/logo_transparent.png",
    width: "200px",
    alt: "logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_FileInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onLoaded: onFileLoaded,
    name: "courrier",
    onExtensionNotMatch: onFileExtensionNotMatch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row m-t-25 m-b-25 justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: showPreview,
    className: "btn col-4 btn-warning btn-uppercase p-3 justify-content-center btn-rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-plus mr-2"
  }), "Enregistrer le courrier"))), preview && !register ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container-fluid row position-relative align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button-continue shadow d-flex justify-content-end align-items-start",
    style: {
      padding: "20px",
      transition: "all .5s",
      background: "#fff",
      border: "2px solid orange",
      zIndex: 999999,
      position: "fixed",
      top: "-1090px",
      width: "calc(100% - ".concat(Object(_Helpers_Layout__WEBPACK_IMPORTED_MODULE_5__["fromLarge"])() ? 170 : 60, "px)")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "".concat(Object(_Helpers_Layout__WEBPACK_IMPORTED_MODULE_5__["fromDesktop"])() ? "font-size-20" : "font-size-18")
  }, "Ceci est un apper\xE7u de votre courrier. Vous pouvez naviguer avec les boutons situ\xE9s en dessous du conteneur ou cliquer sur le bouton suivant pour continuer l'enregistrement."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: showRegisterForm,
    className: "col-5 m-l-40 p-15 m-r-40 col-md-3 col-xl-2 btn btn-outline-primary btn-block"
  }, "CONTINUER")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-10 pl-2"
  }, file.type !== "application/pdf" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: dataURL,
    width: "100%",
    height: "auto",
    style: {
      display: "inline-block"
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_PDF__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: dataURL
    /* || '/documents/cahier_de_charges.pdf' */
    ,
    pagination: true
  }))) : !register ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row col-12 ".concat(Object(_Helpers_Layout__WEBPACK_IMPORTED_MODULE_5__["fromExtraLarge"])() ? Object(_Helpers_Layout__WEBPACK_IMPORTED_MODULE_5__["isExtraLarge"])() ? "col-lg-5" : "col-lg-4" : "col-md-7", " m-auto text-align-center mb-1 card")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-header ".concat(Object(_Helpers_Layout__WEBPACK_IMPORTED_MODULE_5__["fromDesktop"])() ? "p-40 font-size-25" : "font-size-18", " d-flex flex-column text-center text-uppercase")
  }, "Enregistrement du courrier", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    className: "font-size-20"
  }, "N\xB0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-info"
  }, "09230/2020"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-body ".concat(Object(_Helpers_Layout__WEBPACK_IMPORTED_MODULE_5__["fromDesktop"])() ? "p-40" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Type de contenu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    required: true,
    name: "type_contenu",
    defaultValue: "",
    className: "select2-contenu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "",
    disabled: true
  }, "S\xE9lectionnez un type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "LETTRE_ORDINAIRE"
  }, "Lettre ordinaire"), user.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["REGISTER_CONFIDENTIALS"].includes(privilege);
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "LETTRE_DU_PRESIDENT"
  }, "Lettre du Pr\xE9sident"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "ARRETE"
  }, "Arr\xEAt\xE9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "BORDEREAU_DENVOI"
  }, "Bord\xE9reau d'envoi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "DECISION"
  }, "D\xE9cision"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Type de courrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    required: true,
    name: "type_courrier",
    defaultValue: "",
    className: "select2-courrier"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "",
    disabled: true
  }, "S\xE9lectionnez un type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "ENTRANT"
  }, "Entrant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    disabled: true,
    value: "SORTANT"
  }, "Sortant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    disabled: true,
    value: "INTERNE"
  }, "Interne")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Objet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    required: true,
    name: "objet",
    className: "form-control",
    placeholder: "Objet du courrier"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-12 col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Origine"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    required: true,
    name: "origine",
    className: "form-control",
    placeholder: "Prov\xE9nance du courrier"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group col-12 col-md-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Mention du courrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    required: true,
    name: "mention",
    className: "select2-mention",
    multiple: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "STANDARD"
  }, "Standard"), user.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["REGISTER_CONFIDENTIALS"].includes(privilege);
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "CONFIDENTIEL"
  }, "Confidentiel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "URGENT"
  }, "Urgent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "TRES_URGENT"
  }, "Tr\xE8s urgent")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex align-items-start m-t-20 ".concat(!Object(_Helpers_Layout__WEBPACK_IMPORTED_MODULE_5__["fromTablet"])() ? "flex-column" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Vous \xEAtes garant de l'exactitude des informations que vous renseignez; elles doivent figurer sur le courrier physique."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "btn ".concat(Object(_Helpers_Layout__WEBPACK_IMPORTED_MODULE_5__["fromTablet"])() ? "col-4" : "col-12", " btn-outline-primary btn-lg btn-block"),
    disabled: isLoading || isSuccess
  }, isLoading || isSuccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm mr-2",
    role: "status",
    "aria-hidden": "true"
  }), "Enregisrement...") : "Enregister"))))));
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