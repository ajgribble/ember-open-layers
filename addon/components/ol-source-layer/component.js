import BaseLayerComponent from '../ol-base-layer/component';
import OSM from 'ol/source/OSM';

export default BaseLayerComponent.extend({
  createLayer() {
    return new OSM();
  },

  addToContainer() {
    this.get('parentComponent')._layer.setSource(this._layer);
  },
  removeFromContainer() {
    this.get('parentComponent')._layer.unset('source', false);
  }
});
