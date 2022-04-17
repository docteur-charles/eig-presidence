(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/components/Components/Demo.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Components/Demo.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function Demo() {
  var $ = window.$;

  function faireLeTour(e) {
    e.preventDefault();
    var enjoyhint_instance = new window.EnjoyHint({});
    var initOptions = [],
        options = {
      nextButton: {
        text: "Suivant"
      },
      skipButton: {
        text: "Ignorer"
      }
    };
    var data = [{
      s: 'next .header',
      d: 'La barre des tâches.'
    }, {
      s: 'next .navigation',
      d: 'Le menu de navigation vous permet de déclancher les opérations principales. Vous \'y trouverez que les opérations que vous êtes autorisés à effectuer !'
    }, {
      s: 'next .gec-dashboard',
      d: 'Votre tableau de bord. Vous y retrouverez un resumé de l\'ensemble de courriers que vous avez traités et ceux qui vous sont destinés mais que vous n\'avez pas traités pour chaque mois l\'année en cours.'
    }, {
      s: 'next .gec-enreg-courriers',
      d: "Enregistrement de nouveaux courriers par le bureau d'ordre ou la directrice."
    }, {
      s: 'next .gec-courriers',
      d: "Liste de courriers qui vous sont destinés et que vous n'avez pas encore traités."
    }, {
      s: 'next .gec-statistiques',
      d: 'Vos statistiques d\'utilisation.'
    }, {
      s: 'next .gec-utilisateurs',
      d: "Ici, vous gérerez l'ensemble des utilisateurs, leurs rôles, leurs grades et leurs privilèges."
    }, {
      s: 'next .gec-archives',
      d: 'Liste des archives. Vous ne verrez que les courriers que vous êtes autorisés à voir.'
    }, {
      s: 'next .gec-params',
      d: 'Paramétrez ici votre compte. Vous pouvez changer entre autre votre mot de passe, votre photo de profil etc.'
    }, {
      s: 'next .gec-disconnect',
      d: 'Un clic ici fermera votre session et vous déconnectera.'
    }, {
      s: 'next .sidebar-content',
      d: 'Ici vous avez un aperçu de vos courriers en attente de traitement.'
    }, {
      s: 'next .sidebar-footer',
      d: 'Téléversez et envoyez de nouveaux courriers. Avec ce button, on ne peut envoyer que des PDF ou des Images.'
    }];

    for (var _i = 0, _data = data; _i < _data.length; _i++) {
      var opt = _data[_i];

      if ($(opt.s.substr(5)).length > 0) {
        initOptions.push(_objectSpread(_defineProperty({}, opt.s, opt.d), options));
      }
    } // initOptions[initOptions.length-1].nextButton.text = 'Terminer';
    // initOptions[initOptions.length - 1].skipButton = false;


    enjoyhint_instance.set(initOptions);
    enjoyhint_instance.run();
    return false;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card bg-primary-bright border-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-2 col-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img-fluid",
    src: "/assets/media/svg/upgrade.svg",
    alt: "Faire un tour"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-10 col-md-9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-md-flex align-items-center justify-content-between text-center text-md-left p-4 p-md-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mb-3"
  }, "Faites un tour !"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted"
  }, "Nous avons pr\xE9par\xE9 pour vous un outil pour une prise en main rapide de l'interface utilisateur."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    className: "small"
  }, "Fermer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-shrink-0 ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-primary btn-lg2",
    onClick: faireLeTour
  }, "D\xE9marrer maintenant")))))));
}

/***/ }),

/***/ "./resources/js/components/Components/Usage.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Components/Usage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Usage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Usage() {
  function initialize() {
    var $ = window.$;
    var colors = {
      primary: $(".colors .bg-primary").css("background-color").replace("rgb", "").replace(")", "").replace("(", "").split(","),
      secondary: $(".colors .bg-secondary").css("background-color").replace("rgb", "").replace(")", "").replace("(", "").split(","),
      info: $(".colors .bg-info").css("background-color").replace("rgb", "").replace(")", "").replace("(", "").split(","),
      success: $(".colors .bg-success").css("background-color").replace("rgb", "").replace(")", "").replace("(", "").split(","),
      danger: $(".colors .bg-danger").css("background-color").replace("rgb", "").replace(")", "").replace("(", "").split(","),
      warning: $(".colors .bg-warning").css("background-color").replace("rgb", "").replace(")", "").replace("(", "").split(",")
    },
        chartFontStyle = "Josefin Sans";

    var rgbToHex = function rgbToHex(rgb) {
      var hex = Number(rgb).toString(16);

      if (hex.length < 2) {
        hex = "0" + hex;
      }

      return hex;
    };

    var fullColorHex = function fullColorHex(r, g, b) {
      var red = rgbToHex(r);
      var green = rgbToHex(g);
      var blue = rgbToHex(b);
      return red + green + blue;
    };

    colors.primary = "#" + fullColorHex(colors.primary[0], colors.primary[1], colors.primary[2]);
    colors.secondary = "#" + fullColorHex(colors.secondary[0], colors.secondary[1], colors.secondary[2]);
    colors.info = "#" + fullColorHex(colors.info[0], colors.info[1], colors.info[2]);
    colors.success = "#" + fullColorHex(colors.success[0], colors.success[1], colors.success[2]);
    colors.danger = "#" + fullColorHex(colors.danger[0], colors.danger[1], colors.danger[2]);
    colors.warning = "#" + fullColorHex(colors.warning[0], colors.warning[1], colors.warning[2]);

    function dailyUsage() {
      var options = {
        series: [{
          name: "Courriers en attente",
          data: [90, 70, 57, 56, 61, 100, 63, 60, 66, 4, 11, 30]
        }, {
          name: "Courriers traités",
          data: [49, 60, 101, 98, 87, 58, 91, 114, 94, 120, 150, 160]
        }],
        chart: {
          type: "bar",
          fontFamily: chartFontStyle,
          offsetX: -18,
          height: 390,
          width: "103%",
          toolbar: {
            show: false
          }
        },
        colors: [colors.primary, colors.success],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 10,
          colors: ["transparent"]
        },
        xaxis: {
          categories: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"]
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function formatter(val) {
              return val;
            }
          }
        },
        legend: {
          show: true
        }
      };
      var el = document.querySelector("#daily-usage");

      if (el) {
        var chart = new window.ApexCharts(document.querySelector("#daily-usage"), options);
        chart.render();
        return chart;
      }
    }

    return dailyUsage();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var apex = initialize();
    return function () {
      apex && apex.destroy();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Usage mensuel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "daily-usage"
  })));
}

/***/ }),

/***/ "./resources/js/components/Pages/Dashboard.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Pages/Dashboard.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Demo */ "./resources/js/components/Components/Demo.js");
/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Loader */ "./resources/js/components/Components/Loader.js");
/* harmony import */ var _Components_Usage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Usage */ "./resources/js/components/Components/Usage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Dashboard() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    setTimeout(function () {
      setLoading(false);
    }, 200);
  }, []);
  return isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Demo__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Usage__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ })

}]);