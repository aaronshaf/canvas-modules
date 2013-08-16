define [
  'Ember'
], (Ember) ->
  Ember.ObjectController.extend
    isAssignment: (->
    	console.log('type',this.type);
    ).property('type')