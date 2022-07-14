import { registry, RadialLinearScale } from 'chart.js';
import createChart from 'chartjs-chart-error-bars/src/__tests__/createChart';
import { PolarAreaWithErrorBarsController } from 'chartjs-chart-error-bars/src/controllers/PolarAreaWithErrorBarsController';
import { ArcWithErrorBar } from 'chartjs-chart-error-bars/src/elements';

describe('bar', () => {
  beforeAll(() => {
    registry.addControllers(PolarAreaWithErrorBarsController);
    registry.addElements(ArcWithErrorBar);
    registry.addScales(RadialLinearScale);
  });
  test('default', () => {
    return createChart({
      type: PolarAreaWithErrorBarsController.id,
      data: {
        labels: ['A', 'B'],
        datasets: [
          {
            data: [
              {
                r: 4,
                rMin: 1,
                rMax: 6,
              },
              {
                r: 2,
                rMin: 1,
                rMax: 4,
              },
            ],
          },
        ],
      },
      options: {
        scales: {
          r: {
            display: false,
          },
        },
      },
    }).toMatchImageSnapshot();
  });
});
