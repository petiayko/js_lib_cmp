$(function () {
    let begin;
    let end;
    // hist

    // scatter
    {
        let data = get_data('scatter', 100);
        let format_data = [];
        for (let i in data.x1) {
            format_data.push({'x1': data.x1[i], 'x2': data.x2[i]});
        }
        begin = Date.now();
        new Taucharts.Chart({
            data: format_data,
            type: 'scatterplot',
            x: 'x1',
            y: 'x2',
            plugins: [
                Taucharts.api.plugins.get('tooltip')()
            ]
        }).renderTo('#scatter-taucharts-2');
        end = Date.now();
        $('#scatter-taucharts-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 1000);
        format_data = [];
        for (let i in data.x1) {
            format_data.push({'x1': data.x1[i], 'x2': data.x2[i]});
        }
        begin = Date.now();
        new Taucharts.Chart({
            data: format_data,
            type: 'scatterplot',
            x: 'x1',
            y: 'x2',
            plugins: [
                Taucharts.api.plugins.get('tooltip')()
            ]
        }).renderTo('#scatter-taucharts-3');
        end = Date.now();
        $('#scatter-taucharts-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 10000);
        format_data = [];
        for (let i in data.x1) {
            format_data.push({'x1': data.x1[i], 'x2': data.x2[i]});
        }
        begin = Date.now();
        new Taucharts.Chart({
            data: format_data,
            type: 'scatterplot',
            x: 'x1',
            y: 'x2',
            plugins: [
                Taucharts.api.plugins.get('tooltip')()
            ]
        }).renderTo('#scatter-taucharts-4');
        end = Date.now();
        $('#scatter-taucharts-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
    }

    // scatter-wl
    {
        let data = get_data('scatter', 100);
        let format_data = [];
        for (let i in data.x1) {
            format_data.push({'x1': data.x1[i], 'x2': data.x2[i]});
        }
        begin = Date.now();
        new Taucharts.Chart({
            data: format_data,
            type: 'line',
            x: 'x1',
            y: 'x2',
            plugins: [
                Taucharts.api.plugins.get('tooltip')()
            ]
        }).renderTo('#scatter-wl-taucharts-2');
        end = Date.now();
        $('#scatter-wl-taucharts-2').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 1000);
        format_data = [];
        for (let i in data.x1) {
            format_data.push({'x1': data.x1[i], 'x2': data.x2[i]});
        }
        begin = Date.now();
        new Taucharts.Chart({
            data: format_data,
            type: 'line',
            x: 'x1',
            y: 'x2',
            plugins: [
                Taucharts.api.plugins.get('tooltip')()
            ]
        }).renderTo('#scatter-wl-taucharts-3');
        end = Date.now();
        $('#scatter-wl-taucharts-3').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');

        data = get_data('scatter', 10000);
        format_data = [];
        for (let i in data.x1) {
            format_data.push({'x1': data.x1[i], 'x2': data.x2[i]});
        }
        begin = Date.now();
        new Taucharts.Chart({
            data: format_data,
            type: 'line',
            x: 'x1',
            y: 'x2',
            plugins: [
                Taucharts.api.plugins.get('tooltip')()
            ]
        }).renderTo('#scatter-wl-taucharts-4');
        end = Date.now();
        $('#scatter-wl-taucharts-4').append('<p style="text-align: center">' + (end - begin) + ' ms</p>');
    }

    // boxplot

    // bar

    // parallel
})