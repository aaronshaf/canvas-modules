requirejs.config
  paths:
    'ember': 'vendor/ember/ember',
    'handlebars': 'vendor/handlebars/handlebars-1.0.0'
    'underscore': 'vendor/underscore/underscore'
    'sinon': 'vendor/sinon/lib/sinon'
    'sinon-qunit': 'vendor/sinon-qunit/lib/sinon-qunit'

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
    'vendor/sinon/lib/sinon/assert':
      deps: ['sinon']
      exports: 'sinon'
    'vendor/sinon/lib/sinon/util/fake_server':
      deps: ['sinon','vendor/sinon/lib/sinon/util/fake_xml_http_request']
      exports: 'sinon'
    'vendor/sinon/lib/sinon/util/fake_xml_http_request':
      deps: ['sinon']
      exports: 'sinon'

  urlArgs: 'bust=' + (new Date()).getTime()

require ['jquery'],($) ->
  $.getJSON 'dev/config.json', (config) ->
    window.ENV = config?.ENV

    if config.use_fake_server or QUnit?
      require [
        'compiled/tests/fake_server'
        'compiled/main'
        'compiled/templates'
      ], (FakeServer,App) ->
        fake_server = FakeServer()

        if QUnit?
          app = App.create
            rootElement: '#qunit-fixture'
        else
          app = App.create()        
    else
      require [
        'compiled/main'
        'compiled/templates'
      ], (App) ->
        app = App.create()
