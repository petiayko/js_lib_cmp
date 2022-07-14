﻿import {
  Chart,
  PolarAreaController,
  RadialLinearScale,
  Scale,
  UpdateMode,
  Element,
  ChartMeta,
  ChartItem,
  ChartConfiguration,
  PolarAreaControllerDatasetOptions,
  ScriptableAndArrayOptions,
  ScriptableContext,
} from 'chart.js';
import { merge } from 'chart.js/helpers';
import { calculatePolarScale } from 'chartjs-chart-error-bars/src/controllers/utils';
import { getMinMax, IErrorBarRDataPoint, parseErrorNumberData } from 'chartjs-chart-error-bars/src/controllers/base';
import { generateTooltipPolar } from 'chartjs-chart-error-bars/src/controllers/tooltip';
import { animationHints } from 'chartjs-chart-error-bars/src/animate';
import { ArcWithErrorBar } from 'chartjs-chart-error-bars/src/elements';
import type { IErrorBarOptions } from 'chartjs-chart-error-bars/src/elements/render';
import patchController from 'chartjs-chart-error-bars/src/controllers/patchController';

export class PolarAreaWithErrorBarsController extends PolarAreaController {
  getMinMaxImpl(scale: Scale) {
    // new version doesn't use scale.axis wrongly
    const t = this._cachedMeta;
    const e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY,
    };
    t.data.forEach((_, i) => {
      const s = (this.getParsed(i) as any)[scale.axis] as number;
      if (Number.isNaN(s) || !this.chart.getDataVisibility(i)) {
        return;
      }
      if (s < e.min) {
        e.min = s;
      }
      if (s > e.max) {
        e.max = s;
      }
    });
    return e;
  }

  getMinMax(scale: Scale): { min: number; max: number } {
    return getMinMax(scale, (patchedScale) => this.getMinMaxImpl(patchedScale));
  }

  countVisibleElements(): number {
    const meta = this._cachedMeta;
    return meta.data.reduce((acc, _, index) => {
      // use different data lookup
      if (!Number.isNaN((meta._parsed[index] as { r: number }).r) && this.chart.getDataVisibility(index)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }

  // _computeAngle(index: number, mode, defaultAngle: number): number {
  //   return this.chart.getDataVisibility(index)
  //     ? toRadians(this.resolveDataElementOptions(index, mode).angle || defaultAngle)
  //     : 0;
  // }

  // _computeAngle(index: number): number {
  //   const meta = this._cachedMeta;
  //   const count = (meta as any).count as number;
  //   // use different data lookup
  //   if (Number.isNaN((meta._parsed[index] as { r: number }).r) || !this.chart.getDataVisibility(index)) {
  //     return 0;
  //   }
  //   const context = (this as any).getContext(index, true);
  //   return resolve([(this.chart.options as any).elements.arc.angle, (2 * Math.PI) / count], context, index);
  // }

  // eslint-disable-next-line class-methods-use-this
  parseObjectData(meta: ChartMeta, data: any[], start: number, count: number): Record<string, unknown>[] {
    const parsed = new Array(count);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const scale = meta.rScale!;
    for (let i = 0; i < count; i += 1) {
      const index = i + start;
      const item = data[index];
      const v = scale.parse(item[scale.axis], index);
      parsed[i] = {
        [scale.axis]: v,
      };
    }
    parseErrorNumberData(parsed, scale, data, start, count);
    return parsed;
  }

  updateElement(
    element: Element,
    index: number | undefined,
    properties: Record<string, unknown>,
    mode: UpdateMode
  ): void {
    if (typeof index === 'number') {
      calculatePolarScale(
        properties,
        this.getParsed(index) as IErrorBarRDataPoint,
        this._cachedMeta.rScale as RadialLinearScale,
        mode === 'reset',
        this.chart.options
      );
    }
    super.updateElement(element, index, properties, mode);
  }

  updateElements(arcs: Element[], start: number, count: number, mode: UpdateMode): void {
    const scale = this.chart.scales.r as RadialLinearScale;
    const bak = scale.getDistanceFromCenterForValue;
    scale.getDistanceFromCenterForValue = function getDistanceFromCenterForValue(v) {
      if (typeof v === 'number') {
        return bak.call(this, v);
      }
      return bak.call(this, (v as any).r);
    };
    super.updateElements(arcs, start, count, mode);
    scale.getDistanceFromCenterForValue = bak;
  }

  static readonly id = 'polarAreaWithErrorBars';

  static readonly defaults: any = /* #__PURE__ */ merge({}, [
    PolarAreaController.defaults,
    animationHints,
    {
      dataElementType: ArcWithErrorBar.id,
    },
  ]);

  static readonly overrides: any = /* #__PURE__ */ merge({}, [
    (PolarAreaController as any).overrides,
    {
      plugins: {
        tooltip: {
          callbacks: {
            label: generateTooltipPolar,
          },
        },
      },
    },
  ]);

  static readonly defaultRoutes = PolarAreaController.defaultRoutes;
}

export interface PolarAreaWithErrorBarsControllerDatasetOptions
  extends PolarAreaControllerDatasetOptions,
    ScriptableAndArrayOptions<IErrorBarOptions, ScriptableContext<'polarAreaWithErrorBars'>> {}

declare module 'chart.js' {
  export interface ChartTypeRegistry {
    polarAreaWithErrorBars: {
      chartOptions: PolarAreaControllerChartOptions;
      datasetOptions: PolarAreaWithErrorBarsControllerDatasetOptions;
      defaultDataPoint: IErrorBarRDataPoint;
      scales: keyof CartesianScaleTypeRegistry;
      metaExtensions: Record<string, never>;
      parsedDataType: IErrorBarRDataPoint & ChartTypeRegistry['polarArea']['parsedDataType'];
    };
  }
}

export class PolarAreaWithErrorBarsChart<DATA extends unknown[] = IErrorBarRDataPoint[], LABEL = string> extends Chart<
  'polarAreaWithErrorBars',
  DATA,
  LABEL
> {
  static id = PolarAreaWithErrorBarsController.id;

  constructor(item: ChartItem, config: Omit<ChartConfiguration<'polarAreaWithErrorBars', DATA, LABEL>, 'type'>) {
    super(
      item,
      patchController('polarAreaWithErrorBars', config, PolarAreaWithErrorBarsController, ArcWithErrorBar, [
        RadialLinearScale,
      ])
    );
  }
}
