define [
  'ember'
], (Ember) ->
  Ember.ObjectController.extend
    editable: true
    empty: (->
      this.get('items.length') is 0
    ).property('items')