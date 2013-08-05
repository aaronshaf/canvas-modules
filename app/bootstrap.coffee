window.ENV = {}
window.ENV.COURSE_ID = 1

requirejs.config
  paths:
    'ember': 'vendor/ember/ember'
    'handlebars': 'vendor/handlebars/handlebars.runtime-1.0.0-rc4'
    'underscore': 'vendor/underscore/underscore-1.4.4'

  map:
    '*':
      'Handlebars': 'handlebars'
      'ember': 'vendor/ember/ember-1.0.0-rc6'
      'Ember': 'vendor/ember/ember-1.0.0-rc6'
      'lodash': 'vendor/lodash/lodash-private-1.3.1'
      'jquery': 'vendor/instructure/jquery.instructure-1.1'
      'vendor/jqueryui/sortable': 'vendor/jqueryui/sortable-1.10.3'

  shim:
    ember:
      deps: ['jquery','handlebars']
      exports: 'Ember'
    handlebars:
      deps: ['jquery']
      exports: 'Handlebars'
    underscore:
      exports: '_'

require [
  'ember'
  'compiled/ember/modules/config/app'
  'compiled/ember/modules/routes/index_route'
  'compiled/ember/modules/views/index_view'
  'compiled/ember/modules/templates'
  # 'compiled/ember/modules/controllers/module_controller'
  # 'compiled/ember/modules/config/routes',
], (Ember, App, IndexRoute, IndexView, templates) -> # Ember, App, IndexRoute, IndexView, templates
  Ember.TEMPLATES = templates
  App.IndexRoute = IndexRoute
  App.IndexView = IndexView
  # # # App.ModuleController = ModuleController
  window.App = App
