QUnit.autostart = false

require [
  'jquery'
  'ember'
  'compiled/tests/fake_server'
  'compiled/main' # ember/context_modules2/
  'compiled/models/module' # ember/context_modules2/
  'compiled/templates'
], ($,Ember,FakeServer,App,Module) ->
  # if parseFloat(requirejs.version) < 2.1
  #   return []

  module 'Modules',
    setup: ->
      window.ENV.COURSE_ID = 1
      $('#qunit-fixture').css
        position: 'absolute'
        height: '500px'
        width: '500px'
        top: 'inherit'
        left: 'inherit'
        backgroundColor: 'yellow'
      # App.setupForTesting()
      # App.injectTestHelpers()
      # App.reset()
      @test1 = true
      @container = $('<div id="content">')
      @container.appendTo $('#qunit-fixture')
      @server = FakeServer()
    teardown: ->
      @server.restore()
      @container.remove()
      # To do: reset app

  asyncTest 'More modules loaded when scrolled near bottom of document', 2, ->
    Module.url = '/api/v1/courses/1/modules'

    app = App.create
      rootElement: @container
      ready: =>
        # console.log @container
        # debugger
        setTimeout (=>
          equal $('.module',@container).length,10
          window.scrollTo 0, 5000
          setTimeout (=>
            equal $('.module',@container).length,20
            QUnit.start()
          ), 100
        ), 100
