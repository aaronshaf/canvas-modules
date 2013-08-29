define [
  'ember'
], (Ember) ->
  Ember.ObjectController.extend
  	test: 'test1',
    icon_class: (->
    	'icon-' + @get('type').underscore()
    ).property('type')
