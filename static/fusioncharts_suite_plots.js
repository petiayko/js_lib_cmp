$(function () {
    let begin;
    let end;
    // hist

    // scatter
    {
        {
            let data = get_data('scatter', 100);
            let data_format = [];
            for (let i in data.x1) {
                data_format.push({x: data.x1[i], y: data.x2[i]});
            }

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite scatter for 100 dots",
                    xaxisname: "axis x",
                    yaxisname: "axis y",
                    theme: "fusion",
                    plottooltext: "<b>$yDataValue</b> <b>$xdataValue</b>"
                },
                dataset: [
                    {
                        anchorbgcolor: "#1539d4",
                        data: data_format
                    },
                ]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "zoomscatter",
                    renderAt: "scatter-fcs-2",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#scatter-fcs-2').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        {
            let data = get_data('scatter', 1000);
            let data_format = [];
            for (let i in data.x1) {
                data_format.push({x: data.x1[i], y: data.x2[i]});
            }

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite scatter for 1000 dots",
                    xaxisname: "axis x",
                    yaxisname: "axis y",
                    theme: "fusion",
                    plottooltext: "<b>$yDataValue</b> <b>$xdataValue</b>"
                },
                dataset: [
                    {
                        anchorbgcolor: "#1539d4",
                        data: data_format
                    },
                ]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "zoomscatter",
                    renderAt: "scatter-fcs-3",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#scatter-fcs-3').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        {
            let data = get_data('scatter', 10000);
            let data_format = [];
            for (let i in data.x1) {
                data_format.push({x: data.x1[i], y: data.x2[i]});
            }

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite scatter for 10000 dots",
                    xaxisname: "axis x",
                    yaxisname: "axis y",
                    theme: "fusion",
                    plottooltext: "<b>$yDataValue</b> <b>$xdataValue</b>"
                },
                dataset: [
                    {
                        anchorbgcolor: "#1539d4",
                        data: data_format
                    },
                ]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "zoomscatter",
                    renderAt: "scatter-fcs-4",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#scatter-fcs-4').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }
    }

    // scatter-wl
    {
        {
            let data = get_data('scatter', 10000);
            let values = [];
            let labels = [];
            let data_format = []
            for (let i in data.x1) {
                data_format.push({value: data.x2[i], label: data.x1[i]});
            }
            data_format.sort(function (a, b) {
                return a.label - b.label;
            });
            for (let i in data_format) {
                values.push({value: String(data_format[i].value)});
                labels.push({label: String(data_format[i].label)});
            }

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite scatter with line for 100 dots",
                    yaxisname: "axis y",
                    xaxisname: "axis x",
                    theme: "fusion"
                },
                categories: [{
                    category: labels
                }],
                dataset: [{
                    data: values
                }]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "zoomline",
                    renderAt: "scatter-wl-fcs-2",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#scatter-wl-fcs-2').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        {
            let data = get_data('scatter', 1000);
            let values = [];
            let labels = [];
            let data_format = []
            for (let i in data.x1) {
                data_format.push({value: data.x2[i], label: data.x1[i]});
            }
            data_format.sort(function (a, b) {
                return a.label - b.label;
            });
            for (let i in data_format) {
                values.push({value: String(data_format[i].value)});
                labels.push({label: String(data_format[i].label)});
            }

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite scatter with line for 1000 dots",
                    yaxisname: "axis y",
                    xaxisname: "axis x",
                    theme: "fusion"
                },
                categories: [{
                    category: labels
                }],
                dataset: [{
                    data: values
                }]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "zoomline",
                    renderAt: "scatter-wl-fcs-3",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#scatter-wl-fcs-3').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        {
            let data = get_data('scatter', 10000);
            let values = [];
            let labels = [];
            let data_format = []
            for (let i in data.x1) {
                data_format.push({value: data.x2[i], label: data.x1[i]});
            }
            data_format.sort(function (a, b) {
                return a.label - b.label;
            });
            for (let i in data_format) {
                values.push({value: String(data_format[i].value)});
                labels.push({label: String(data_format[i].label)});
            }

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite scatter with line for 10000 dots",
                    yaxisname: "axis y",
                    xaxisname: "axis x",
                    theme: "fusion"
                },
                categories: [{
                    category: labels
                }],
                dataset: [{
                    data: values
                }]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "zoomline",
                    renderAt: "scatter-wl-fcs-4",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#scatter-wl-fcs-4').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }
    }

    // boxplot
    {
        {
            let data = get_data('boxplot', 10000);
            let values = [];
            let labels = Object.keys(data).sort();
            for (let i in labels) {
                values.push({value: data[labels[i]].join(', ')});
                labels[i] = {label: labels[i]};
            }

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite boxplot for 100 values",
                    theme: "fusion",
                    plottooltext:
                        "<b>Distribution for $label:</b><br>Max: <b>$$maxDataValue</b><br>Q3: <b>$$Q3</b><br>Median: <b>$$median</b><br>Q1: <b>$$Q1</b><br>Min: <b>$$minDataValue</b>",
                    mediancolor: "#FFFFFF"
                },
                categories: [{
                    category: labels
                }],
                dataset: [{
                    data: values
                }]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "boxandwhisker2d",
                    renderAt: "boxplot-fcs-2",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#boxplot-fcs-2').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        {
            let data = get_data('boxplot', 1000);
            let values = [];
            let labels = Object.keys(data).sort();
            for (let i in labels) {
                values.push({value: data[labels[i]].join(', ')});
                labels[i] = {label: labels[i]};
            }

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite boxplot for 1000 values",
                    theme: "fusion",
                    plottooltext:
                        "<b>Distribution for $label:</b><br>Max: <b>$$maxDataValue</b><br>Q3: <b>$$Q3</b><br>Median: <b>$$median</b><br>Q1: <b>$$Q1</b><br>Min: <b>$$minDataValue</b>",
                    mediancolor: "#FFFFFF"
                },
                categories: [{
                    category: labels
                }],
                dataset: [{
                    data: values
                }]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "boxandwhisker2d",
                    renderAt: "boxplot-fcs-3",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#boxplot-fcs-3').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        {
            let data = get_data('boxplot', 10000);
            let values = [];
            let labels = Object.keys(data).sort();
            for (let i in labels) {
                values.push({value: data[labels[i]].join(', ')});
                labels[i] = {label: labels[i]};
            }

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite boxplot for 10000 values",
                    theme: "fusion",
                    plottooltext:
                        "<b>Distribution for $label:</b><br>Max: <b>$$maxDataValue</b><br>Q3: <b>$$Q3</b><br>Median: <b>$$median</b><br>Q1: <b>$$Q1</b><br>Min: <b>$$minDataValue</b>",
                    mediancolor: "#FFFFFF"
                },
                categories: [{
                    category: labels
                }],
                dataset: [{
                    data: values
                }]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "boxandwhisker2d",
                    renderAt: "boxplot-fcs-4",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#boxplot-fcs-4').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }
    }

    // bar
    {
        {
            let data = get_data('error_bar', 5);
            let cats = [];
            let vals = []
            for (let key of Object.keys(data)) {
                cats.push({label: key});
                vals.push({
                    value: data[key][0],
                    errorvalue: (data[key][2] - data[key][1]) / 2
                });
            }
            cats.sort(function (a, b) {
                return a.label - b.label;
            });

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite bar for 10 values",
                    theme: "fusion",
                    halferrorbar: "0",
                    plottooltext: "$label: <b>$dataValue</b> with error <b>$dataErrorvalue</b>"
                },
                categories: [{
                    category: cats
                }],
                dataset: [{
                    anchorbgcolor: "#1539e7",
                    data: vals
                }]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "errorbar2d",
                    renderAt: "bar-fcs-2",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#bar-fcs-2').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        {
            let data = get_data('error_bar', 20);
            let cats = [];
            let vals = []
            for (let key of Object.keys(data)) {
                cats.push({label: key});
                vals.push({
                    value: data[key][0],
                    errorvalue: (data[key][2] - data[key][1]) / 2
                });
            }
            cats.sort(function (a, b) {
                return a.label - b.label;
            });

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite bar for 20 values",
                    theme: "fusion",
                    halferrorbar: "0",
                    plottooltext: "$label: <b>$dataValue</b> with error <b>$dataErrorvalue</b>"
                },
                categories: [{
                    category: cats
                }],
                dataset: [{
                    anchorbgcolor: "#1539e7",
                    data: vals
                }]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "errorbar2d",
                    renderAt: "bar-fcs-3",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#bar-fcs-3').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        {
            let data = get_data('error_bar', 50);
            let cats = [];
            let vals = []
            for (let key of Object.keys(data)) {
                cats.push({label: key});
                vals.push({
                    value: data[key][0],
                    errorvalue: (data[key][2] - data[key][1]) / 2
                });
            }
            cats.sort(function (a, b) {
                return a.label - b.label;
            });

            begin = Date.now();
            const dataSource = {
                chart: {
                    caption: "Fusioncharts suite bar for 50 values",
                    theme: "fusion",
                    halferrorbar: "0",
                    plottooltext: "$label: <b>$dataValue</b> with error <b>$dataErrorvalue</b>"
                },
                categories: [{
                    category: cats
                }],
                dataset: [{
                    anchorbgcolor: "#1539e7",
                    data: vals
                }]
            };
            FusionCharts.ready(function () {
                new FusionCharts({
                    type: "errorbar2d",
                    renderAt: "bar-fcs-4",
                    width: "100%",
                    height: "100%",
                    dataFormat: "json",
                    dataSource
                }).render();
            });
            end = Date.now();
            $('#bar-fcs-4').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }
    }

    // parallel
})

$(window).on('load', function () {
    console.log(get_loading_time());
})
