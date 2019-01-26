import BaseLayerComponent from '../ol-base-layer/component';
import layout from './template';
import { ParentMixin } from 'ember-composability-tools';
import { Map } from 'ol';

export default BaseLayerComponent.extend(ParentMixin, {
  layout,
  classNames: ['ol-map'],

  createLayer() {
    return new Map({ target: this.element.getAttribute('id') });
  }
});
