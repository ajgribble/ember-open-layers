import Controller from '@ember/controller';
import { fromLonLat } from 'ol/proj';

function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}
const rotateOpts = [0, 90, 180, 270];

export default Controller.extend({
  maxZoom: 10,
  showOsmLayer: true,
  rotationDeg: 0,
  zoom: 5,

  init() {
    this._super(...arguments);

    this.setProperties({
      center: fromLonLat([46, 20]),
      rotation: degToRad(this.get('rotationDeg'))
    });
  },

  actions: {
    alert(msg) {
      console.log(msg);
    },
    centerOnMap() {
      this.set('center', fromLonLat([0, 0]));
    },
    click() {
      this.toggleProperty('showOsmLayer');
    },
    rotate() {
      const rotationDegIdx = rotateOpts.indexOf(this.get('rotationDeg'));
      let newOpt;

      if (rotationDegIdx === 3) {
        newOpt = rotateOpts[0];
      } else {
        newOpt = rotateOpts[rotationDegIdx + 1];
      }
      this.set('rotation', degToRad(newOpt));
      this.set('rotationDeg', newOpt);
    }
  }
});
