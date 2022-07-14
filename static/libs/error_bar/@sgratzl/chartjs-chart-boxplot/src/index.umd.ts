import { registry } from 'chart.js';
import { BoxPlotController, ViolinController } from '@sgratzl/chartjs-chart-boxplot/src/controllers';
import { BoxAndWiskers, Violin } from '@sgratzl/chartjs-chart-boxplot/src/elements';

export * from '@sgratzl/chartjs-chart-boxplot/src';

registry.addControllers(BoxPlotController, ViolinController);
registry.addElements(BoxAndWiskers, Violin);
