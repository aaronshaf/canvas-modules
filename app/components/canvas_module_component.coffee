define [
  'Ember',
  'compiled/ember/context_modules2/config/app'
], (Ember,App) ->
  App.CanvasModuleComponent = Ember.Component.extend
    toggleExpandCollapse: ->
      if this.get 'module.expanded'
        this.set 'module.expanded', false
      else
        this.set 'module.expanded', true
