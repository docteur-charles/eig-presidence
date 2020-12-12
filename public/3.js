(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
      minHeight: '500px',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Loader */ "./resources/js/components/Components/Loader.js");
/* harmony import */ var _Components_PDF__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/PDF */ "./resources/js/components/Components/PDF.js");
/* harmony import */ var _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Helpers/Const */ "./resources/js/components/Helpers/Const.js");
/* harmony import */ var _Helpers_Func__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Helpers/Func */ "./resources/js/components/Helpers/Func.js");


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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      roles = _useState4[0],
      setRoles = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isFetching = _useState8[0],
      setFetching = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isSending = _useState10[0],
      setSending = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState12 = _slicedToArray(_useState11, 2),
      SelectedCellules = _useState12[0],
      setCellules = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState14 = _slicedToArray(_useState13, 2),
      directions = _useState14[0],
      setDirections = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState16 = _slicedToArray(_useState15, 2),
      operations = _useState16[0],
      setOperations = _useState16[1];

  var SelectedAnnotations = {}; // let SelectedCellules = {};

  var auth = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth;
  });
  var $ = window.$;
  var swal = window.swal;
  var params = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  function getCourrier(id, token) {
    return fetch("/consultExternalOne", {
      method: "POST",
      headers: {
        Accept: "Application/json",
        "X-CSRF-TOKEN": token,
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        courrier: id
      })
    }).then( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _objectSpread;
                _context.t1 = {
                  status: res.status
                };
                _context.next = 4;
                return res.json();

              case 4:
                _context.t2 = _context.sent;
                return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  function getDirections() {
    return fetch("/getDirectionsList").then(function (res) {
      return res.json();
    });
  }

  function track() {
    return _track.apply(this, arguments);
  }

  function _track() {
    _track = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var token;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return Object(_Helpers_Func__WEBPACK_IMPORTED_MODULE_7__["getToken"])();

            case 2:
              token = _context6.sent;
              return _context6.abrupt("return", fetch("/getOperations", {
                method: "POST",
                headers: {
                  "Content-Type": "Application/json",
                  Accept: "Application/json",
                  "X-CSRF-TOKEN": token
                },
                body: JSON.stringify({
                  courrier_id: params.courrier
                })
              }).then(function (res) {
                return res.json();
              }));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _track.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (auth) {
      setLoading(true);
      Object(_Helpers_Func__WEBPACK_IMPORTED_MODULE_7__["getToken"])().then( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return getCourrier(params.courrier, token);

                case 2:
                  response = _context2.sent;

                  if (!response.success) {
                    if (~response.message.indexOf('introuvable')) {
                      history.replace('/courriers');
                    }

                    Object(_Helpers_Func__WEBPACK_IMPORTED_MODULE_7__["manageResponse"])(response, dispatch);
                    setLoading(false);
                  } else {
                    setFile(response.courrier);
                    setRoles(response.roles);
                    setLoading(false);
                  }

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    $('[data-toggle="tooltip"]').tooltip();
  }, [auth]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    $("#ModalTransfer").on("show.bs.modal", function () {
      $(".floating_action_buttons").css({
        right: "-2020px",
        transition: "0.5s"
      });
    });
    $("#ModalSuivi").on("show.bs.modal", function () {
      $(".floating_action_buttons").css({
        right: "-2020px",
        transition: "0.5s"
      });
      setFetching(true);
      track().then(function (tracks) {
        console.log(tracks);
        setFetching(false);
        setOperations(tracks);
      });
    });
    $("#ModalSuivi").on("hidden.bs.modal", function () {
      $(".floating_action_buttons").css("right", "20px");
    });
    $("#ModalTransfer").on("hidden.bs.modal", function () {
      SelectedAnnotations = {};
      $(this).find("li.chosen").removeClass("chosen");
      $(".floating_action_buttons").css("right", "20px");
    });
    $("#ModalImputation").on("show.bs.modal", function () {
      $(".floating_action_buttons").css({
        right: "-2020px",
        transition: "0.5s"
      });
      $("#_annoter").show();
      $("#_imputer").hide();
      $("#imputer").css("display", "none");
      $("#imputer").prev().show();
      setFetching(true);
      getDirections().then(function (dir) {
        setFetching(false);
        setDirections(dir);
      });
    });
    $("#ModalImputation").on("hidden.bs.modal", function () {
      SelectedAnnotations = {};
      setCellules({});
      $(this).find("li.chosen").removeClass("chosen");
      $(".floating_action_buttons").css("right", "20px");
    });
  });

  function openTransferModal() {
    $("#ModalTransfer").modal({
      backdrop: "static",
      keyboard: false
    });
  }

  function openImputeModal() {
    $("#ModalImputation").modal({
      backdrop: "static",
      keyboard: false
    });
  }

  function normalize(h) {
    return "".concat(h > 10 ? "" : "0").concat(h);
  }

  function normalizeRef(reference) {
    return reference < 10 ? "00000".concat(reference) : reference < 100 ? "0000".concat(reference) : reference < 1000 ? "000".concat(reference) : reference < 10000 ? "00".concat(reference) : reference < 100000 ? "0".concat(reference) : reference;
  } // Valider au niveau supérieur.


  function transferTo() {
    var annotation = Object.values(SelectedAnnotations).filter(function (a) {
      return a !== false;
    }).join("$$");
    setSending(true);
    Object(_Helpers_Func__WEBPACK_IMPORTED_MODULE_7__["getToken"])().then(function (token) {
      fetch("/transfertTo", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
          "X-CSRF-TOKEN": token
        },
        body: JSON.stringify({
          courrier_id: params.courrier,
          annotation: annotation
        })
      }).then( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = _objectSpread;
                  _context3.t1 = {
                    status: res.status
                  };
                  _context3.next = 4;
                  return res.json();

                case 4:
                  _context3.t2 = _context3.sent;
                  return _context3.abrupt("return", (0, _context3.t0)(_context3.t1, _context3.t2));

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()).then(function (response) {
        setSending(false);

        if (!response.success) {
          Object(_Helpers_Func__WEBPACK_IMPORTED_MODULE_7__["manageResponse"])(response, dispatch);
        } else {
          $("#ModalTransfer").modal("hide");
          $(".floating_action_buttons").css("right", "20px");
          swal("Opération réussie", response.message, "success").then(function () {
            swal.close();
            history.push("/courriers");
          });
        }
      });
    });
  }

  function selectAnnot(e) {
    var noeud = $(e.target).parent();
    var index = noeud.data("index");
    noeud.toggleClass("chosen");
    SelectedAnnotations[index] = noeud.hasClass("chosen") ? _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"][index] : false;
  }

  function selectCel(e) {
    var noeud = $(e.target).parent();
    var index = noeud.data("index");
    noeud.toggleClass("chosen");
    SelectedCellules[index] = noeud.hasClass("chosen") ? directions[index].id : false;
    setCellules(_objectSpread({}, SelectedCellules));
    console.log(SelectedCellules);
  } // Valider le courrier.


  function validate(etat) {
    setSending(true);
    Object(_Helpers_Func__WEBPACK_IMPORTED_MODULE_7__["getToken"])().then(function (token) {
      fetch("/validateOrReject", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
          "X-CSRF-TOKEN": token
        },
        body: JSON.stringify({
          courrier_id: params.courrier,
          etat: etat
        })
      }).then( /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.t0 = _objectSpread;
                  _context4.t1 = {
                    status: res.status
                  };
                  _context4.next = 4;
                  return res.json();

                case 4:
                  _context4.t2 = _context4.sent;
                  return _context4.abrupt("return", (0, _context4.t0)(_context4.t1, _context4.t2));

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }()).then(function (response) {
        setSending(false);

        if (!response.success) {
          Object(_Helpers_Func__WEBPACK_IMPORTED_MODULE_7__["manageResponse"])(response, dispatch);
        } else {
          swal("Opération réussie", response.message, "success").then(function () {
            swal.close();
            history.push("/courriers");
          });
        }
      });
    });
  } // Imputer le courrier.


  function imputeTo() {
    var annotation = Object.values(SelectedAnnotations).filter(function (a) {
      return a !== false;
    }).join("$$");
    var directions = Object.values(SelectedCellules).filter(function (d) {
      return d !== false;
    }).join("$");
    setSending(true);
    Object(_Helpers_Func__WEBPACK_IMPORTED_MODULE_7__["getToken"])().then(function (token) {
      fetch("/imputeTo", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
          "X-CSRF-TOKEN": token
        },
        body: JSON.stringify({
          courrier_id: params.courrier,
          annotation: annotation,
          directions: directions
        })
      }).then( /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(res) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.t0 = _objectSpread;
                  _context5.t1 = {
                    status: res.status
                  };
                  _context5.next = 4;
                  return res.json();

                case 4:
                  _context5.t2 = _context5.sent;
                  return _context5.abrupt("return", (0, _context5.t0)(_context5.t1, _context5.t2));

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }()).then(function (response) {
        setSending(false);

        if (!response.success) {
          Object(_Helpers_Func__WEBPACK_IMPORTED_MODULE_7__["manageResponse"])(response, dispatch);
        } else {
          $("#ModalImputation").modal("hide");
          $(".floating_action_buttons").css("right", "20px");
          swal("Opération réussie", response.message, "success").then(function () {
            swal.close();
            history.push("/courriers");
          });
        }
      });
    });
  }

  function showImpute(e) {
    $(e.target).hide();
    $("#imputer").css("display", "");
    $("#_annoter").hide();
    $("#_imputer").show();
  } // Retourner le courrier.


  function returnTo() {} // Renvoyer le courrier pour correction.


  function invalidate() {
    validate("RENVOYE");
  } // Rejeter le courrier.


  function reject() {
    validate("REJETE");
  }

  function terminate() {}

  function openStatsModal() {
    $("#ModalSuivi").modal({
      backdrop: "static",
      keyboard: false
    });
  }

  return isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    normal: "50px"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex flex-column align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-10 pl-2 bg-gray position-relative"
  }, file.url_fichier.substr(-4).toLowerCase() != ".pdf" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: file.url_fichier.replace(/^public/, "/storage"),
    width: "100%",
    height: "auto"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Components_PDF__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, (auth.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["STAT_COURRIER"].includes(privilege);
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
  }))), file.statut === "OUVERT" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, (auth.role.grade == file.etape_actuelle || file.etat == "IMPUTE") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, auth.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["TRANSM_COURRIER"].includes(privilege);
  }) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white",
    style: {
      maxWidth: "300px"
    }
  }, "ENVOYER AU", " ", roles.find(function (r) {
    return r.grade === auth.role.grade + 1;
  }).description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: openTransferModal,
    type: "button",
    className: "shadow align-items-center justify-content-center d-flex btn btn-outline-primary btn-lg btn-floating"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ti-new-window"
  }))), auth.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["IMPUT_COURRIER"].includes(privilege);
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
  }))), auth.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["RENVOI_ENVOYEUR"].includes(privilege);
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
  }))), (auth.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["TERM_COURRIER"].includes(privilege);
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
  })))), auth.role.privileges.some(function (privilege) {
    return _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["VALID_REJET"].includes(privilege);
  }) && file.etat === "ATTENTE" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button d-flex align-items-center mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "shadow text-uppercase p-5 p-l-20 p-r-20 rounded-pill m-r-5 text-primary bg-white"
  }, "VALIDER LE COURRIER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return validate("VALIDE");
    },
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
  }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].slice(0, _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].length / 2).map(function (annotation, index) {
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
  }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].slice(_Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].length / 2, _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].length).map(function (annotation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      "data-index": _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].length / 2 + index,
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
    onClick: transferTo,
    className: "btn ml-2 mr-5 btn-outline-primary btn-lg",
    disabled: isSending
  }, isSending ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm mr-2",
    role: "status",
    "aria-hidden": "true"
  }), "Envoi en cours...") : "Envoyer avec le courrier")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal fade",
    id: "ModalImputation",
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
  }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].slice(0, _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].length / 2).map(function (annotation, index) {
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
  }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].slice(_Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].length / 2, _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].length).map(function (annotation, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      "data-index": _Helpers_Const__WEBPACK_IMPORTED_MODULE_6__["ANNOTATIONS"].length / 2 + index,
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
  }, isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
      "data-index": index,
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
      "data-index": Math.ceil(directions.length / 2) + index,
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
    disabled: isSending,
    className: "btn btn-lg btn-light",
    "data-dismiss": "modal"
  }, "Annuler l'imputation du courrier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    disabled: isSending,
    onClick: showImpute,
    className: "ml-2 mr-5 btn btn-lg btn-primary"
  }, "S\xE9lectionner les cellules"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    id: "imputer",
    style: {
      display: "none"
    },
    onClick: imputeTo,
    className: "btn ml-2 mr-5 btn-outline-primary btn-lg",
    disabled: isSending || Object.values(SelectedCellules).filter(function (v) {
      return v !== false;
    }).length == 0
  }, isSending ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "spinner-border spinner-border-sm mr-2",
    role: "status",
    "aria-hidden": "true"
  }), "Validation...") : "Imputer le courrier")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal fade",
    id: "ModalSuivi",
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
  }, isFetching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
        display: 'block',
        height: 'auto',
        overflow: 'hidden',
        'whiteSpace': 'wrap',
        maxWidth: '250px'
      }
    }, operation.donnees));
  })))))))))));
}

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