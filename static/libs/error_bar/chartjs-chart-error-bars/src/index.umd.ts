import { registry } from 'chart.js';
import {
  BarWithErrorBarsController,
  LineWithErrorBarsController,
  PolarAreaWithErrorBarsController,
  ScatterWithErrorBarsController,
} from 'chartjs-chart-error-bars/src/controllers';
import { BarWithErrorBar, ArcWithErrorBar, PointWithErrorBar } from 'chartjs-chart-error-bars/src/elements';

export * from 'chartjs-chart-error-bars/src';

registry.addControllers(
  BarWithErrorBarsController,
  LineWithErrorBarsController,
  PolarAreaWithErrorBarsController,
  ScatterWithErrorBarsController
);
registry.addElements(BarWithErrorBar, ArcWithErrorBar, PointWithErrorBar);
