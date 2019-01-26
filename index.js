'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    include: ['ol']
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/ol/ol.css');
  }
};
