import { A } from '@ember/array';

export const olEvents = A(['change', 'change:center', 'change:resolution', 'change:rotation', 'propertychange']);
export const olProperties = A(['center', 'maxZoom', 'minZoom', 'properties', 'resolution', 'rotation', 'zoom']);

export default {
  center: undefined,
  constrainRotation: true,
  enableRotation: true,
  extent: undefined,
  maxResolution: undefined,
  maxZoom: 28,
  minResolution: undefined,
  minZoom: 0,
  projection: 'EPSG:3857',
  resolution: undefined,
  resolutions: undefined,
  rotation: 0,
  zoom: undefined,
  zoomFactor: 2
}
