import Component from '@ember/component';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';
import { classify } from '@ember/string';
import { run } from '@ember/runloop';
import { A } from '@ember/array';
import { ChildMixin } from 'ember-composability-tools';

export default Component.extend(ChildMixin, {
  olEvents: A(),
  olProperties: A(),

  usedEvents: computed('olEvents', function() {
    return this.get('olEvents').filter((eventName) => {
      const methodName = `_${eventName}`;
      const actionName = `on${classify(eventName.split(':').join(' '))}`;

      return this.get(methodName) !== undefined || this.get(`actions.${actionName}`) !== undefined;
    });
  }),

  didInsertParent() {
    this._layer = this.createLayer();

    this._addEventListeners();
    this._addObservers();

    if (this.get('parentComponent')) {
      this.addToContainer();
    }

    this.didCreateLayer();
  },
  willDestroyParent() {
    this.willDestroyLayer();
    this._removeObservers();

    if (this.get('parentComponent') && this._layer) {
      this.removeFromContainer();
    }

    delete this._layer;
  },

  createLayer() {
    assert('The OlBaseLayer \'createLayer\' hook should be overridden');
  },
  didCreateLayer() {},
  willDestroyLayer() {},

  addToContainer() {
    this.get('parentComponent')._layer.addLayer(this._layer);
  },
  removeFromContainer() {
    this.get('parentComponent')._layer.removeLayer(this._layer);
  },

  _addEventListeners() {
    this._eventHandlers = {};
    this.get('usedEvents').forEach((eventName) => {
      const actionName = `on${classify(eventName.split(':').join(' '))}`;
      const methodName = `_${eventName}`;

      // create an event handler that runs the function inside an event loop.
      this._eventHandlers[eventName] = function(e) {
        run(() => {
          // try to invoke/send an action for this event
          // this.invokeAction(actionName, e);
          if (this.get(`actions.${actionName}`)) {
            this.send(actionName, e);
          }

          // allow classes to add custom logic on events as well
          if (typeof this[methodName] === 'function') {
            run(this, this[methodName], e);
          }
        });
      };

      this._layer.on(eventName, this._eventHandlers[eventName].bind(this));
    });
  },

  _addObservers() {
    this._observers = {};
    this.olProperties.forEach((propExp) => {
      let [property, olProperty, ...params] = propExp.split(':');

      if (!olProperty) {
        olProperty = 'animate';
      }
      let objectProperty = property.replace(/\.\[]/, ''); // allow usage of .[] to observe array changes

      this._observers[property] = function() {
        let value = this.get(objectProperty);
        assert(`${this.constructor} must have a ${olProperty} function.`, !!this.get(`_layer.${olProperty}`));
        let propertyParams = params.map((p) => this.get(p));

        this._layer[olProperty].call(this._layer, { [property]: value }, ...propertyParams);
      };

      this.addObserver(property, this, this._observers[property]);
    });
  },

  _removeEventListeners() {
    if (this._eventHandlers) {
      this.get('usedEvents').forEach((eventName) => {
        this._layer.removeEventListener(eventName, this._eventHandlers[eventName], this);
        delete this._eventHandlers[eventName];
      });
    }
  },

  _removeObservers() {
    if (this._observers) {
      this.get('olProperties').forEach((propExp) => {

        let [property] = propExp.split(':');

        this.removeObserver(property, this, this._observers[property]);
        delete this._observers[property];
      });
    }
  }
});
