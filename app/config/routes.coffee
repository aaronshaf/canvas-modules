define [
  'compiled/ember/context_modules2/config/app'
], (App) ->

  # App.ModuleAddRoute = Ember.Route.extend
  #   renderTemplate: ->
  #     @render 'add',
  #       into: 'index'
  #       outlet: 'modal'
  #   model: (params) ->
  #     console.log 'params', params
  #     []

  # App.ModuleAddRoute = Ember.Route.extend
  #   renderTemplate: ->
  #     @render 'add',
  #       into: 'index'
  #       outlet: 'modal'
  #   model: (params) ->
  #     console.log 'params', params
  #     []

  App.ModuleSearchRoute = Ember.Route.extend
    model: (params) ->
      console.log 'params', params
      []

  App.Router.map ->
    @resource 'modules', path: '/' , ->
      @route 'add'
      @resource 'module_items',
        path: '/:module_id/items'
      , ->
      	@route 'add',
          path: '/add'
      @route 'search',
        path: 'search/:query'
    # @resource 'modules'