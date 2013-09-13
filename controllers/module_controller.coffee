define [
  'ember'
  # '../components/ic_popover_component'
  '../components/ic_edit_module_component'
], (Ember,EditModuleComponent) ->
  Ember.ObjectController.extend
    editable: true

    actions:
      loadNextPage: ->
        this.get('model').loadNextPage()
      closePopup: ->
        alert 'close!'

      # toggleProperty: Ember.Controller.prototype.toggleProperty

    empty: (->
      this.get('items.length') is 0
    ).property('items')