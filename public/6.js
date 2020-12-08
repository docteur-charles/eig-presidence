(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/components/Pages/Statistiques.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Pages/Statistiques.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Statistiques; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Helpers_Const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpers/Const */ "./resources/js/components/Helpers/Const.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Statistiques(props) {
  var ApexCharts = window.ApexCharts;

  function statSemaine() {
    var options = {
      chart: _objectSpread(_objectSpread({
        height: 350,
        type: 'area'
      }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_1__["Locale"]), {}, {
        toolbar: _Helpers_Const__WEBPACK_IMPORTED_MODULE_1__["Toolbar"]
      }),
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [{
        name: 'Courriers traités',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Courriers en cours de traitement',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-13", "2018-09-14", "2018-09-15", "2018-09-16", "2018-09-17", "2018-09-18", "2018-09-19"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    };
    var chart = new ApexCharts(document.querySelector("#semaine"), options);
    chart.render();
  }

  function statAnnee() {
    var options = {
      chart: _objectSpread(_objectSpread({
        height: 350,
        type: 'bar'
      }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_1__["Locale"]), {}, {
        toolbar: _Helpers_Const__WEBPACK_IMPORTED_MODULE_1__["Toolbar"]
      }),
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [{
        name: 'Internes',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 61, 58]
      }, {
        name: 'Sortants',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 101, 98, 87]
      }, {
        name: 'Entrants',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 36, 26, 45]
      }],
      xaxis: {
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
      },
      yaxis: {
        title: {
          text: '(courriers)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function formatter(val) {
            return val + " courriers";
          }
        }
      }
    };
    var chart = new ApexCharts(document.querySelector("#annee"), options);
    chart.render();
  }

  function statAnnees() {
    var options = {
      chart: _objectSpread(_objectSpread({
        height: 350,
        type: 'bar',
        stacked: true,
        stackType: '100%'
      }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_1__["Locale"]), {}, {
        toolbar: _Helpers_Const__WEBPACK_IMPORTED_MODULE_1__["Toolbar"]
      }),
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      series: [{
        name: 'INTERNES',
        data: [44, 55, 41, 67, 22, 43, 21, 49]
      }, {
        name: 'SORTANTS',
        data: [13, 23, 20, 8, 13, 27, 33, 12]
      }, {
        name: 'ENTRANTS',
        data: [11, 17, 15, 15, 21, 14, 15, 13]
      }],
      xaxis: {
        categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50
      }
    };
    var chart = new ApexCharts(document.querySelector("#annees"), options);
    chart.render();
  }

  function statTypes() {
    var options = {
      chart: _objectSpread(_objectSpread({
        height: 380,
        type: 'bar'
      }, _Helpers_Const__WEBPACK_IMPORTED_MODULE_1__["Locale"]), {}, {
        toolbar: _Helpers_Const__WEBPACK_IMPORTED_MODULE_1__["Toolbar"]
      }),
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom'
          }
        }
      },
      colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e'],
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff']
        },
        formatter: function formatter(val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100]
      }],
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: ['Ordinaires', 'Confidentiels', 'Urgents', 'Très Urgents', 'Lettres du Président', 'Décisions', 'Lettres ordinaires', 'Arrêtés']
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      title: {
        text: 'Classement de courriers de cette années',
        align: 'center',
        floating: true
      },
      subtitle: {
        text: 'Ces courriers sont groupés par type de contenu et par mention',
        align: 'center'
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter() {
              return '';
            }
          }
        }
      }
    };
    var chart = new ApexCharts(document.querySelector("#par_types"), options);
    chart.render();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      statSemaine();
      statAnnee();
      statTypes();
      statAnnees();
    }, 200);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "text-uppercase mb-4"
  }, "Statistiques d'utilisation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "badge badge-primary"
  }, "Cette semaine"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3",
    id: "semaine",
    style: {
      height: 300
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "badge badge-primary"
  }, "Cette ann\xE9e"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3",
    id: "annee",
    style: {
      height: 300
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "badge badge-primary"
  }, "Courriers par type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3",
    id: "par_types",
    style: {
      height: 300
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "badge badge-primary"
  }, "Ces huit (08) derni\xE8res ann\xE9es"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-3",
    id: "annees",
    style: {
      height: 300
    }
  }));
}

/***/ })

}]);