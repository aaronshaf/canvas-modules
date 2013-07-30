window.ENV = {}
window.ENV.API_HOST = 'http://localhost:3000'
window.ENV.COURSE_ID = 1

requirejs.config
  paths:
    jquery: 'vendor/jquery/jquery.min'
    Ember: 'vendor/ember/ember'
    Handlebars: 'vendor/handlebars/handlebars.runtime'
    'jquery.csrf': 'libs/jquery.csrf'
  shim:
    jquery:
      exports: '$'
    'jquery.csrf':
      deps: ['jquery']
    Handlebars:
      exports: 'Handlebars'
    Ember:
      deps: ['jquery','Handlebars']
      exports: 'Ember'
    templates:
      deps: ['Ember']

require [
  'Ember'
  'compiled/ember/modules/config/app'
  'compiled/ember/modules/routes/index_route'
  'jquery'
  'compiled/ember/modules/templates'
  'jquery.csrf'
  # 'compiled/ember/modules/controllers/module_controller'
  
  # 'compiled/ember/modules/config/routes',
], (Ember, App, IndexRoute, $, templates) ->
  Ember.TEMPLATES = templates
  App.IndexRoute = IndexRoute
  # App.ModuleController = ModuleController
  window.App = App