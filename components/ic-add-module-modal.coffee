define [
  'ember'
  './ic_popover_component'
  '../models/module'
], (Ember,PopoverComponent,Module) ->
  AddModuleModalComponent = PopoverComponent.extend
    init: ->
      @_super.apply @, arguments
      @set 'module', {}
    reset: -> @set 'module', {}
    actions:
      addModule: ->
        Module.addRecord @get 'module'
        @close()
        @reset()
