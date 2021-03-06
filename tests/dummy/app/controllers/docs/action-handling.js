import Ember from 'ember';

export default Ember.Controller.extend({
  cities: ['Barcelona', 'London', 'New York', 'Porto'],
  destination: 'London',
  selectedCities: [],

  actions: {
    chooseDestination(city) {
      this.set('destination', city);
    },

    handleKeydown(dropdown, e) {
      if (e.keyCode !== 13) { return; }
      let text = e.target.value;
      if (text.length > 0 && this.get('cities').indexOf(text) === -1) {
        this.get('selectedCities').pushObject(text);
      }
    }
  }
});