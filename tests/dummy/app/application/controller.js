import Controller from '@ember/controller';

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
      center: [10, 40],
      rotation: degToRad(this.get('rotationDeg'))
    });
  },

  actions: {
    alert(msg) {
      alert(msg);
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
