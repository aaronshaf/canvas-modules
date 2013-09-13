define [
  'ember'
], (Ember) ->
  PopoverCloseComponent = Ember.Component.extend
    tagName: 'span'
    click: ->
      @get('parentView').close()
