import { registry, LinearScale } from 'chart.js';
import createChart from 'chartjs-chart-error-bars/src/__tests__/createChart';
import { ScatterWithErrorBarsController } from 'chartjs-chart-error-bars/src/controllers/ScatterWithErrorBarsController';
import { PointWithErrorBar } from 'chartjs-chart-error-bars/src/elements';

describe('bar', () => {
  beforeAll(() => {
    registry.addControllers(ScatterWithErrorBarsController);
    registry.addElements(PointWithErrorBar);
    registry.addScales(LinearScale);
  });
  test('default', () => {
    return createChart({
      type: ScatterWithErrorBarsController.id,
      data: {
        labels: ['A', 'B'],
        datasets: [
          {
            data: [
              {
                x: 2,
                xMin: 1,
                xMax: 3,
                y: 4,
                yMin: 1,
                yMax: 6,
              },
              {
                x: 7,
                xMin: 6,
                xMax: 9,
                y: 2,
                yMin: 1,
                yMax: 4,
              },
            ],
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    }).toMatchImageSnapshot();
  });
});
