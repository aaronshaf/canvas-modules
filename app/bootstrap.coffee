window.ENV = {}
window.ENV.API_HOST = 'http://localhost:8000'
window.ENV.COURSE_ID = 1

requirejs.config
  paths:
    'ember': 'vendor/ember/ember'
    'handlebars': 'vendor/handlebars/handlebars-1.0.0-rc4'
    'jquery.csrf': 'vendor/instructure/jquery.csrf-1.1'

  map:
    '*':
      'Handlebars': 'handlebars'
      'ember': 'vendor/ember/ember-1.0.0-rc6'
      'Ember': 'vendor/ember/ember-1.0.0-rc6'
      'underscore': 'vendor/lodash/lodash-private-1.3.1'
      'lodash': 'vendor/lodash/lodash-private-1.3.1'
      'jquery': 'jquery-private-2.0.3'
      'jquery.ui.sortable': 'vendor/jquery.ui/jquery.ui.sortable-1.10.3'

  shim:
    ember:
      deps: ['jquery','handlebars']
      exports: 'Ember'
    handlebars:
      deps: ['jquery']
      exports: 'Handlebars'
  #   jquery:
  #     exports: '$'
  #     init: ($) ->
  #       alert '1'
  #       $.ajaxSetup({headers: { Authorization: 'Bearer ' + ''}});
  #       $
  #   'jquery.csrf':
  #     deps: ['jquery']
  #   'jquery.ui.sortable':
  #     deps: [
  #       'jquery.ui.core',
  #       'jquery.ui.mouse',
  #       'jquery.ui.widget',
  #     ]
  #   'jquery.ui.mouse':
  #     deps: [
  #       'jquery.ui.widget'
  #     ]

define 'jquery-private-2.0.3', ['vendor/jquery/jquery-2.0.3'], -> $.noConflict true

require [
  'ember'
  'compiled/ember/modules/config/app'
  'compiled/ember/modules/routes/index_route'
  'compiled/ember/modules/views/index_view'
  'compiled/ember/modules/templates'
  'jquery.csrf'
  # 'compiled/ember/modules/controllers/module_controller'
  # 'compiled/ember/modules/config/routes',
], (Ember, App, IndexRoute, IndexView, templates) -> # Ember, App, IndexRoute, IndexView, templates
  Ember.TEMPLATES = templates
  App.IndexRoute = IndexRoute
  App.IndexView = IndexView
  # # App.ModuleController = ModuleController
  window.App = App