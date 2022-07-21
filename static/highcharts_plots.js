$(function () {
    let begin;
    let end;

    // hist
    {
        let data = get_data('hist', 100);
        begin = Date.now();
        Highcharts.chart('hist-highcharts-2', {
            title: {
                text: 'Highcharts hist for 100 values'
            },

            chart: {
                zoomType: 'xy'
            },

            xAxis: {
                title: {text: 'values'},
                alignTicks: false,
            },

            legend: {
                enabled: false
            },

            yAxis: {
                title: {text: 'samples'}
            },

            plotOptions: {
                histogram: {
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
                        }
                    }
                }
            },

            series: [{
                name: 'Histogram',
                type: 'histogram',
                baseSeries: 's1',
                zIndex: -1
            }, {
                visible: false,
                name: 'Data',
                type: 'scatter',
                data: data,
                id: 's1',
                marker: {
                    radius: 0
                }
            }]
        });
        end = Date.now();
        $('#hist-highcharts-2').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');
        data = get_data('hist', 1000);
        begin = Date.now();
        Highcharts.chart('hist-highcharts-3', {
            title: {
                text: 'Highcharts hist for 1000 values'
            },

            chart: {
                zoomType: 'xy'
            },

            xAxis: {
                title: {text: 'values'},
                alignTicks: false,
            },

            legend: {
                enabled: false
            },

            yAxis: {
                title: {text: 'samples'}
            },

            plotOptions: {
                histogram: {
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
                        }
                    }
                }
            },

            series: [{
                name: 'Histogram',
                type: 'histogram',
                baseSeries: 's1',
                zIndex: -1
            }, {
                visible: false,
                name: 'Data',
                type: 'scatter',
                data: data,
                id: 's1',
                marker: {
                    radius: 0
                }
            }]
        });
        end = Date.now();
        $('#hist-highcharts-3').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('hist', 10000);
        begin = Date.now();
        Highcharts.chart('hist-highcharts-4', {
            title: {
                text: 'Highcharts hist for 10000 values'
            },

            chart: {
                zoomType: 'xy'
            },

            xAxis: {
                title: {text: 'values'},
                alignTicks: false,
            },

            legend: {
                enabled: false
            },

            yAxis: {
                title: {text: 'samples'}
            },

            plotOptions: {
                histogram: {
                    accessibility: {
                        point: {
                            valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
                        }
                    }
                }
            },

            series: [{
                name: 'Histogram',
                type: 'histogram',
                baseSeries: 's1',
                zIndex: -1
            }, {
                visible: false,
                name: 'Data',
                type: 'scatter',
                data: data,
                id: 's1',
                marker: {
                    radius: 0
                }
            }]
        });
        end = Date.now();
        $('#hist-highcharts-4').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');
    }

    // scatter
    {
        let data = get_data('scatter', 100);
        let data_format = [];
        for (let i in data.x1) {
            data_format.push([data.x1[i], data.x2[i]]);
        }
        begin = Date.now();
        Highcharts.chart('scatter-highcharts-2', {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Highcharts scatter for 100 dots'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'x1'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'x2'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.x} x1, {point.y} x2'
                    }
                }
            },
            series: [{
                data: data_format
            }]
        });
        end = Date.now();
        $('#scatter-highcharts-2').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 1000);
        data_format = [];
        for (let i in data.x1) {
            data_format.push([data.x1[i], data.x2[i]]);
        }
        begin = Date.now();
        Highcharts.chart('scatter-highcharts-3', {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Highcharts scatter for 1000 dots'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'x1'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'x2'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.x} x1, {point.y} x2'
                    }
                }
            },
            series: [{
                data: data_format
            }]
        });
        end = Date.now();
        $('#scatter-highcharts-3').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 10000);
        data_format = [];
        for (let i in data.x1) {
            data_format.push([data.x1[i], data.x2[i]]);
        }
        begin = Date.now();
        Highcharts.chart('scatter-highcharts-4', {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Highcharts scatter for 10000 dots'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'x1'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'x2'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.x} x1, {point.y} x2'
                    }
                }
            },
            series: [{
                data: data_format
            }]
        });
        end = Date.now();
        $('#scatter-highcharts-4').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');
    }

    // scatter-wl
    {
        let data = get_data('scatter', 10000);
        begin = Date.now();
        Highcharts.chart('scatter-wl-highcharts-2', {
            chart: {
                type: 'line',
                zoomType: 'xy',
            },
            title: {
                text: 'Highcharts scatter with line for 100 dots'
            },
            xAxis: {
                categories: data['x2'],
                title: {
                    text: 'axis x'
                }
            },
            yAxis: {
                title: {
                    text: 'axis y'
                }
            },
            legend: {
                enabled: false,
            },
            series: [{
                data: data['x1']
            }]
        });
        end = Date.now();
        $('#scatter-wl-highcharts-2').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 1000);
        begin = Date.now();
        Highcharts.chart('scatter-wl-highcharts-3', {
            chart: {
                type: 'line',
                zoomType: 'xy',
            },
            title: {
                text: 'Highcharts scatter with line for 1000 dots'
            },
            xAxis: {
                categories: data['x2'],
                title: {
                    text: 'axis x'
                }
            },
            yAxis: {
                title: {
                    text: 'axis y'
                }
            },
            legend: {
                enabled: false,
            },
            series: [{
                data: data['x1']
            }]
        });
        end = Date.now();
        $('#scatter-wl-highcharts-3').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 10000);
        begin = Date.now();
        Highcharts.chart('scatter-wl-highcharts-4', {
            chart: {
                type: 'line',
                zoomType: 'xy',
            },
            title: {
                text: 'Highcharts scatter with line for 10000 dots'
            },
            xAxis: {
                categories: data['x2'],
                title: {
                    text: 'axis x'
                }
            },
            yAxis: {
                title: {
                    text: 'axis y'
                }
            },
            legend: {
                enabled: false,
            },
            series: [{
                data: data['x1']
            }]
        });
        end = Date.now();
        $('#scatter-wl-highcharts-4').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');
    }

    // boxplot
    {
        let data = get_data('boxplot', 100);
        let keys = [];
        let data_format = [];
        for (let i in data) {
            keys.push(i);
            data_format.push(data[i]);
        }
        begin = Date.now();
        Highcharts.chart('boxplot-highcharts-2', {
            chart: {
                type: 'boxplot'
            },

            title: {
                text: 'Highcharts boxplot fot 100 values'
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: keys,
            },

            yAxis: {},

            series: [{
                name: 'Observations',
                data: data_format,
                tooltip: {
                    headerFormat: '<em>Experiment No {point.key}</em><br/>'
                }
            }]
        });
        end = Date.now();
        $('#boxplot-highcharts-2').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('boxplot', 1000);
        keys = [];
        data_format = [];
        for (let i in data) {
            keys.push(i);
            data_format.push(data[i]);
        }
        begin = Date.now();
        Highcharts.chart('boxplot-highcharts-3', {
            chart: {
                type: 'boxplot'
            },

            title: {
                text: 'Highcharts boxplot fot 1000 values'
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: keys,
            },

            yAxis: {},

            series: [{
                name: 'Observations',
                data: data_format,
                tooltip: {
                    headerFormat: '<em>Experiment No {point.key}</em><br/>'
                }
            }]
        });
        end = Date.now();
        $('#boxplot-highcharts-3').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('boxplot', 10000);
        keys = [];
        data_format = [];
        for (let i in data) {
            keys.push(i);
            data_format.push(data[i]);
        }
        begin = Date.now();
        Highcharts.chart('boxplot-highcharts-4', {
            chart: {
                type: 'boxplot'
            },

            title: {
                text: 'Highcharts boxplot fot 10000 values'
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: keys,
            },

            yAxis: {},

            series: [{
                name: 'Observations',
                data: data_format,
                tooltip: {
                    headerFormat: '<em>Experiment No {point.key}</em><br/>'
                }
            }]
        });
        end = Date.now();
        $('#boxplot-highcharts-4').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');
    }

    // bar
    {
        let data = get_data('error_bar', 5);
        let vals = [];
        let borders = [];
        for (let i in data) {
            vals.push(data[i][0]);
            borders.push([data[i][1], data[i][2]]);
        }
        begin = Date.now();
        Highcharts.chart('bar-highcharts-2', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Highcharts bar for 5 cols'
            },
            xAxis: [{
                categories: Object.keys(data),
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    style: {}
                },
            }, { // Secondary yAxis
                labels: {
                    style: {}
                },
            }],
            tooltip: {
                shared: true
            },

            legend: {
                enabled: false,
            },
            series: [{
                type: 'column',
                yAxis: 1,
                data: vals,
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
                }
            }, {
                type: 'errorbar',
                yAxis: 1,
                data: borders,
                tooltip: {
                    pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
                }
            }, {
                visible: false,
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
                }
            }]
        });
        end = Date.now();
        $('#bar-highcharts-2').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('error_bar', 20);
        vals = [];
        borders = [];
        for (let i in data) {
            vals.push(data[i][0]);
            borders.push([data[i][1], data[i][2]]);
        }
        begin = Date.now();
        Highcharts.chart('bar-highcharts-3', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Highcharts bar for 20 cols'
            },
            xAxis: [{
                categories: Object.keys(data),
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    style: {}
                },
            }, { // Secondary yAxis
                labels: {
                    style: {}
                },
            }],
            tooltip: {
                shared: true
            },

            legend: {
                enabled: false,
            },
            series: [{
                type: 'column',
                yAxis: 1,
                data: vals,
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
                }
            }, {
                type: 'errorbar',
                yAxis: 1,
                data: borders,
                tooltip: {
                    pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
                }
            }, {
                visible: false,
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
                }
            }]
        });
        end = Date.now();
        $('#bar-highcharts-3').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('error_bar', 50);
        vals = [];
        borders = [];
        for (let i in data) {
            vals.push(data[i][0]);
            borders.push([data[i][1], data[i][2]]);
        }
        begin = Date.now();
        Highcharts.chart('bar-highcharts-4', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Highcharts bar for 50 cols'
            },
            xAxis: [{
                categories: Object.keys(data),
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    style: {}
                },
            }, { // Secondary yAxis
                labels: {
                    style: {}
                },
            }],
            tooltip: {
                shared: true
            },

            legend: {
                enabled: false,
            },
            series: [{
                type: 'column',
                yAxis: 1,
                data: vals,
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
                }
            }, {
                type: 'errorbar',
                yAxis: 1,
                data: borders,
                tooltip: {
                    pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
                }
            }, {
                visible: false,
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
                }
            }]
        });
        end = Date.now();
        $('#bar-highcharts-4').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');
    }

    // parallel
    {
        let data = get_data('parallel', 10);
        let data_format = [];
        for (let i in data.x1) {
            data_format.push([data.x1[i], data.x2[i]]);
        }
        begin = Date.now();
        Highcharts.chart('parallel-highcharts-2', {
            chart: {
                type: 'spline',
                parallelCoordinates: true,
                parallelAxes: {
                    lineWidth: 2
                }
            },
            title: {
                text: 'Highcharts parallel for 10 pairs'
            },
            plotOptions: {
                series: {
                    accessibility: {
                        enabled: false
                    },
                    lineWidth: 2,
                    animation: false,
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    states: {
                        hover: {
                            halo: {
                                size: 0
                            }
                        }
                    },
                    events: {
                        mouseOver: function () {
                            this.group.toFront();
                        }
                    }
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                    '{series.name}: <b>{point.formattedValue}</b><br/>'
            },
            xAxis: {
                categories: [
                    'first axis',
                    'second axis',
                ],
                offset: 10
            },
            colors: ['rgb(51,77,232)'],
            series: data_format.map(function (set, i) {
                return {
                    name: i,
                    data: set,
                    shadow: false
                };
            })
        });
        end = Date.now();
        $('#parallel-highcharts-2').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('parallel', 50);
        data_format = [];
        for (let i in data.x1) {
            data_format.push([data.x1[i], data.x2[i]]);
        }
        begin = Date.now();
        Highcharts.chart('parallel-highcharts-3', {
            chart: {
                type: 'spline',
                parallelCoordinates: true,
                parallelAxes: {
                    lineWidth: 2
                }
            },
            title: {
                text: 'Highcharts parallel for 50 pairs'
            },
            plotOptions: {
                series: {
                    accessibility: {
                        enabled: false
                    },
                    lineWidth: 2,
                    animation: false,
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    states: {
                        hover: {
                            halo: {
                                size: 0
                            }
                        }
                    },
                    events: {
                        mouseOver: function () {
                            this.group.toFront();
                        }
                    }
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                    '{series.name}: <b>{point.formattedValue}</b><br/>'
            },
            xAxis: {
                categories: [
                    'first axis',
                    'second axis',
                ],
                offset: 10
            },
            colors: ['rgb(51,77,232)'],
            series: data_format.map(function (set, i) {
                return {
                    name: i,
                    data: set,
                    shadow: false
                };
            })
        });
        end = Date.now();
        $('#parallel-highcharts-3').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');

        data = get_data('parallel', 100);
        data_format = [];
        for (let i in data.x1) {
            data_format.push([data.x1[i], data.x2[i]]);
        }
        begin = Date.now();
        Highcharts.chart('parallel-highcharts-4', {
            chart: {
                type: 'spline',
                parallelCoordinates: true,
                parallelAxes: {
                    lineWidth: 2
                }
            },
            title: {
                text: 'Highcharts parallel for 100 pairs'
            },
            plotOptions: {
                series: {
                    accessibility: {
                        enabled: false
                    },
                    lineWidth: 2,
                    animation: false,
                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    states: {
                        hover: {
                            halo: {
                                size: 0
                            }
                        }
                    },
                    events: {
                        mouseOver: function () {
                            this.group.toFront();
                        }
                    }
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{point.color}">\u25CF</span>' +
                    '{series.name}: <b>{point.formattedValue}</b><br/>'
            },
            xAxis: {
                categories: [
                    'first axis',
                    'second axis',
                ],
                offset: 10
            },
            colors: ['rgb(51,77,232)'],
            series: data_format.map(function (set, i) {
                return {
                    name: i,
                    data: set,
                    shadow: false
                };
            })
        });
        end = Date.now();
        $('#parallel-highcharts-4').after('<p style="text-align: center;">' + (end - begin) + ' ms</p>');
    }
})

$(window).on('load', function () {
    console.log(get_loading_time());
})
