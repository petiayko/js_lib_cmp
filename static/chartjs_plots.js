$(function () {
        let begin;
        let end;
        // hist

        // scatter
        {
            let data = get_data('scatter', 100);
            let data_format = [];
            for (let i in data['x1']) {
                data_format.push([data['x1'][i], data['x2'][i]]);
            }
            begin = Date.now();
            new Chart($('#scatter-chartjs-2'), {
                type: 'scatter',
                data: {
                    datasets: [{
                        data: data_format,
                        backgroundColor: 'rgb(51,77,232)'
                    }]
                },
                options: {
                    responsive: true,
                    animation: false,
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'axis x'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'axis y'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'Chart.js scatter for 100 dots'
                        },
                        zoom: {
                            zoom: {
                                wheel: {
                                    enabled: true,
                                },
                                pinch: {
                                    enabled: true
                                },
                                mode: 'xy',
                            }
                        }
                    }
                },
            });
            end = Date.now();
            $('#scatter-chartjs-2').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 1000);
            data_format = [];
            for (let i in data['x1']) {
                data_format.push([data['x1'][i], data['x2'][i]]);
            }
            begin = Date.now();
            new Chart($('#scatter-chartjs-3'), {
                type: 'scatter',
                data: {
                    datasets: [{
                        data: data_format,
                        backgroundColor: '#334de8'
                    }]
                },
                options: {
                    responsive: true,
                    animation: false,
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'axis x'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'axis y'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'Chart.js scatter for 1000 dots'
                        },
                        zoom: {
                            zoom: {
                                wheel: {
                                    enabled: true,
                                },
                                pinch: {
                                    enabled: true
                                },
                                mode: 'xy',
                            }
                        }
                    }
                },
            });
            end = Date.now();
            $('#scatter-chartjs-3').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 10000);
            data_format = [];
            for (let i in data['x1']) {
                data_format.push([data['x1'][i], data['x2'][i]]);
            }
            begin = Date.now();
            new Chart($('#scatter-chartjs-4'), {
                type: 'scatter',
                data: {
                    datasets: [{
                        data: data_format,
                        backgroundColor: 'rgb(51,77,232)'
                    }]
                },
                options: {
                    responsive: true,
                    animation: false,
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'axis x'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'axis y'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'Chart.js scatter for 10000 dots'
                        },
                        zoom: {
                            zoom: {
                                wheel: {
                                    enabled: true,
                                },
                                pinch: {
                                    enabled: true
                                },
                                mode: 'xy',
                            }
                        }
                    }
                },
            });
            end = Date.now();
            $('#scatter-chartjs-4').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        // scatter-wl
        {
            let data = get_data('scatter', 100);
            let data_format = [];
            for (let i in data['x1']) {
                data_format.push([data['x1'][i], data['x2'][i]]);
            }
            begin = Date.now();
            new Chart($('#scatter-wl-chartjs-2'), {
                type: 'scatter',
                data: {
                    datasets: [{
                        data: data_format,
                        backgroundColor: 'rgb(51,77,232)',
                        showLine: true,
                        borderColor: '#1c2b83',
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    animation: false,
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'axis x'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'axis y'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'Chart.js scatter with lines for 100 dots'
                        },
                        zoom: {
                            zoom: {
                                wheel: {
                                    enabled: true,
                                },
                                pinch: {
                                    enabled: true
                                },
                                mode: 'xy',
                            }
                        }
                    }
                },
            });
            end = Date.now();
            $('#scatter-wl-chartjs-2').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 1000);
            data_format = [];
            for (let i in data['x1']) {
                data_format.push([data['x1'][i], data['x2'][i]]);
            }
            begin = Date.now();
            new Chart($('#scatter-wl-chartjs-3'), {
                type: 'scatter',
                data: {
                    datasets: [{
                        data: data_format,
                        backgroundColor: '#334de8',
                        showLine: true,
                        borderColor: '#1c2b83',
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    animation: false,
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'axis x'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'axis y'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'Chart.js scatter with lines for 1000 dots'
                        },
                        zoom: {
                            zoom: {
                                wheel: {
                                    enabled: true,
                                },
                                pinch: {
                                    enabled: true
                                },
                                mode: 'xy',
                            }
                        }
                    }
                },
            });
            end = Date.now();
            $('#scatter-wl-chartjs-3').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 10000);
            data_format = [];
            for (let i in data['x1']) {
                data_format.push([data['x1'][i], data['x2'][i]]);
            }
            begin = Date.now();
            new Chart($('#scatter-wl-chartjs-4'), {
                type: 'scatter',
                data: {
                    datasets: [{
                        data: data_format,
                        backgroundColor: 'rgb(51,77,232)',
                        showLine: true,
                        borderColor: '#1c2b83',
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    animation: false,
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            title: {
                                display: true,
                                text: 'axis x'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'axis y'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'Chart.js scatter with lines for 10000 dots'
                        },
                        zoom: {
                            zoom: {
                                wheel: {
                                    enabled: true,
                                },
                                pinch: {
                                    enabled: true
                                },
                                mode: 'xy',
                            }
                        }
                    }
                },
            });
            end = Date.now();
            $('#scatter-wl-chartjs-4').after('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        // boxplot

        // bar

        // parallel
    }
)
