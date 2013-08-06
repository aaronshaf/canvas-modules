window.ENV = {}
window.ENV.COURSE_ID = 1

bundle = 'context_modules2'

requirejs.config
  paths:
    'ember': 'vendor/ember/ember'
    'handlebars': 'vendor/handlebars/handlebars-1.0.0-rc4'
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

  urlArgs:"bust=" + (new Date()).getTime()

require [
  'ember'
  # "compiled/ember/#{bundle}/config/app"
  # "compiled/ember/#{bundle}/routes/index_route"
  # "compiled/ember/#{bundle}/views/index_view"
  "compiled/templates"
  # 'compiled/ember/#{bundle}/controllers/module_controller'
  # "compiled/ember/#{bundle}/config/routes",
], (Ember, templates) -> # Ember, App, IndexRoute, IndexView, templates, IndexRoute, IndexView, 
  Ember.TEMPLATES = templates
  # App.IndexRoute = IndexRoute
  # App.IndexView = IndexView
  App = Ember.Application.create
    # enableLogging: true
    # LOG_TRANSITIONS: true
    # LOG_TRANSITIONS_INTERNAL: true
    # LOG_VIEW_LOOKUPS: true
    # LOG_ACTIVE_GENERATION: true
    rootElement: '#content'

  # Ember.testing = true
  # Ember.LOG_BINDING = true
  # Ember.ENV.RAISE_ON_DEPRECATION = true

  App.IndexRoute = Ember.Route.extend
    model: ->
      Ember.ArrayProxy.create
        content: [{name:'test1'},{name:'test2'}]

  # App.IndexRoute = Ember.Route.extend
  #   model: ->
  #     [{name:'test3'},{name:'test4'}]

  # App.ApplicationController

  # App.ModuleController = ModuleController
  window.App = App
