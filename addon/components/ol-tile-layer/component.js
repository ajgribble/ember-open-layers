import BaseLayerComponent from '../ol-base-layer/component';
import TileLayer from 'ol/layer/Tile';
import { ParentMixin } from 'ember-composability-tools';

export default BaseLayerComponent.extend(ParentMixin, {
  createLayer() {
    return new TileLayer();
  }  
});
