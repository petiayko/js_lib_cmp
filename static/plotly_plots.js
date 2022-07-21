$(function () {
        let begin;
        let end;
        // hist
        {
            {
                let layout = {
                    title: 'Plotly hist for 100 values',
                    height: 700,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            },
                            text: 'values'
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            },
                            text: 'samples'
                        }
                    },
                    autosize: true,
                };
                let data = get_data('hist', 100);
                let steps = [];
                for (let s = 1; s < 1001; s += 10) {
                    steps.push({
                        label: s,
                        value: s,
                        method: 'restyle',
                        args: ['nbinsx', s]
                    })
                }
                layout['sliders'] = [{
                    active: 2,
                    pad: {
                        t: 60
                    },
                    currentvalue: {
                        prefix: 'число бинов: ',
                        font: {
                            color: '#888',
                            size: 10
                        }
                    },
                    steps: steps
                }];
                let plot = [
                    {
                        x: data,
                        type: 'histogram',
                        opacity: 0.5,
                        nbinx: 21,
                    }
                ];
                begin = Date.now();
                Plotly.newPlot('hist-plotly-2', plot, layout, {responsive: true});
                end = Date.now();
                $('#hist-plotly-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }

            {
                let layout = {
                    title: 'Plotly hist for 1000 values',
                    height: 700,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            },
                            text: 'values'
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            },
                            text: 'samples'
                        }
                    },
                    autosize: true,
                };
                let data = get_data('hist', 1000);
                let steps = [];
                for (let s = 1; s < 1001; s += 10) {
                    steps.push({
                        label: s,
                        value: s,
                        method: 'restyle',
                        args: ['nbinsx', s]
                    })
                }
                layout['sliders'] = [{
                    active: 2,
                    pad: {
                        t: 60
                    },
                    currentvalue: {
                        prefix: 'число бинов: ',
                        font: {
                            color: '#888',
                            size: 10
                        }
                    },
                    steps: steps
                }];
                let plot = [
                    {
                        x: data,
                        type: 'histogram',
                        opacity: 0.5,
                        nbinx: 21,
                    }
                ];
                begin = Date.now();
                Plotly.newPlot('hist-plotly-3', plot, layout, {responsive: true});
                end = Date.now();
                $('#hist-plotly-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }

            {
                let layout = {
                    title: 'Plotly hist for 10000 values',
                    height: 700,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            },
                            text: 'values'
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            },
                            text: 'samples'
                        }
                    },
                    autosize: true,
                };
                let data = get_data('hist', 10000);
                let steps = [];
                for (let s = 1; s < 1001; s += 10) {
                    steps.push({
                        label: s,
                        value: s,
                        method: 'restyle',
                        args: ['nbinsx', s]
                    })
                }
                layout['sliders'] = [{
                    active: 2,
                    pad: {
                        t: 60
                    },
                    currentvalue: {
                        prefix: 'число бинов: ',
                        font: {
                            color: '#888',
                            size: 10
                        }
                    },
                    steps: steps
                }];
                let plot = [
                    {
                        x: data,
                        type: 'histogram',
                        opacity: 0.5,
                        nbinx: 21,
                    }
                ];
                begin = Date.now();
                Plotly.newPlot('hist-plotly-4', plot, layout, {responsive: true});
                end = Date.now();
                $('#hist-plotly-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }
        }

        // scatter
        {
            let layout = {
                title: 'Plotly scatter for 100 dots',
                height: 700,
                xaxis: {
                    title: {
                        font: {
                            size: 12,
                            color: '#7f7f7f'
                        },
                        text: 'axis x'
                    }
                },
                yaxis: {
                    title: {
                        font: {
                            size: 12,
                            color: '#7f7f7f'
                        },
                        text: 'axis y'
                    }
                },
                autosize: true,
            };
            let data = get_data('scatter', 100);
            let plot = [
                {
                    type: 'scatter',
                    mode: 'markers',
                    x: data['x1'],
                    y: data['x2'],
                }
            ];
            begin = Date.now();
            Plotly.newPlot('scatter-plotly-2', plot, layout, {responsive: true});
            end = Date.now();
            $('#scatter-plotly-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 1000);
            layout.title = 'Plotly scatter for 1000 dots'
            plot[0].x = data['x1'];
            plot[0].y = data['x2'];
            begin = Date.now();
            Plotly.newPlot('scatter-plotly-3', plot, layout, {responsive: true});
            end = Date.now();
            $('#scatter-plotly-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 10000);
            layout.title = 'Plotly scatter for 10000 dots'
            plot[0].x = data['x1'];
            plot[0].y = data['x2'];
            begin = Date.now();
            Plotly.newPlot('scatter-plotly-4', plot, layout, {responsive: true});
            end = Date.now();
            $('#scatter-plotly-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        // scatter-wl
        {
            let layout = {
                title: 'Plotly scatter for 100 dots',
                height: 700,
                xaxis: {
                    title: {
                        font: {
                            size: 12,
                            color: '#7f7f7f'
                        },
                        text: 'axis x'
                    }
                },
                yaxis: {
                    title: {
                        font: {
                            size: 12,
                            color: '#7f7f7f'
                        },
                        text: 'axis y'
                    }
                },
                autosize: true,
            };

            let data = get_data('scatter', 100);
            let plot = [
                {
                    type: 'scatter',
                    x: data['x1'],
                    y: data['x2'],
                }
            ];
            begin = Date.now();
            Plotly.newPlot('scatter-wl-plotly-2', plot, layout, {responsive: true});
            end = Date.now();
            $('#scatter-wl-plotly-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 1000);
            layout.title = 'Plotly scatter with lines for 1000 dots'
            plot[0].x = data['x1'];
            plot[0].y = data['x2'];
            begin = Date.now();
            Plotly.newPlot('scatter-wl-plotly-3', plot, layout, {responsive: true});
            end = Date.now();
            $('#scatter-wl-plotly-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 10000);
            layout.title = 'Plotly scatter with lines for 10000 dots'
            plot[0].x = data['x1'];
            plot[0].y = data['x2'];
            begin = Date.now();
            Plotly.newPlot('scatter-wl-plotly-4', plot, layout, {responsive: true});
            end = Date.now();
            $('#scatter-wl-plotly-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        // boxplot
        {
            {
                let layout = {
                    title: 'Plotly boxplot for 100 values',
                    height: 700,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    autosize: true,
                };
                let data = get_data('boxplot', 100);
                let plot = [];
                for (let i in data) {
                    plot.push({
                        type: 'box',
                        name: i,
                        y: Object.values(data[i]),
                        showlegend: false
                    });
                }
                begin = Date.now();
                Plotly.newPlot('boxplot-plotly-2', plot, layout, {responsive: true});
                end = Date.now();
                $('#boxplot-plotly-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }

            {
                let layout = {
                    title: 'Plotly boxplot for 1000 values',
                    height: 700,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    autosize: true,
                };
                let data = get_data('boxplot', 1000);
                let plot = [];
                for (let i in data) {
                    plot.push({
                        type: 'box',
                        name: i,
                        y: Object.values(data[i]),
                        showlegend: false
                    });
                }
                begin = Date.now();
                Plotly.newPlot('boxplot-plotly-3', plot, layout, {responsive: true});
                end = Date.now();
                $('#boxplot-plotly-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }

            {
                let layout = {
                    title: 'Plotly boxplot for 10000 values',
                    height: 700,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    autosize: true,
                };
                let data = get_data('boxplot', 10000);
                let plot = [];
                for (let i in data) {
                    plot.push({
                        type: 'box',
                        name: i,
                        y: Object.values(data[i]),
                        showlegend: false
                    });
                }
                begin = Date.now();
                Plotly.newPlot('boxplot-plotly-4', plot, layout, {responsive: true});
                end = Date.now();
                $('#boxplot-plotly-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }
        }

        // bar
        {
            {
                let layout = {
                    title: 'Plotly bar for 10 values',
                    height: 700,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    autosize: true,
                };
                let data = get_data('error_bar', 10);
                let plot = [];
                for (let i in data) {
                    plot.push({
                        x: [i],
                        y: [Object.values(data[i])[0]],
                        name: i,
                        marker: {color: 'rgb(135, 206, 250)'},
                        error_y: {
                            type: 'data',
                            array: [(Object.values(data[i])[2] - Object.values(data[i])[1]) / 2],
                            visible: true
                        },
                        type: 'bar',
                        showlegend: false

                    });
                }
                begin = Date.now();
                Plotly.newPlot('bar-plotly-2', plot, layout, {responsive: true});
                end = Date.now();
                $('#bar-plotly-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }

            {
                let layout = {
                    title: 'Plotly bar for 20 values',
                    height: 700,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    autosize: true,
                };
                let data = get_data('error_bar', 20);
                let plot = [];
                for (let i in data) {
                    plot.push({
                        x: [i],
                        y: [Object.values(data[i])[0]],
                        name: i,
                        marker: {color: 'rgb(135, 206, 250)'},
                        error_y: {
                            type: 'data',
                            array: [(Object.values(data[i])[2] - Object.values(data[i])[1]) / 2],
                            visible: true
                        },
                        type: 'bar',
                        showlegend: false

                    });
                }
                begin = Date.now();
                Plotly.newPlot('bar-plotly-3', plot, layout, {responsive: true});
                end = Date.now();
                $('#bar-plotly-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }

            {
                let layout = {
                    title: 'Plotly bar for 50 values',
                    height: 700,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    autosize: true,
                };
                let data = get_data('error_bar', 50);
                let plot = [];
                for (let i in data) {
                    plot.push({
                        x: [i],
                        y: [Object.values(data[i])[0]],
                        name: i,
                        marker: {color: 'rgb(135, 206, 250)'},
                        error_y: {
                            type: 'data',
                            array: [(Object.values(data[i])[2] - Object.values(data[i])[1]) / 2],
                            visible: true
                        },
                        type: 'bar',
                        showlegend: false

                    });
                }
                begin = Date.now();
                Plotly.newPlot('bar-plotly-4', plot, layout, {responsive: true});
                end = Date.now();
                $('#bar-plotly-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }
        }

        // parallel
        {
            {
                let layout = {
                    title: 'Plotly parallel for 10 pairs',
                    height: 900,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    autosize: true,
                };
                let data = get_data('parallel', 10);
                let plot = [
                    {
                        type: 'parcats',
                        dimensions: [
                            {
                                label: 'first axis',
                                values: data['x1']
                            },
                            {
                                label: 'second axis',
                                values: data['x2']
                            }
                        ],
                    }
                ];
                begin = Date.now();
                Plotly.newPlot('parallel-plotly-2', plot, layout, {responsive: true});
                end = Date.now();
                $('#parallel-plotly-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }

            {
                let layout = {
                    title: 'Plotly parallel for 50 pairs',
                    height: 900,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    autosize: true,
                };
                let data = get_data('parallel', 50);
                let plot = [
                    {
                        type: 'parcats',
                        dimensions: [
                            {
                                label: 'first axis',
                                values: data['x1']
                            },
                            {
                                label: 'second axis',
                                values: data['x2']
                            }
                        ],
                    }
                ];
                begin = Date.now();
                Plotly.newPlot('parallel-plotly-3', plot, layout, {responsive: true});
                end = Date.now();
                $('#parallel-plotly-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }

            {
                let layout = {
                    title: 'Plotly parallel for 100 pairs',
                    height: 900,
                    xaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    yaxis: {
                        title: {
                            font: {
                                size: 12,
                                color: '#7f7f7f'
                            }
                        }
                    },
                    autosize: true,
                };
                let data = get_data('parallel', 100);
                let plot = [
                    {
                        type: 'parcats',
                        dimensions: [
                            {
                                label: 'first axis',
                                values: data['x1']
                            },
                            {
                                label: 'second axis',
                                values: data['x2']
                            }
                        ],
                    }
                ];
                begin = Date.now();
                Plotly.newPlot('parallel-plotly-4', plot, layout, {responsive: true});
                end = Date.now();
                $('#parallel-plotly-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
            }
        }
    }
)

$(window).on('load', function () {
    console.log(get_loading_time());
})
