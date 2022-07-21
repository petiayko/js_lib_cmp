function get_data(type, size) {
    let max;
    let min;
    let output;
    switch (type) {
        case 'hist':
            max = Math.floor(Math.random() * 100);
            min = max - 500;
            output = [];
            for (let i = 0; i < size; i++) {
                output.push(Math.random() * (max - min) + min);
            }
            return output;

        case 'scatter':
            max = Math.floor(Math.random() * 100);
            min = max - 500;
            output = {'x1': [], 'x2': []};
            for (let i = 0; i < size; i++) {
                output['x1'].push(Math.random() * (max - min) + min);
                output['x2'].push(Math.random() * (max - min) + min);
            }
            return output;

        case 'boxplot':
            output = {};
            for (let val = 1; val !== 6; val++) {
                max = Math.floor(Math.random() * 100);
                min = max - 200;

                let key = Math.random() * (2 - 0.1) + 0.1;
                output[key] = [];
                for (let i = 0; i < size / 5; i++) {
                    output[key].push(Math.random() * (max - min) + min);
                }
            }
            return output;

        case 'parallel':
            max = Math.floor(Math.random() * 100);
            min = max - 200;
            output = {'x1': [], 'x2': []};
            for (let i = 0; i < size; i++) {
                output['x1'].push(Math.random() * (max - min) + min);
                output['x2'].push(Math.random() * (max - min) + min);
            }
            return output;

        case 'error_bar':
            output = {};
            for (let i = 0; i < size; i++) {
                max = Math.floor(Math.random() * 100);
                min = max - Math.floor(Math.random() * 10);
                output[Math.random() * (2 - 0.1) + 0.1] = [Math.random() * (max - min) + min, min, max];
            }
            return output;

        default:
            return [];
    }
}

function get_loading_time() {
    let time = window.performance.timing;
    return time.loadEventStart - time.navigationStart;
}
