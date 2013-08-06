define [
  'Ember'
], (Ember) ->
  Ember.ObjectController.extend
    indentClass: (->
      console.log 'test'
      'indent-' + this.get('indent')
    ).property('indent')