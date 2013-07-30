window.ENV = {}
window.ENV.API_HOST = 'http://localhost:3000'
window.ENV.COURSE_ID = 1

requirejs.config
  paths:
    underscore: 'vendor/lodash/lodash'
    jquery: 'vendor/jquery/jquery.min'
    Ember: 'vendor/ember/ember'
    Handlebars: 'vendor/handlebars/handlebars.runtime'
    'jquery.csrf': 'libs/jquery.csrf'
    'jqueryui/dialog': 'http://localhost:3000/javascripts/vendor/jqueryui/sortable'
    'jqueryui/mouse': 'http://localhost:3000/javascripts/vendor/jqueryui/mouse'
    'jqueryui/core': 'http://localhost:3000/javascripts/vendor/jqueryui/core'
    'jqueryui/widget': 'http://localhost:3000/javascripts/vendor/jqueryui/widget'
    'jqueryui/widget': 'http://localhost:3000/javascripts/vendor/jqueryui/widget'
    'jqueryui/widget-unpatched': 'http://localhost:3000/javascripts/vendor/jqueryui/widget-unpatched'
  shim:
    jquery:
      exports: '$'
    'jquery.csrf':
      deps: ['jquery']
    'jquery.ui':
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
  'compiled/ember/modules/views/index_view'
  'jquery'
  'compiled/ember/modules/templates'
  'jquery.csrf'
  # 'compiled/ember/modules/controllers/module_controller'
  
  # 'compiled/ember/modules/config/routes',
], (Ember, App, IndexRoute, IndexView, $, templates) ->
  Ember.TEMPLATES = templates
  App.IndexRoute = IndexRoute
  App.IndexView = IndexView
  # App.ModuleController = ModuleController
  window.App = App