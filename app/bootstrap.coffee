window.ENV = {}
window.ENV.API_HOST = 'http://localhost:8000'
window.ENV.COURSE_ID = 1

requirejs.config
  paths:
    ember: 'vendor/ember/ember'
    handlebars: 'vendor/handlebars/handlebars.runtime'
    'jquery.csrf': 'libs/jquery.csrf'

  map:
    '*':
      'ember': 'ember-1.0.0.rc6'
      'lodash': 'lodash-private-1.3.1.js'
      'jquery': 'jquery-private-2.0.3.js'

  shim:
    jquery:
      exports: '$'
      init: ($) ->
        alert '1'
        $.ajaxSetup({headers: { Authorization: 'Bearer ' + ''}});
        $
    'jquery.csrf':
      deps: ['jquery']
    'jquery.ui.sortable':
      deps: [
        'jquery.ui.core',
        'jquery.ui.mouse',
        'jquery.ui.widget',
      ]
    'jquery.ui.mouse':
      deps: [
        'jquery.ui.widget'
      ]
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
  'compiled/ember/modules/templates'
  'jquery.csrf'
  # 'compiled/ember/modules/controllers/module_controller'
  
  # 'compiled/ember/modules/config/routes',
], (Ember, App, IndexRoute, IndexView, templates) ->
  Ember.TEMPLATES = templates
  App.IndexRoute = IndexRoute
  App.IndexView = IndexView
  # App.ModuleController = ModuleController
  window.App = App