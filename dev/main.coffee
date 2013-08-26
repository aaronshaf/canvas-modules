requirejs.config
  paths:
    'ember': 'vendor/ember/ember',
    'vendor/ember/ember-model': 'vendor/ember-model/ember-model-0.0.8'
    'handlebars': 'vendor/handlebars/handlebars-1.0.0-rc4'
    'underscore': 'vendor/underscore/underscore-1.4.4'

  map:
    '*':
      'Handlebars': 'handlebars'
      'ember': 'vendor/ember/ember-1.0.0-rc6'
      'Ember': 'vendor/ember/ember-1.0.0-rc6'
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

  urlArgs: 'bust=' + (new Date()).getTime()

require [
  'jquery'
  'compiled/main'
  'compiled/templates.js'
], ($,App) ->
  app = App.create()