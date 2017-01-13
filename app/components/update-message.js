import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm: false,
  actions: {
    updateMessageForm() {
      this.set('updateMessageForm', true);
    },
    update(message) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('updateMessageForm', false);
      this.sendAction('update', message, params);
    }
  }
});
