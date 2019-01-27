import { A } from '@ember/array';
import {
  Attribution,
  FullScreen,
  MousePosition,
  OverviewMap,
  Rotate,
  ScaleLine,
  Zoom,
  ZoomSlider,
  ZoomToExtent
} from 'ol/control';

export const olEvents = A([
  'change',
  'change:coordinateFormat',
  'change:projection',
  'change:units',
  'propertychange'
]);
export const olProperties = A([
  'autoHide',
  'className',
  'collapsible',
  'collapsed',
  'collapseLabel',
  'coordinateFormat',
  'delta',
  'duration',
  'extent',
  'label',
  'labelActive',
  'layers',
  'keys',
  'minWidth',
  'projection',
  'resetNorth',
  'source',
  'target',
  'tipLabel',
  'undefinedHTML',
  'units',
  'view',
  'zoomInLabel',
  'zoomInTipLabel',
  'zoomOutLabel',
  'zoomOutTipLabel'
]);

export default {
  attribution: {
    ControlClass: Attribution,
    className: 'ol-attribution',
    collapsible: undefined,
    collapsed: true,
    collapseLabel: '»',
    label: 'i',
    render: undefined,
    target: undefined,
    tipLabel: 'Attributions'
  },
  fullScreen: {
    ControlClass: FullScreen,
    className: 'ol-full-screen',
    label: '\u2922',
    labelActive: '\u00d7',
    keys: false,
    source: undefined,
    target: undefined,
    tipLabel: 'Toggle full-screen'
  },
  mousePosition: {
    ControlClass: MousePosition,
    className: 'ol-mouse-position',
    coordinateFormat: undefined,
    projection: undefined,
    render: undefined,
    target: undefined,
    undefinedHTML: '&#160'
  },
  overview: {
    ControlClass: OverviewMap,
    className: 'ol-overviewmap',
    collapsible: true,
    collapsed: true,
    collapseLabel: '«',
    label: '»',
    layers: undefined,
    tipLabel: 'Overview map',
    render: undefined,
    target: undefined,
    view: undefined
  },
  rotate: {
    ControlClass: Rotate,
    autoHide: true,
    className: 'ol-rotate',
    duration: 250,
    label: '⇧',
    tipLabel: 'Reset rotation',
    render: undefined,
    resetNorth: undefined,
    target: undefined
  },
  scaleLine: {
    ControlClass: ScaleLine,
    className: 'ol-scale-line',
    minWidth: 64,
    render: undefined,
    target: undefined,
    units: 'metric'
  },
  zoom: {
    ControlClass: Zoom,
    className: 'ol-full-screen',
    delta: 1,
    duration: 250,
    zoomInLabel: '+',
    zoomInTipLabel: 'Zoom in',
    zoomOutLabel: '-',
    zoomOutTipLabel: 'Zoom out',
    target: undefined,
  },
  zoomSlider: {
    ControlClass: ZoomSlider,
    className: 'ol-zoomslider',
    duration: 200,
    render: undefined
  },
  zoomToExtent: {
    ControlClass: ZoomToExtent,
    className: 'ol-zoom-extent',
    extent: undefined,
    label: 'E',
    target: undefined,
    tipLabel: 'Fit to extent'
  }
}
