import React, { useEffect } from "react";

export default function Usage() {
    function initialize() {
        let $ = window.$;

        var colors = {
                primary: $(".colors .bg-primary")
                    .css("background-color")
                    .replace("rgb", "")
                    .replace(")", "")
                    .replace("(", "")
                    .split(","),
                secondary: $(".colors .bg-secondary")
                    .css("background-color")
                    .replace("rgb", "")
                    .replace(")", "")
                    .replace("(", "")
                    .split(","),
                info: $(".colors .bg-info")
                    .css("background-color")
                    .replace("rgb", "")
                    .replace(")", "")
                    .replace("(", "")
                    .split(","),
                success: $(".colors .bg-success")
                    .css("background-color")
                    .replace("rgb", "")
                    .replace(")", "")
                    .replace("(", "")
                    .split(","),
                danger: $(".colors .bg-danger")
                    .css("background-color")
                    .replace("rgb", "")
                    .replace(")", "")
                    .replace("(", "")
                    .split(","),
                warning: $(".colors .bg-warning")
                    .css("background-color")
                    .replace("rgb", "")
                    .replace(")", "")
                    .replace("(", "")
                    .split(",")
            },
            chartFontStyle = "Josefin Sans";

        var rgbToHex = function(rgb) {
            var hex = Number(rgb).toString(16);
            if (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex;
        };

        var fullColorHex = function(r, g, b) {
            var red = rgbToHex(r);
            var green = rgbToHex(g);
            var blue = rgbToHex(b);
            return red + green + blue;
        };

        colors.primary =
            "#" +
            fullColorHex(
                colors.primary[0],
                colors.primary[1],
                colors.primary[2]
            );
        colors.secondary =
            "#" +
            fullColorHex(
                colors.secondary[0],
                colors.secondary[1],
                colors.secondary[2]
            );
        colors.info =
            "#" + fullColorHex(colors.info[0], colors.info[1], colors.info[2]);
        colors.success =
            "#" +
            fullColorHex(
                colors.success[0],
                colors.success[1],
                colors.success[2]
            );
        colors.danger =
            "#" +
            fullColorHex(colors.danger[0], colors.danger[1], colors.danger[2]);
        colors.warning =
            "#" +
            fullColorHex(
                colors.warning[0],
                colors.warning[1],
                colors.warning[2]
            );

        function dailyUsage() {
            var options = {
                series: [
                    {
                        name: "Courriers en attente",
                        data: [90, 70, 57, 56, 61, 100, 63, 60, 66, 4, 11, 30]
                    },
                    {
                        name: "Courriers traités",
                        data: [
                            49,
                            60,
                            101,
                            98,
                            87,
                            58,
                            91,
                            114,
                            94,
                            120,
                            150,
                            160
                        ]
                    }
                ],
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
                    categories: [
                        "Jan",
                        "Fév",
                        "Mar",
                        "Avr",
                        "Mai",
                        "Juin",
                        "Juil",
                        "Aoû",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Déc"
                    ]
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return val;
                        }
                    }
                },
                legend: {
                    show: true
                }
            };

            let el = document.querySelector("#daily-usage");
            if (el) {
                var chart = new window.ApexCharts(
                    document.querySelector("#daily-usage"),
                    options
                );

                chart.render();
                return chart;
            }
        }

        return dailyUsage();
    }

    useEffect(() => {
        let apex = initialize();
        return () => {
            apex && apex.destroy();
        };
    }, []);

    return (
        <div className="row">
            <div className="col-md-12">
                <h4>Usage mensuel</h4>
                <div id="daily-usage" />
            </div>
        </div>
    );
}
