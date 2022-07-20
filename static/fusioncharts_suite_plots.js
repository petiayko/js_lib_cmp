$(function () {
    let begin;
    let end;
    // hist

    // scatter
    {
        {
            let data = get_data('scatter', 100);
            let data_filter = [];
            for (let i in data.x1) {
                data_filter.push({x: data.x1[i], y: data.x2[i]});
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
                        data: data_filter
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
            let data_filter = [];
            for (let i in data.x1) {
                data_filter.push({x: data.x1[i], y: data.x2[i]});
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
                        data: data_filter
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
            let data_filter = [];
            for (let i in data.x1) {
                data_filter.push({x: data.x1[i], y: data.x2[i]});
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
                        data: data_filter
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

    // boxplot

    // bar

    // parallel
})
