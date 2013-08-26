define [
  'jquery'
  'ember'
  './fake_server'
  'compiled/ember/context_modules2/main'
  'compiled/ember/context_modules2/models/module'
], ($,Ember,FakeServer,App,Module) ->
  # temporary: included in async tests only
  if requirejs.version < 2.1
    return

  # true
  # Ember.testing = true
  server = null
  module 'Modules: Pagination',
    setup: ->
      # App.setupForTesting()
      # App.injectTestHelpers()
      # App.reset()
      @server = FakeServer()
      @container = $('#qunit-fixture').add $('<div>')
    teardown: ->
      @server.restore()
      @container.remove()

  asyncTest 'More modules loaded when scrolled near bottom of document', 1, ->
    Module.url = '/api/v1/courses/1/modules'

    app = App.create
      rootElement: @container
      ready: ->
        console.log 'ready'
        setTimeout (->
          window.scrollTo 0, 5000
          setTimeout (->
            equal $('.module',@container).length,20
            QUnit.start()
          ), 50
        ), 50
