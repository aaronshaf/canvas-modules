QUnit.autostart = false

require [
  'jquery'
  'ember'
  'compiled/tests/fake_server'
  'compiled/main' # ember/context_modules2/
  'compiled/models/module' # ember/context_modules2/
], ($,Ember,FakeServer,App,Module) ->
  # temporary: included in async tests only
  
  # if parseFloat(requirejs.version) < 2.1
  #   return []

  # alert requirejs.version
  # true
  # Ember.testing = true

  module 'Modules',
    setup: ->
      # App.setupForTesting()
      # App.injectTestHelpers()
      # App.reset()
      @server = FakeServer()
      @container = $('<div>')
      $('#qunit-fixture').append @container
    # teardown: ->
      # @server.restore()
      # @container.remove()

  asyncTest 'More modules loaded when scrolled near bottom of document', 1, ->
    Module.url = '/api/v1/courses/1/modules'
    try
      debugger
      app = App.create
        rootElement: @container
        ready: ->
          alert 'z'
    catch error
      console.log error
      # ready: ->
      #   alert 2
      #   console.log 'ready'
      #   setTimeout (->
      #     alert 1
      #     window.scrollTo 0, 5000
      #     setTimeout (->
      #       equal $('.module',@container).length,20
      #       QUnit.start()
      #     ), 50
      #   ), 50
