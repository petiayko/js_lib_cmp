$(function () {
    alert('Библиотека не будет рассмотрена до конца, так как она не способна реализоваться boxplot.');
    let begin;
    let end;
    // hist

    // scatter
    {
        let data = get_data('scatter', 100);
        begin = Date.now();
        c3.generate({
            data: {
                xs: {
                    x2: 'x1',
                },
                columns: [
                    ['x1'].concat(data['x1']),
                    ['x2'].concat(data['x2']),
                ],
                type: 'scatter'
            },
            axis: {
                x: {
                    label: 'x1',
                    tick: {
                        rotate: -90,
                        fit: false
                    }
                },
                y: {
                    label: 'x2',
                }
            },
            bindto: '#scatter-c3js-2',
            size: {
                height: 700,
                width: 1700
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            },
            legend: {
                show: false
            },
            title: {
                text: 'C3js scatter for 100 dots'
            },
            zoom: {
                enable: true
            },
            tooltip: {
                show: true
            }
        });
        end = Date.now();
        $('#scatter-c3js-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 1000);
        begin = Date.now();
        c3.generate({
            data: {
                xs: {
                    x2: 'x1',
                },
                columns: [
                    ['x1'].concat(data['x1']),
                    ['x2'].concat(data['x2']),
                ],
                type: 'scatter'
            },
            axis: {
                x: {
                    label: 'x1',
                    tick: {
                        rotate: -90,
                        fit: false
                    }
                },
                y: {
                    label: 'x2',
                }
            },
            bindto: '#scatter-c3js-3',
            size: {
                height: 700,
                width: 1700
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            },
            legend: {
                show: false
            },
            title: {
                text: 'C3js scatter for 1000 dots'
            },
            zoom: {
                enable: true
            },
            tooltip: {
                show: true
            }
        });
        end = Date.now();
        $('#scatter-c3js-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 10000);
        begin = Date.now();
        c3.generate({
            data: {
                xs: {
                    x2: 'x1',
                },
                columns: [
                    ['x1'].concat(data['x1']),
                    ['x2'].concat(data['x2']),
                ],
                type: 'scatter'
            },
            axis: {
                x: {
                    label: 'x1',
                    tick: {
                        rotate: -90,
                        fit: false
                    }
                },
                y: {
                    label: 'x2',
                }
            },
            bindto: '#scatter-c3js-4',
            size: {
                height: 700,
                width: 1700
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            },
            legend: {
                show: false
            },
            title: {
                text: 'C3js scatter for 10000 dots'
            },
            zoom: {
                enable: true
            },
            tooltip: {
                show: true
            }
        });
        end = Date.now();
        $('#scatter-c3js-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
    }

    // scatter-wl
    {
        let data = get_data('scatter', 100);
        begin = Date.now();
        c3.generate({
            data: {
                xs: {
                    x2: 'x1',
                },
                columns: [
                    ['x1'].concat(data['x1']),
                    ['x2'].concat(data['x2']),
                ],
            },
            axis: {
                x: {
                    label: 'x1',
                    tick: {
                        rotate: -90,
                        fit: false
                    }
                },
                y: {
                    label: 'x2',
                }
            },
            bindto: '#scatter-wl-c3js-2',
            size: {
                height: 700,
                width: 1700
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            },
            legend: {
                show: false
            },
            title: {
                text: 'C3js scatter with lines for 100 dots'
            },
            zoom: {
                enable: true
            },
            tooltip: {
                show: true
            }
        });
        end = Date.now();
        $('#scatter-wl-c3js-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 1000);
        begin = Date.now();
        c3.generate({
            data: {
                xs: {
                    x2: 'x1',
                },
                columns: [
                    ['x1'].concat(data['x1']),
                    ['x2'].concat(data['x2']),
                ],
            },
            axis: {
                x: {
                    label: 'x1',
                    tick: {
                        rotate: -90,
                        fit: false
                    }
                },
                y: {
                    label: 'x2',
                }
            },
            bindto: '#scatter-wl-c3js-3',
            size: {
                height: 700,
                width: 1700
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            },
            legend: {
                show: false
            },
            title: {
                text: 'C3js scatter with lines for 1000 dots'
            },
            zoom: {
                enable: true
            },
            tooltip: {
                show: true
            }
        });
        end = Date.now();
        $('#scatter-wl-c3js-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 10000);
        begin = Date.now();
        c3.generate({
            data: {
                xs: {
                    x2: 'x1',
                },
                columns: [
                    ['x1'].concat(data['x1']),
                    ['x2'].concat(data['x2']),
                ],
            },
            axis: {
                x: {
                    label: 'x1',
                    tick: {
                        rotate: -90,
                        fit: false
                    }
                },
                y: {
                    label: 'x2',
                }
            },
            bindto: '#scatter-wl-c3js-4',
            size: {
                height: 700,
                width: 1700
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            },
            legend: {
                show: false
            },
            title: {
                text: 'C3js scatter with lines for 10000 dots'
            },
            zoom: {
                enable: true
            },
            tooltip: {
                show: true
            }
        });
        end = Date.now();
        $('#scatter-wl-c3js-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
    }

    // boxplot

    // bar

    // parallel
})
