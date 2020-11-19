import React, { useEffect } from 'react';
import { Locale, Toolbar } from '../Helpers/Const';

export default function Statistiques(props) {

  let ApexCharts = window.ApexCharts;

  function statSemaine() {
    var options = {
      chart: {
        height: 350,
        type: 'area',
        ...Locale,
        toolbar: Toolbar
      },
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
        categories: ["2018-09-13", "2018-09-14", "2018-09-15", "2018-09-16", "2018-09-17", "2018-09-18", "2018-09-19"],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      }
    }

    var chart = new ApexCharts(
      document.querySelector("#semaine"),
      options
    );

    chart.render();
  }

  function statAnnee() {
    var options = {
      chart: {
        height: 350,
        type: 'bar',
        ...Locale,
        toolbar: Toolbar
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
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
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'],
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
          formatter: function (val) {
            return val + " courriers"
          }
        }
      }
    }

    var chart = new ApexCharts(
      document.querySelector("#annee"),
      options
    );

    chart.render();
  }

  function statAnnees() {
    var options = {
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        stackType: '100%',
        ...Locale,
        toolbar: Toolbar
      },
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
        categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      },
      fill: {
        opacity: 1
      },

      legend: {
        position: 'right',
        offsetX: 0,
        offsetY: 50
      },
    }

    var chart = new ApexCharts(
      document.querySelector("#annees"),
      options
    );

    chart.render();
  }

  function statTypes() {
    var options = {
      chart: {
        height: 380,
        type: 'bar',
        ...Locale,
        toolbar: Toolbar
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom'
          },
        }
      },
      colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e'],
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['#fff']
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
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
        categories: ['Ordinaires', 'Confidentiels', 'Urgents', 'Très Urgents', 'Lettres du Président', 'Décisions', 'Lettres ordinaires', 'Arrêtés'],
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
        align: 'center',
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function () {
              return ''
            }
          }
        }
      }
    }

    var chart = new ApexCharts(
      document.querySelector("#par_types"),
      options
    );

    chart.render();
  }

  useEffect(() => {
    setTimeout(() => {
      statSemaine();
      statAnnee();
      statTypes();
      statAnnees();
    }, 200);
  }, []);

  return (
    <div>
      <h3 className="text-uppercase mb-4">Statistiques d'utilisation</h3>

      <h5 className="badge badge-primary">Cette semaine</h5>
      <div className="mb-3" id="semaine" style={{ height: 300 }} />

      <h5 className="badge badge-primary">Cette année</h5>
      <div className="mb-3" id="annee" style={{ height: 300 }} />

      <h5 className="badge badge-primary">Courriers par type</h5>
      <div className="mb-3" id="par_types" style={{ height: 300 }} />

      <h5 className="badge badge-primary">Ces huit (08) dernières années</h5>
      <div className="mb-3" id="annees" style={{ height: 300 }} />
    </div>

  )
}
