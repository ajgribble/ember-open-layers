import Controller from '@ember/controller';

export default Controller.extend({
  showOsmLayer: false,
  zoom: 5,

  init() {
    this._super(...arguments);

    this.set('center', [10, 40]);
  },

  actions: {
    click() {
      this.toggleProperty('showOsmLayer');
    }
  }
});
