(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Styles/SweetDefault.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Styles/SweetDefault.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".swal2-textarea {\n\tborder-color: #fa7d00 !important;\n\t/* box-shadow: inset 0 1px 1px rgba(255, 166, 0, 0.16) !important; */\n}\n\n.swal2-confirm.swal2-styled {\n\tbackground-color: #fa7d00;\n}\n\n.swal2-cancel.swal2-styled {\n\tbackground-color: #fff;\n\tcolor: #fa7d00;\n\tborder: 1px solid #fa7d00;\n}", ""]);

// exports


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

/***/ "./resources/js/components/Pages/CourrierDetail.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Pages/CourrierDetail.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CourrierDetail; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Loader */ "./resources/js/components/Components/Loader.js");
/* harmony import */ var _Components_PDF__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/PDF */ "./resources/js/components/Components/PDF.js");
/* harmony import */ var _Context_Session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Context/Session */ "./resources/js/components/Context/Session.js");
/* harmony import */ var _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Helpers/Const */ "./resources/js/components/Helpers/Const.js");
/* harmony import */ var _Services_Courrier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Services/Courrier */ "./resources/js/components/Services/Courrier.js");
/* harmony import */ var _Services_Direction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Services/Direction */ "./resources/js/components/Services/Direction.js");
/* harmony import */ var _Services_Operation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/Operation */ "./resources/js/components/Services/Operation.js");
/* harmony import */ var _Styles_SweetDefault_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Styles/SweetDefault.css */ "./resources/js/components/Styles/SweetDefault.css");
/* harmony import */ var _Styles_SweetDefault_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Styles_SweetDefault_css__WEBPACK_IMPORTED_MODULE_12__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function CourrierDetail() {
  var _roles$find;

  var _useSession = Object(_Context_Session__WEBPACK_IMPORTED_MODULE_7__["useSession"])(),
      user = _useSession.user;

  var _useMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_Services_Courrier__WEBPACK_IMPORTED_MODULE_9__["default"].ConsultExternalOne),
      getCourrier = _useMutation.mutateAsync,
      isLoading = _useMutation.isLoading,
      isSuccess = _useMutation.isSuccess;

  var _useMutation2 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_Services_Courrier__WEBPACK_IMPORTED_MODULE_9__["default"].TransferTo),
      transferTo = _useMutation2.mutateAsync,
      isSending = _useMutation2.isLoading;

  var _useMutation3 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_Services_Courrier__WEBPACK_IMPORTED_MODULE_9__["default"].ValidateOrReject),
      validateOrReject = _useMutation3.mutateAsync,
      isValidating = _useMutation3.isLoading;

  var _useMutation4 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_Services_Courrier__WEBPACK_IMPORTED_MODULE_9__["default"].ImputeTo),
      imputeTo = _useMutation4.mutateAsync,
      isImputing = _useMutation4.isLoading;

  var _useMutation5 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_Services_Operation__WEBPACK_IMPORTED_MODULE_11__["default"].List),
      getTracks = _useMutation5.mutateAsync,
      isGettingOperations = _useMutation5.isLoading;

  var _useMutation6 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_Services_Direction__WEBPACK_IMPORTED_MODULE_10__["default"].List),
      getDirections = _useMutation6.mutateAsync,
      isGettingDirections = _useMutation6.isLoading;

  var _useMutation7 = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_Services_Courrier__WEBPACK_IMPORTED_MODULE_9__["default"].TerminateIncoming),
      terminateIncoming = _useMutation7.mutateAsync,
      isTerminating = _useMutation7.isLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      roles = _useState4[0],
      setRoles = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      SelectedCellules = _useState6[0],
      setCellules = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState8 = _slicedToArray(_useState7, 2),
      SelectedAnnotations = _useState8[0],
      setAnnotations = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      directions = _useState10[0],
      setDirections = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      operations = _useState12[0],
      setOperations = _useState12[1];

  var $modalTransfer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  var $modalSuivi = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  var $modalImputation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
  var $ = window.$;
  var params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$getCourrier, courrier, _roles;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return getCourrier({
                data: {
                  courrier: params.courrier
                }
              });

            case 3:
              _yield$getCourrier = _context.sent;
              courrier = _yield$getCourrier.courrier;
              _roles = _yield$getCourrier.roles;
              setFile(courrier);
              setRoles(_roles);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0); //history.replace("/courriers");

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }))();

    $('[data-toggle="tooltip"]').tooltip();
  }, [getCourrier, params.courrier]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var modalSuivi = $($modalSuivi.current);
    var modalImputation = $($modalImputation.current);
    var modalTransfer = $($modalTransfer.current);

    var onHideSuiv = function onHideSuiv() {
      $(".floating_action_buttons").css("right", "20px");
      $(".modal-backdrop").remove();
    };

    var onShowSuiv = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _yield$getTracks, tracks;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                $(".floating_action_buttons").css({
                  right: "-2020px",
                  transition: "0.5s"
                });
                _context2.prev = 1;
                _context2.next = 4;
                return getTracks({
                  data: {
                    courrier_id: params.courrier
                  }
                });

              case 4:
                _yield$getTracks = _context2.sent;
                tracks = _yield$getTracks.tracks;
                setOperations(tracks.sort(function (t1, t2) {
                  return t1.id < t2.id ? 1 : t1.id === t2.id ? 0 : -1;
                }));
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      return function onShowSuiv() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (!isLoading && isSuccess) {
      var onHideTrans = function onHideTrans() {
        setAnnotations({});
        $(this).find("li.chosen").removeClass("chosen");
        $(".floating_action_buttons").css("right", "20px");
      };

      var onHideImput = function onHideImput() {
        setAnnotations({});
        setCellules({});
        $(this).find("li.chosen").removeClass("chosen");
        $(".floating_action_buttons").css("right", "20px");
        $(".modal-backdrop").css("opacity", 0);
      };

      var onShowTrans = function onShowTrans() {
        $(".floating_action_buttons").css({
          right: "-2020px",
          transition: "0.5s"
        });
      };

      modalTransfer.on("show.bs.modal", onShowTrans);
      modalSuivi.on("show.bs.modal", onShowSuiv);
      modalSuivi.on("hidden.bs.modal", onHideSuiv);
      modalTransfer.on("hidden.bs.modal", onHideTrans);

      var onShowImput = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          var _yield$getDirections, dir;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  $(".floating_action_buttons").css({
                    right: "-2020px",
                    transition: "0.5s"
                  });
                  $("#_annoter").show();
                  $("#_imputer").hide();
                  $("#imputer").css("display", "none");
                  $("#imputer").prev().show();
                  _context3.prev = 5;
                  _context3.next = 8;
                  return getDirections();

                case 8:
                  _yield$getDirections = _context3.sent;
                  dir = _yield$getDirections.dir;
                  setDirections(dir);
                  _context3.next = 16;
                  break;

                case 13:
                  _context3.prev = 13;
                  _context3.t0 = _context3["catch"](5);
                  console.log(_context3.t0);

                case 16:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[5, 13]]);
        }));

        return function onShowImput() {
          return _ref3.apply(this, arguments);
        };
      }();

      modalImputation.on("show.bs.modal", onShowImput);
      modalImputation.on("hidden.bs.modal", onHideImput);
    }

    return function () {
      modalImputation.off("hidden.bs.modal");
      modalImputation.off("show.bs.modal");
      modalTransfer.off("show.bs.modal");
      modalTransfer.off("hidden.bs.modal");
      modalSuivi.off("show.bs.modal");
      modalSuivi.off("hidden.bs.modal");
    };
  }, [$modalSuivi, $modalImputation, $modalTransfer, isLoading, isSuccess, getTracks, setCellules, setOperations, setAnnotations]);
  var openTransferModal = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    $($modalTransfer.current).modal({
      backdrop: "static",
      keyboard: false
    });
  }, [$modalTransfer]);
  var openImputeModal = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    $($modalImputation.current).modal({
      backdrop: "static",
      keyboard: false
    });
  }, [$modalImputation]);

  function normalize(h) {
    return "".concat(h > 10 ? "" : "0").concat(h);
  }

  function normalizeRef(reference) {
    return reference < 10 ? "00000".concat(reference) : reference < 100 ? "0000".concat(reference) : reference < 1000 ? "000".concat(reference) : reference < 10000 ? "00".concat(reference) : reference < 100000 ? "0".concat(reference) : reference;
  } // Valider au niveau supérieur.


  var handleTransferTo = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    var annotation, _yield$transferTo, message;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log("Selected Annotations", SelectedAnnotations);
            annotation = Object.values(SelectedAnnotations).filter(function (a) {
              return a !== false;
            }).join("$$");
            _context4.prev = 2;
            _context4.next = 5;
            return transferTo({
              data: {
                courrier_id: params.courrier,
                annotation: annotation
              }
            });

          case 5:
            _yield$transferTo = _context4.sent;
            message = _yield$transferTo.message;
            _context4.next = 9;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              position: "top-end",
              icon: "success",
              title: message,
              showConfirmButton: false,
              timer: 4000
            });

          case 9:
            $(".modal-backdrop").css("opacity", 0);
            $($modalTransfer.current).modal("hide");
            history.push("/courriers");
            _context4.next = 16;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](2);

          case 16:
            _context4.prev = 16;
            $(".floating_action_buttons").css("right", "20px");
            return _context4.finish(16);

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 14, 16, 19]]);
  })), [SelectedAnnotations, transferTo, params.courrier]);
  var selectAnnot = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (e) {
    var noeud = $(e.target).parent();
    var index = noeud.data("index");
    noeud.toggleClass("chosen");
    SelectedAnnotations[index] = noeud.hasClass("chosen") ? _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"][index] : false;
    setAnnotations(_objectSpread({}, SelectedAnnotations));
  }, [SelectedAnnotations]);
  var selectCel = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (e) {
    var _directions$find;

    var noeud = $(e.target).parent();
    var index = noeud.data("index");
    noeud.toggleClass("chosen");
    SelectedCellules[index] = noeud.hasClass("chosen") ? (_directions$find = directions.find(function (d) {
      return d.id == index;
    })) === null || _directions$find === void 0 ? void 0 : _directions$find.id : false;
    setCellules(_objectSpread({}, SelectedCellules));
  }, [SelectedCellules, directions]); // Valider le courrier.

  var validate = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(etat, text) {
      var _yield$validateOrReje, message;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return validateOrReject({
                data: {
                  courrier_id: params.courrier,
                  etat: etat,
                  observation: text
                }
              });

            case 3:
              _yield$validateOrReje = _context5.sent;
              message = _yield$validateOrReje.message;
              _context5.next = 7;
              return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                position: "top-end",
                icon: "success",
                title: message,
                showConfirmButton: false,
                timer: 4000
              });

            case 7:
              history.replace("/courriers");
              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);

            case 13:
              _context5.prev = 13;
              $(".floating_action_buttons").css("right", "20px");
              return _context5.finish(13);

            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 10, 13, 16]]);
    }));

    return function (_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }(), [params.courrier, validateOrReject]); // Imputer le courrier.

  var handleImputeTo = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var annotation, directions, _yield$imputeTo, message;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            annotation = Object.values(SelectedAnnotations).filter(function (a) {
              return a !== false;
            }).join("$$");
            directions = Object.values(SelectedCellules).filter(function (d) {
              return d !== false;
            }).join("$");
            _context6.prev = 2;
            _context6.next = 5;
            return imputeTo({
              data: {
                courrier_id: params.courrier,
                annotation: annotation,
                directions: directions
              }
            });

          case 5:
            _yield$imputeTo = _context6.sent;
            message = _yield$imputeTo.message;
            _context6.next = 9;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              position: "top-end",
              icon: "success",
              title: message,
              showConfirmButton: false,
              timer: 4000
            });

          case 9:
            $(".modal-backdrop").css("opacity", 0);
            $($modalImputation.current).modal("hide");
            history.replace("/courriers");
            _context6.next = 17;
            break;

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);

          case 17:
            _context6.prev = 17;
            $(".floating_action_buttons").css("right", "20px");
            return _context6.finish(17);

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 14, 17, 20]]);
  })), [SelectedCellules, SelectedAnnotations, imputeTo, params.courrier]);
  var showImpute = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (e) {
    $(e.target).hide();
    $("#imputer").css("display", "");
    $("#_annoter").hide();
    $("#_imputer").show();
  }, []); // Responsable du service courrier qui valide le courrier.

  var validateCourrier = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (e) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
      title: "Veuillez confirmer",
      text: "Vous êtes sur le point de valider ce courrier et de le transmettre directement au Sécrétaire Général Adjoint. Cette opération est irréversible, êtes-vous sûr de vouloir continuer ?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Oui, valider",
      cancelButtonText: "Non",
      icon: "question"
    }).then(function (result) {
      if (result.isConfirmed) {
        validate("VALIDE");
      }
    });
  }, [validate]); // Retourner le courrier.

  var returnTo = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
    var _yield$Swal$fire, text;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            $(".floating_action_buttons").css({
              right: "-2020px",
              transition: "0.5s"
            });
            _context7.next = 3;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              input: "textarea",
              inputLabel: "Raison",
              inputPlaceholder: "Veuillez indiquer la raison du renvoi",
              inputAttributes: {
                "aria-label": "Veuillez indiquer la raison du renvoi"
              },
              showCancelButton: true
            });

          case 3:
            _yield$Swal$fire = _context7.sent;
            text = _yield$Swal$fire.value;
            validate("RETOURNE", text);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })), [validate]); // Renvoyer le courrier pour correction.

  var invalidate = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
    var _yield$Swal$fire2, text;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            $(".floating_action_buttons").css({
              right: "-2020px",
              transition: "0.5s"
            });
            _context8.next = 4;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              input: "textarea",
              inputLabel: "Raison",
              inputPlaceholder: "Veuillez indiquer la raison du renvoi",
              inputAttributes: {
                "aria-label": "Veuillez indiquer la raison du renvoi"
              },
              showCancelButton: true
            });

          case 4:
            _yield$Swal$fire2 = _context8.sent;
            text = _yield$Swal$fire2.value;
            validate("RENVOYE", text);
            _context8.next = 12;
            break;

          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 9]]);
  })), [validate]); // Rejeter le courrier.

  var reject = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
    var _yield$Swal$fire3, text;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            $(".floating_action_buttons").css({
              right: "-2020px",
              transition: "0.5s"
            });
            _context9.next = 3;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              input: "textarea",
              inputLabel: "Raison",
              inputPlaceholder: "Veuillez indiquer la raison du rejet",
              inputAttributes: {
                "aria-label": "Veuillez indiquer la raison du rejet"
              },
              showCancelButton: true
            });

          case 3:
            _yield$Swal$fire3 = _context9.sent;
            text = _yield$Swal$fire3.value;
            // if (text) {
            // 	Swal.fire(text)
            // }
            validate("REJETE", text);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })), [validate]);
  var terminate = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
    var _yield$Swal$fire4, isConfirmed, _yield$terminateIncom, message;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            $(".floating_action_buttons").css({
              right: "-2020px",
              transition: "0.5s"
            });
            _context10.next = 3;
            return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              title: "Veuillez confirmer",
              text: "Vous êtes sur le point de vous désigner comme le destinataire final de ce courrier. Il ne vous sera plus possible de le transférer ou de l'imputer. Êtes-vous sûr de vouloir continuer ?",
              showDenyButton: false,
              showCancelButton: true,
              confirmButtonText: "Oui, terminer",
              cancelButtonText: "Non",
              icon: "question"
            });

          case 3:
            _yield$Swal$fire4 = _context10.sent;
            isConfirmed = _yield$Swal$fire4.isConfirmed;

            if (!isConfirmed) {
              _context10.next = 23;
              break;
            }

            _context10.prev = 6;
            _context10.next = 9;
            return terminateIncoming({
              data: {
                courrier_id: params.courrier
              }
            });

          case 9:
            _yield$terminateIncom = _context10.sent;
            message = _yield$terminateIncom.message;
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              position: "top-end",
              icon: "success",
              title: message,
              showConfirmButton: false,
              timer: 4000
            });
            history.replace("/courriers");
            _context10.next = 18;
            break;

          case 15:
            _context10.prev = 15;
            _context10.t0 = _context10["catch"](6);
            console.log(_context10.t0);

          case 18:
            _context10.prev = 18;
            $(".floating_action_buttons").css("right", "20px");
            return _context10.finish(18);

          case 21:
            _context10.next = 24;
            break;

          case 23:
            $(".floating_action_buttons").css("right", "20px");

          case 24:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[6, 15, 18, 21]]);
  })), [terminateIncoming, params.courrier]);
  var openStatsModal = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function () {
    $($modalSuivi.current).modal({
      backdrop: "static",
      keyboard: false
    });
  }, [$modalSuivi]);
  return isLoading || !file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    normal: "50px"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex flex-column align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-10 pl-2 bg-gray position-relative"
  }, file.url_fichier.substr(-4).toLowerCase() != ".pdf" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: file.url_fichier.replace(/^public/, "/storage"),
    width: "100%",
    height: "auto"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_PDF__WEBPACK_IMPORTED_MODULE_6__["default"], {
    url: file.url_fichier.replace(/^public/, "/storage"),
    pagination: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "floating_action_buttons d-flex flex-column align-items-end",
    style: {
      position: "fixed",
      zIndex: 999990,
      right: "20px",
      top: "40%"
    }
  }, (user.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["STAT_COURRIER"].includes(privilege);
  }) || file.etat == "IMPUTE") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white",
    style: {
      maxWidth: "300px"
    }
  }, "STATISTIQUES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: openStatsModal,
    type: "button",
    className: "shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-stats-up"
  }))), file.statut === "OUVERT" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, (user.role.grade == file.etape_actuelle || file.etat == "IMPUTE") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, user.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["TRANSM_COURRIER"].includes(privilege);
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white",
    style: {
      maxWidth: "300px"
    }
  }, "ENVOYER AU", " ", roles === null || roles === void 0 ? void 0 : (_roles$find = roles.find(function (r) {
    return r.grade === user.role.grade + 1;
  })) === null || _roles$find === void 0 ? void 0 : _roles$find.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: openTransferModal,
    type: "button",
    className: "shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-new-window"
  }))), user.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["IMPUT_COURRIER"].includes(privilege);
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
  }, "IMPUTER AUX CELLULES"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: openImputeModal,
    type: "button",
    className: "shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-share"
  }))), user.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["RENVOI_ENVOYEUR"].includes(privilege);
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
  }, "RENVOYER AU BUREAU D'ORDRE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: returnTo,
    className: "shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-back-left"
  }))), (user.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["TERM_COURRIER"].includes(privilege);
  }) || file.etat == "IMPUTE") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
  }, "TERMINER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: terminate,
    className: "shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-download"
  })))), user.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["VALID_REJET"].includes(privilege);
  }) && file.etat === "ATTENTE" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
  }, "VALIDER LE COURRIER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: validateCourrier,
    className: "shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-stats-up"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
  }, "RENVOYER LE COURRIER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: invalidate,
    className: "shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-back-left"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
  }, "REJETER LE COURRIER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: reject,
    type: "button",
    className: "shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-trash"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal slide",
    id: "ModalTransfer",
    ref: $modalTransfer,
    tabIndex: -1,
    role: "dialog",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    style: {
      minWidth: "80%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-content",
    style: {
      minHeight: "80vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "modal-title",
    id: "exampleModalCenterTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Observations / Instructions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-close"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "col-12"
  }, "Cliquez pour cocher les options \xE0 joindre au courrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row col-12",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "annotations col-6",
    style: {
      height: "40vh",
      overflow: "auto"
    }
  }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].slice(0, _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].length / 2).map(function (annotation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index + 1,
      "data-index": index,
      className: Object.keys(SelectedAnnotations).includes(index) ? "chosen" : "",
      onClick: selectAnnot
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text"
    }, annotation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control green custom-checkbox d-inline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      "data-index": index,
      "data-text": annotation,
      className: "custom-control-input",
      id: "customCheck-unselected",
      checked: false,
      onClick: selectAnnot
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck-unselected"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control light d-inline custom-checkbox custom-checkbox-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      "data-index": index,
      "data-text": annotation,
      className: "custom-control-input",
      id: "customCheck6-selected",
      checked: true,
      onClick: selectAnnot
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck6-selected"
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "annotations col-6",
    style: {
      height: "40vh",
      overflow: "auto"
    }
  }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].slice(_Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].length / 2, _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].length).map(function (annotation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      "data-index": _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].length / 2 + index,
      className: Object.keys(SelectedAnnotations).includes(index) ? "chosen" : "",
      style: {
        marginLeft: "20px",
        pointerEvents: isSending ? "none" : ""
      },
      onClick: selectAnnot
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text"
    }, annotation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control green custom-checkbox d-inline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      "data-index": index,
      "data-text": annotation,
      className: "custom-control-input",
      id: "customCheck-unselected",
      checked: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck-unselected"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control light d-inline custom-checkbox custom-checkbox-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      "data-index": index,
      "data-text": annotation,
      className: "custom-control-input",
      id: "customCheck6-selected",
      checked: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck6-selected"
    })));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex justify-content-end",
    style: {
      width: "100%",
      paddingRight: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    disabled: isSending,
    className: "btn btn-lg btn-outline-light",
    "data-dismiss": "modal"
  }, "Annuler l'envoi du courrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: handleTransferTo,
    className: "btn ml-2 mr-5 btn-outline-primary btn-lg",
    disabled: isSending
  }, isSending ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm mr-2",
    role: "status",
    "aria-hidden": "true"
  }), "Envoi en cours...") : "Envoyer avec le courrier")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal fade",
    id: "ModalImputation",
    ref: $modalImputation,
    tabIndex: -1,
    role: "dialog",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    style: {
      minWidth: "80%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-content",
    style: {
      minHeight: "80vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "modal-title",
    id: "exampleModalCenterTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Observations / Instructions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-close"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    id: "_annoter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "m-0 p-0"
  }, "Cliquez pour cocher les options \xE0 joindre au courrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Vous pouvez aussi directement valider sans annoter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    style: {
      width: "70%",
      margin: "auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "annotations col-6",
    style: {
      height: "40vh",
      overflow: "auto"
    }
  }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].slice(0, _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].length / 2).map(function (annotation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index + 1,
      "data-index": index,
      className: Object.keys(SelectedAnnotations).includes(index) ? "chosen" : "",
      onClick: selectAnnot
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text"
    }, annotation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control green custom-checkbox d-inline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      "data-index": index,
      "data-text": annotation,
      className: "custom-control-input",
      id: "customCheck-unselected",
      checked: false,
      onClick: selectAnnot
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck-unselected"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control light d-inline custom-checkbox custom-checkbox-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      "data-index": index,
      "data-text": annotation,
      className: "custom-control-input",
      id: "customCheck6-selected",
      checked: true,
      onClick: selectAnnot
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck6-selected"
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "annotations col-6",
    style: {
      height: "40vh",
      overflow: "auto"
    }
  }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].slice(_Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].length / 2, _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].length).map(function (annotation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      "data-index": _Helpers_Const__WEBPACK_IMPORTED_MODULE_8__["ANNOTATIONS"].length / 2 + index,
      className: Object.keys(SelectedAnnotations).includes(index) ? "chosen" : "",
      style: {
        marginLeft: "20px"
      },
      onClick: selectAnnot
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text"
    }, annotation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control green custom-checkbox d-inline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      "data-index": index,
      "data-text": annotation,
      className: "custom-control-input",
      id: "customCheck-unselected",
      checked: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck-unselected"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control light d-inline custom-checkbox custom-checkbox-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      "data-index": index,
      "data-text": annotation,
      className: "custom-control-input",
      id: "customCheck6-selected",
      checked: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck6-selected"
    })));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    id: "_imputer",
    style: {
      height: "100%"
    }
  }, isGettingDirections ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "spinner-border spinner-border-sm",
    title: "Chargement en cours, veuillez patienter !",
    style: {
      color: "orange",
      width: "50px",
      height: "50px",
      margin: "20% auto",
      display: "block"
    },
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sr-only"
  }, "Chargement en cours ...")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "m-0 p-0"
  }, "Cliquez pour s\xE9lectionner les cellules h\xF4tes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row",
    style: {
      width: "70%",
      margin: "auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "annotations col-6",
    style: {
      height: "40vh",
      overflow: "auto"
    }
  }, directions.slice(0, Math.ceil(directions.length / 2)).map(function (cellule, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index + 1,
      "data-index": cellule.id,
      className: "",
      onClick: selectCel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text"
    }, cellule.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control green custom-checkbox d-inline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      className: "custom-control-input",
      id: "customCheck-unselected",
      checked: false,
      onChange: selectCel
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck-unselected"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control light d-inline custom-checkbox custom-checkbox-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      className: "custom-control-input",
      id: "customCheck6-selected",
      checked: true,
      onClick: selectCel
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck6-selected"
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "annotations col-6",
    style: {
      height: "40vh",
      overflow: "auto"
    }
  }, directions.slice(Math.ceil(directions.length / 2), directions.length).map(function (cellule, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      "data-index": cellule.id,
      className: "",
      style: {
        marginLeft: "20px"
      },
      onClick: selectCel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text"
    }, cellule.nom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control green custom-checkbox d-inline"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      className: "custom-control-input",
      id: "customCheck-unselected",
      checked: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck-unselected"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "custom-control light d-inline custom-checkbox custom-checkbox-dark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "checkbox",
      className: "custom-control-input",
      id: "customCheck6-selected",
      checked: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "custom-control-label",
      htmlFor: "customCheck6-selected"
    })));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex justify-content-end",
    style: {
      width: "100%",
      paddingRight: "20px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    disabled: isImputing,
    className: "btn btn-lg btn-light",
    "data-dismiss": "modal"
  }, "Annuler l'imputation du courrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    disabled: isImputing,
    onClick: showImpute,
    className: "ml-2 mr-5 btn btn-lg btn-primary"
  }, "S\xE9lectionner les cellules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    id: "imputer",
    style: {
      display: "none"
    },
    onClick: handleImputeTo,
    className: "btn ml-2 mr-5 btn-outline-primary btn-lg",
    disabled: isSending || Object.values(SelectedCellules).filter(function (v) {
      return v !== false;
    }).length == 0
  }, isImputing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm mr-2",
    role: "status",
    "aria-hidden": "true"
  }), "Validation...") : "Imputer le courrier")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal fade",
    id: "ModalSuivi",
    ref: $modalSuivi,
    tabIndex: -1,
    role: "dialog",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document",
    style: {
      minWidth: "80%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-content",
    style: {
      minHeight: "80vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "modal-title",
    id: "exampleModalCenterTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Suivi du courrier")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-close"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-body"
  }, isGettingOperations ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "spinner-border spinner-border-sm",
    title: "Chargement en cours, veuillez patienter !",
    style: {
      color: "orange",
      width: "50px",
      height: "50px",
      margin: "20% auto",
      display: "block"
    },
    role: "status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "sr-only"
  }, "Chargement en cours ...")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Historique des op\xE9rations")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "table-responsive pr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    id: "table-files",
    className: "table table-borderless table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "N\xB0 d'ordre"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Op\xE9ration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "D\xE9tails"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, operations.map(function (operation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: index + 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, normalize(new Date(operation.created_at).getDate()), "/", normalize(new Date(operation.created_at).getMonth() + 1), "/", new Date(operation.created_at).getFullYear(), ",", " ", normalize(new Date(operation.created_at).getHours()), ":", normalize(new Date(operation.created_at).getMinutes()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "#/",
      className: "d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("figure", {
      className: "avatar avatar-sm mr-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "avatar-title bg-warning text-black-50 rounded-pill"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "ti-folder"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "d-flex flex-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "text-primary"
    }, operation.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "small font-italic"
    }, operation.user)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      style: {
        display: "block",
        height: "auto",
        overflow: "hidden",
        whiteSpace: "wrap",
        maxWidth: "250px"
      }
    }, operation.donnees));
  })))))))))));
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

/***/ "./resources/js/components/Services/Direction.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Services/Direction.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Libs/useAxios */ "./resources/js/components/Libs/useAxios.js");

var DirectionService = {
  List: function List() {
    return Object(_Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__["default"])("/getDirectionsList", {
      method: "GET"
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DirectionService);

/***/ }),

/***/ "./resources/js/components/Services/Operation.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Services/Operation.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Libs/useAxios */ "./resources/js/components/Libs/useAxios.js");

var OperationService = {
  List: function List(_ref) {
    var data = _ref.data;
    return Object(_Libs_useAxios__WEBPACK_IMPORTED_MODULE_0__["default"])("/getOperations", {
      data: data
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (OperationService);

/***/ }),

/***/ "./resources/js/components/Styles/SweetDefault.css":
/*!*********************************************************!*\
  !*** ./resources/js/components/Styles/SweetDefault.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/postcss-loader/src??ref--6-2!./SweetDefault.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Styles/SweetDefault.css");

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