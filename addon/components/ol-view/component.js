import { A } from '@ember/array';
import BaseLayerComponent from '../ol-base-layer/component';
import { View } from 'ol';
import { fromLonLat } from 'ol/proj';

export default BaseLayerComponent.extend({
  olProperties: A(['center', 'zoom']),

  zoom: 3,

  init() {
    this._super(...arguments);

    this.setProperties({
      center: fromLonLat(this.getWithDefault('center', [0, 0]))
    })
  },

  createLayer() {
    return new View(this.getProperties(['center', 'zoom']));
  },

  addToContainer() {
    if (this.get('parentComponent')) {
      this.get('parentComponent')._layer.setView(this._layer);
    }
  },
  removeFromContainer() {
    // No reason to remove the view from the container
  }
});
