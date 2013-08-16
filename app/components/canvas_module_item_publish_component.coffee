define [
  'Ember',
  'compiled/ember/context_modules2/config/app'
], (Ember,App) ->
  App.CanvasModuleItemPublishComponent = Ember.Component.extend
    mouseEnter: ->
      @set 'hover', true

    mouseLeave: ->
      @set 'hover', false

    toggleExpandCollapse: ->
      if @get 'module.expanded'
        @set 'module.expanded', false
      else
        @set 'module.expanded', true

    togglePublish: ->
      @set 'transitioning', true
      setTimeout (=>
        @set 'transitioning', false
      ),1000

      @set 'hover', false
      
      if @get 'published'
        @set 'published', false
      else
        @set 'published', true
