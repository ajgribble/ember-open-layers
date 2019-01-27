import BaseLayerComponent from '../ol-base-layer/component';
import { View } from 'ol';
import defaults, { olEvents, olProperties } from '../../utils/ol-view-defaults';

export default BaseLayerComponent.extend(defaults, {
  olEvents,
  olProperties,

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
