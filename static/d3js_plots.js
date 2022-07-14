$(function () {
        let begin;
        let end;
        // hist
        {
            let data = get_data('hist', 100);
            begin = Date.now();
            draw_d3_hist('#hist-d3js-2', data, {
                title: 'D3js hist for 100 values',
                xaxis: 'values',
                yaxis: 'samples'
            });
            end = Date.now();
            $('#hist-d3js-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('hist', 1000);
            begin = Date.now();
            draw_d3_hist('#hist-d3js-3', data, {
                title: 'D3js hist for 1000 values',
                xaxis: 'values',
                yaxis: 'samples'
            });
            end = Date.now();
            $('#hist-d3js-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('hist', 10000);
            begin = Date.now();
            draw_d3_hist('#hist-d3js-4', data, {
                title: 'D3js hist for 10000 values',
                xaxis: 'values',
                yaxis: 'samples'
            });
            end = Date.now();
            $('#hist-d3js-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        // scatter
        {
            let data = get_data('scatter', 100);
            begin = Date.now();
            draw_d3_scatter('#scatter-d3js-2', data, {
                title: 'D3js scatter for 100 values',
                xaxis: 'axis x',
                yaxis: 'axis y'
            })
            end = Date.now();
            $('#scatter-d3js-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 1000);
            begin = Date.now();
            draw_d3_scatter('#scatter-d3js-3', data, {
                title: 'D3js scatter for 1000 values',
                xaxis: 'axis x',
                yaxis: 'axis y'
            })
            end = Date.now();
            $('#scatter-d3js-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 10000);
            begin = Date.now();
            draw_d3_scatter('#scatter-d3js-4', data, {
                title: 'D3js scatter for 10000 values',
                xaxis: 'axis x',
                yaxis: 'axis y'
            })
            end = Date.now();
            $('#scatter-d3js-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        // scatter-wl
        {
            let data = get_data('scatter', 100);
            begin = Date.now();
            draw_d3_scatter_with_lines('#scatter-wl-d3js-2', data, {
                title: 'D3js scatter with lines for 100 values',
                xaxis: 'axis x',
                yaxis: 'axis y'
            })
            end = Date.now();
            $('#scatter-wl-d3js-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 1000);
            begin = Date.now();
            draw_d3_scatter_with_lines('#scatter-wl-d3js-3', data, {
                title: 'D3js scatter with lines for 1000 values',
                xaxis: 'axis x',
                yaxis: 'axis y'
            })
            end = Date.now();
            $('#scatter-wl-d3js-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('scatter', 10000);
            begin = Date.now();
            draw_d3_scatter_with_lines('#scatter-wl-d3js-4', data, {
                title: 'D3js scatter with lines for 10000 values',
                xaxis: 'axis x',
                yaxis: 'axis y'
            })
            end = Date.now();
            $('#scatter-wl-d3js-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        // boxplot
        {
            let data = get_data('boxplot', 100);
            begin = Date.now();
            // draw_d3_boxplot('#boxplot-d3js-2', data, {
            //     title: 'D3js scatter with lines for 100 values',
            //     xaxis: 'axis x',
            //     yaxis: 'axis y'
            // })
            end = Date.now();
            $('#boxplot-d3js-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }

        // bar

        // parallel
        {
            let data = get_data('parallel', 10);
            begin = Date.now();
            draw_d3_parallel('#parallel-d3js-2', data, {
                title: 'D3js parallel for 10 values',
                one_axis: 'first axis',
                two_axis: 'second axis'
            });
            end = Date.now();
            $('#parallel-d3js-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('parallel', 50);
            begin = Date.now();
            draw_d3_parallel('#parallel-d3js-3', data, {
                title: 'D3js parallel for 50 values',
                one_axis: 'first axis',
                two_axis: 'second axis'
            });
            end = Date.now();
            $('#parallel-d3js-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

            data = get_data('parallel', 100);
            begin = Date.now();
            draw_d3_parallel('#parallel-d3js-4', data, {
                title: 'D3js parallel for 100 values',
                one_axis: 'first axis',
                two_axis: 'second axis'
            });
            end = Date.now();
            $('#parallel-d3js-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
        }
    }
)

function draw_d3_hist(id, data, layout) {
    const margin = {top: 20, right: 30, bottom: 40, left: 60};
    const width = 1700 - margin.left - margin.right;
    const height = 700 - margin.top - margin.bottom;

    const svg = d3.select(id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // X axis: scale and draw:
    const x = d3.scaleLinear()
        .domain([d3.min(data, function (d) {
            return +d
        }), d3.max(data, function (d) {
            return +d
        })])
        .range([0, width]);

    // label for x axis
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 20)
        .text(layout.xaxis);

    // label for y axis
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 10)
        .attr("x", -margin.top - 200)
        .text(layout.yaxis);

    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x));

    // hist title
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2)
        .text(layout.title);

    // Y axis: scale and draw:
    const y = d3.scaleLinear()
        .range([height, 0])

    let yAxis = svg.append('g')

    // set the parameters for the histogram
    function make_by_bins(nbins) {
        const histogram = d3.histogram()
            .value(function (d) {
                return d;
            })   // I need to give the vector of value
            .domain(x.domain())  // then the domain of the graphic
            .thresholds(x.ticks(nbins)); // then the numbers of bins

        // And apply this function to data to get the bins
        const bins = histogram(data);

        y.domain([0, d3.max(bins, function (d) {
            return d.length;
        })]);   // d3.hist has to be called before the Y axis obviously

        yAxis.call(d3.axisLeft(y)).attr('class', 'yAxis');

        // tooltips
        const tooltip = d3.select(id)
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "black")
            .style("color", "white")
            .style("border-radius", "5px")
            .style("padding", "10px");

        // A function that change this tooltip when the user hover a point.
        // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
        const showTooltip = function (event, d) {
            tooltip
                .transition()
                .duration(100)
                .style("opacity", 1)
            tooltip
                .html("Range: " + d.x0 + " - " + d.x1)
                .style("left", (event.x) / 2 - 100 + "px")
                .style("top", (event.y) / 2 + "px")
        };

        const moveTooltip = function (event, d) {
            tooltip
                .style("left", (event.x) / 2 - 100 + "px")
                .style("top", (event.y) / 2 + "px")
        };

        // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
        const hideTooltip = function (event, d) {
            tooltip
                .transition()
                .duration(100)
                .style("opacity", 0)
        };

        // append the bar rectangles to the svg element
        svg.selectAll("rect")
            .data(bins)
            .join("rect")
            .attr("x", 1)
            .attr("transform", function (d) {
                return `translate(${x(d.x0)}, ${y(d.length)})`
            })
            .attr("width", function (d) {
                return x(d.x1) - x(d.x0) + 1
            })
            .attr("height", function (d) {
                return height - y(d.length);
            })
            .style("fill", "#334de8")
            .style("opacity", "0.75")
            .on("mouseover", showTooltip)
            .on("mousemove", moveTooltip)
            .on("mouseleave", hideTooltip);
    }

    make_by_bins(21);  // число бинов по умолчанию

    // grid
    d3.selectAll("g.yAxis g.tick")
        .append("line")
        .attr("class", "gridline")
        .style("stroke", "black")
        .style("shape-rendering", "crispEdges")
        .style("stroke-opacity", ".2")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", width)
        .attr("y2", 0);

    $('#id-nbin').show();

    d3.select("#id-nbin-input").on("change", function () {
        $('#id-nbin label').text('число бинов: ' + this.value);
        make_by_bins(+this.value);
    });

    let brush = d3.brush().on("end", brushended);
    let idleTimeout;
    let idleDelay = 350;
    let svg_ = d3.select('svg');

    svg_.append("g")
        .attr("class", "brush")
        .call(brush);

    function brushended() {
        let s = event.selection;
        if (!s) {
            if (!idleTimeout) return idleTimeout = setTimeout(idled, idleDelay);
            x.domain([1940, 1995]);
            y.domain([0, 80]);
        } else {
            x.domain([s[0][0], s[1][0]].map(x.invert, x));
            y.domain([s[1][1], s[0][1]].map(y.invert, y));
            svg_.select(".brush").call(brush.move, null);
        }
        zoom();
    }

    function idled() {
        idleTimeout = null;
    }

    function zoom() {
        let t = svg_.transition().duration(750);
        svg_.select(".axis--x").transition(t).call(x);
        svg_.select(".axis--y").transition(t).call(y);
        svg_.selectAll("rect").transition(t)
            .attr("x", function (d) {
                return x(d[0]);
            })
            .attr("y", function (d) {
                return y(d[1]);
            });
    }
}

function draw_d3_scatter(id, data, layout) {
    let data_format = [];
    for (let i in data['x1']) {
        data_format.push([data['x1'][i], data['x2'][i]]);
    }

    let margin = {top: 20, right: 30, bottom: 40, left: 60};
    let width = 1700 - margin.left - margin.right;
    let height = 700 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Add X axis
    const x = d3.scaleLinear()
        .domain([d3.min(data['x1'], function (d) {
            return +d
        }), d3.max(data['x1'], function (d) {
            return +d
        })])
        .range([0, width]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
        .domain([d3.min(data['x2'], function (d) {
            return +d
        }), d3.max(data['x2'], function (d) {
            return +d
        })])
        .range([height, 0]);

    svg.append("g")
        .attr('class', 'yAxis')
        .call(d3.axisLeft(y));

    // label for x axis
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 15)
        .text(layout.xaxis);

    // label for y axis
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 10)
        .attr("x", -margin.top)
        .text(layout.yaxis);

    // hist title
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2)
        .text(layout.title);

    // Add the points
    svg.append("g")
        .selectAll("dot")
        .data(data_format)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return x(d[0]);
        })
        .attr("cy", function (d) {
            return y(d[1]);
        })
        .attr("r", 5)
        .attr("fill", "#334de8");

    // grid
    d3.selectAll("g.yAxis g.tick")
        .append("line")
        .attr("class", "gridline")
        .style("stroke", "black")
        .style("shape-rendering", "crispEdges")
        .style("stroke-opacity", ".2")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", width)
        .attr("y2", 0);
}

function draw_d3_scatter_with_lines(id, data, layout) {
    let data_format = [];
    for (let i in data['x1']) {
        data_format.push([data['x1'][i], data['x2'][i]]);
    }

    let margin = {top: 20, right: 30, bottom: 40, left: 60};
    let width = 1700 - margin.left - margin.right;
    let height = 700 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Add X axis
    const x = d3.scaleLinear()
        .domain([d3.min(data['x1'], function (d) {
            return +d
        }), d3.max(data['x1'], function (d) {
            return +d
        })])
        .range([0, width]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
        .domain([d3.min(data['x2'], function (d) {
            return +d
        }), d3.max(data['x2'], function (d) {
            return +d
        })])
        .range([height, 0]);

    svg.append("g")
        .attr('class', 'yAxis')
        .call(d3.axisLeft(y));

    // label for x axis
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 15)
        .text(layout.xaxis);

    // label for y axis
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", -margin.left + 10)
        .attr("x", -margin.top)
        .text(layout.yaxis);

    // hist title
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2)
        .text(layout.title);

    let line = d3.line()
        .x(function (d) {
            return x(d[0])
        })
        .y(function (d) {
            return y(d[1])
        });

    svg.append('path')
        .datum(data_format)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);

    // Add the points
    svg.append("g")
        .selectAll("dot")
        .data(data_format)
        .enter()
        .append("circle")
        .attr("cx", function (d) {
            return x(d[0]);
        })
        .attr("cy", function (d) {
            return y(d[1]);
        })
        .attr("r", 5)
        .attr("fill", "#334de8");

    // grid
    d3.selectAll("g.yAxis g.tick")
        .append("line")
        .attr("class", "gridline")
        .style("stroke", "black")
        .style("shape-rendering", "crispEdges")
        .style("stroke-opacity", ".2")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", width)
        .attr("y2", 0);
}

function draw_d3_boxplot(id, data, layout) {
    const margin = {top: 10, right: 30, bottom: 30, left: 40};
    const width = 1700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
    let svg = d3.select(id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

// Read the data and compute summary statistics for each specie
    d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv", function (data) {

        // Compute quartiles, median, inter quantile range min and max --> these info are then used to draw the box.
        let sumstat = d3.rollup() // group function allows to group the calculation per level of a factor
            .key(function (d) {
                return d.Species;
            })
            .rollup(function (d) {
                let q1 = d3.quantile(d.map(function (g) {
                    return g.Sepal_Length;
                }).sort(d3.ascending), .25)
                let median = d3.quantile(d.map(function (g) {
                    return g.Sepal_Length;
                }).sort(d3.ascending), .5)
                let q3 = d3.quantile(d.map(function (g) {
                    return g.Sepal_Length;
                }).sort(d3.ascending), .75)
                let interQuantileRange = q3 - q1
                let min = q1 - 1.5 * interQuantileRange
                let max = q3 + 1.5 * interQuantileRange
                return ({q1: q1, median: median, q3: q3, interQuantileRange: interQuantileRange, min: min, max: max})
            })
            .entries(data)

        // Show the X scale
        let x = d3.scaleBand()
            .range([0, width])
            .domain(["setosa", "versicolor", "virginica"])
            .paddingInner(1)
            .paddingOuter(.5)
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

        // Show the Y scale
        let y = d3.scaleLinear()
            .domain([3, 9])
            .range([height, 0])
        svg.append("g").call(d3.axisLeft(y))

        // Show the main vertical line
        svg
            .selectAll("vertLines")
            .data(sumstat)
            .enter()
            .append("line")
            .attr("x1", function (d) {
                return (x(d.key))
            })
            .attr("x2", function (d) {
                return (x(d.key))
            })
            .attr("y1", function (d) {
                return (y(d.value.min))
            })
            .attr("y2", function (d) {
                return (y(d.value.max))
            })
            .attr("stroke", "black")
            .style("width", 40)

        // rectangle for the main box
        let boxWidth = 100;

        svg.selectAll("boxes")
            .data(sumstat)
            .enter()
            .append("rect")
            .attr("x", function (d) {
                return (x(d.key) - boxWidth / 2)
            })
            .attr("y", function (d) {
                return (y(d.value.q3))
            })
            .attr("height", function (d) {
                return (y(d.value.q1) - y(d.value.q3))
            })
            .attr("width", boxWidth)
            .attr("stroke", "black")
            .style("fill", "#69b3a2")

        // Show the median
        svg.selectAll("medianLines")
            .data(sumstat)
            .enter()
            .append("line")
            .attr("x1", function (d) {
                return (x(d.key) - boxWidth / 2)
            })
            .attr("x2", function (d) {
                return (x(d.key) + boxWidth / 2)
            })
            .attr("y1", function (d) {
                return (y(d.value.median))
            })
            .attr("y2", function (d) {
                return (y(d.value.median))
            })
            .attr("stroke", "black")
            .style("width", 80)
    })
}

function draw_d3_bar(id, data, layout) {

}

function draw_d3_parallel(id, data, layout) {
    const margin = {top: 30, right: 50, bottom: 10, left: 50};
    const width = 1700 - margin.left - margin.right;
    const height = 700 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(id)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Color scale: give me a specie name, I return a color
    const color = d3.scaleOrdinal()
        .domain(["setosa"])
        .range(["#334de8"])

    // Here I set the list of dimension manually to control the order of axis:
    let dimensions = [layout.one_axis, layout.two_axis];

    data = {
        [layout.one_axis]: data['x1'],
        [layout.two_axis]: data['x2']
    };

    let data_format = [];
    for (let i in data[layout.one_axis]) {
        data_format.push({[layout.one_axis]: data[layout.one_axis][i], [layout.two_axis]: data[layout.two_axis][i]});
    }

    // For each dimension, I build a linear scale. I store all in a y object
    const y = {}
    for (let i in dimensions) {
        let name = dimensions[i]
        y[name] = d3.scaleLinear()
            .domain([d3.min(data[name], function (d) {
                return +d
            }), d3.max(data[name], function (d) {
                return +d
            })]) // --> Same axis range for each group
            // --> different axis range for each group --> .domain( [d3.extent(data, function(d) { return +d[name]; })] )
            .range([height, 0])
    }

    // Build the X scale -> it find the best position for each Y axis
    let x = d3.scalePoint()
        .range([0, width])
        .domain(dimensions);

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width / 2)
        .text(layout.title);

    // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
    function path(d) {
        return d3.line()(dimensions.map(function (p) {
            return [x(p), y[p](d[p])];
        }));
    }

    // Draw the lines
    svg.selectAll("myPath")
        .data(data_format)
        .join("path")
        .attr("class", function (d) {
            return "line setosa"
        }) // 2 class for each line: 'line' and the group name
        .attr("d", path)
        .style("fill", "none")
        .style("stroke", function (d) {
            return (color('setosa'))
        })
        .style("opacity", 0.5)

    // Draw the axis:
    svg.selectAll("myAxis")
        // For each dimension of the dataset I add a 'g' element:
        .data(dimensions)
        .enter()
        .append("g")
        .attr("class", "axis")
        // I translate this element to its right position on the x axis
        .attr("transform", function (d) {
            return `translate(${x(d)})`
        })
        // And I build the axis with the call function
        .each(function (d) {
            d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d]));
        })
        // Add axis title
        .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function (d) {
            return d;
        })
        .style("fill", "black")
}
