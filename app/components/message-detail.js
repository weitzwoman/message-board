import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(message, params) {
      this.sendAction('update', message, params);
    }
  }
});
