import { assign } from '@ember/polyfills';
import BaseLayerComponent from '../ol-base-layer/component';
import defaults, { olEvents, olProperties } from '../../utils/ol-control-defaults';

export default BaseLayerComponent.extend({
  type: 'mousePosition',

  olEvents,
  olProperties,

  createLayer() {
    const props = Object.keys(defaults[this.get('type')]).reduce((acc, key) => (
      this.get(key) ? assign({}, acc, { [key]: this.get(key) }) : acc
    ), assign({}, defaults[this.get('type')]));

    // Set the target to the parent if none explicitly set
    if (!props.target) {
      props.target = this.get('parentComponent')._layer.getViewport();
    }

    this.setProperties(props);
    return new defaults[this.get('type')].ControlClass(props);
  },

  addToContainer() {
    this.get('parentComponent')._layer.addControl(this._layer);
  },
  removeFromContainer() {
    this.get('parentComponent')._layer.removeControl(this._layer);
  }
});
