define [
  'ember'
], (Ember) ->
  Ember.ObjectController.extend
    empty: (->
      this.get('items.length') is 0
    ).property('items')