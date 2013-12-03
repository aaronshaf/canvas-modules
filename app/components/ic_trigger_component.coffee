define [
  'ember'
], (Ember) ->
  IcTiggerComponent = Ember.Component.extend
    tagName: 'ic-trigger'
  
    click: (event) ->
      if @get('target')?
        targetView = Ember.View.views[@get('target')]
      else
        targetView = this.get('parentView')
      # todo: do this in a more standard Ember way...
      targetView._actions[@get('action')].call(targetView)
