import BaseLayerComponent from '../ol-base-layer/component';
import { View } from 'ol';
import defaults from '../../utils/ol-view-defaults';
// import { fromLonLat } from 'ol/proj';

export default BaseLayerComponent.extend(defaults, {
  createLayer() {
    return new View(this.getProperties(Object.keys(defaults)));
  },

  addToContainer() {
    if (this.get('parentComponent')) {
      this.get('parentComponent')._layer.setView(this._layer);
    }
  },
  removeFromContainer() {
    // No reason to remove the view from the container
  },

  onChangeRotation() {},

  actions: {
    handleChangeRotation(e) {
      this.onChangeRotation(e);
    }
  }
});
