requirejs.config
  paths:
    'ember': 'vendor/ember/ember',
    'handlebars': 'vendor/handlebars/handlebars-1.0.0'
    'underscore': 'vendor/underscore/underscore'
    'sinon': 'vendor/sinon/sinon-1.7.3'
    'sinon-qunit': 'vendor/sinon-qunit/sinon-qunit-1.0.0'
    'spin': 'vendor/spinjs/spin-1.3.2'

  map:
    '*':
      'Handlebars': 'handlebars'
      'ember': 'vendor/ember/ember-1.0.0-rc7'
      'Ember': 'vendor/ember/ember-1.0.0-rc7'
      'jquery': 'vendor/instructure/jquery.instructure-1.1'
      'vendor/jqueryui/sortable': 'vendor/jqueryui/sortable-1.10.3'
    'vendor/instructure/jquery.instructure-1.1':
      'jquery': 'vendor/jquery/jquery'

  shim:
    'ember':
      deps: ['jquery','handlebars']
      exports: 'Ember'
    'handlebars':
      deps: ['jquery']
      exports: 'Handlebars'
    'underscore':
      exports: '_'
    'sinon':
      exports: 'sinon'
    'sinon-qunit':
      deps: ['sinon']

  urlArgs: 'bust=' + (new Date()).getTime()