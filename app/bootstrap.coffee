requirejs.config
  paths:
    jquery: 'vendor/jquery/jquery'
    Ember: 'vendor/ember/ember'
    Handlebars: 'vendor/handlebars/handlebars'
  shim:
    jquery:
      exports: '$'
    Handlebars:
      exports: 'Handlebars'
    Ember:
      deps: ['jquery','Handlebars']
      exports: 'Ember'
    templates:
      deps: ['Ember']

require [
  'compiled/ember/modules/config/app'
  'compiled/ember/modules/routes/index_route'
  'jquery'
  # 'compiled/ember/modules/controllers/module_controller'
  'compiled/ember/modules/templates'
  # 'compiled/ember/modules/config/routes',
], (App, IndexRoute, $) ->
  $(document.body).addClass 'context_modules2'
  App.IndexRoute = IndexRoute
  # App.ModuleController = ModuleController
  window.App = App