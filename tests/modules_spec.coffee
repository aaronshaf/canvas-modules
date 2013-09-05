QUnit.autostart = false

require [
  'jquery'
  'ember'
  'compiled/tests/fake_server'
  'compiled/main'
  'compiled/models/module'
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
      # @server.restore()
      @container.remove()
      # To do: reset app

  asyncTest 'Pagination', 4, ->
    Module.url = '/api/v1/courses/1/modules'

    app = App.create
      rootElement: @container
      ready: =>
        # To do: Use Ember.run.later
        setTimeout (=>
          equal $('.module',@container).length,50
          window.scrollTo 0, 5000
          setTimeout (=>
            equal $('.module',@container).length,100
            equal $('.module-item',@container).length,11
            $('.next-module-item-page-button').click()
            setTimeout (=>
              equal $('.module-item',@container).length,21
              QUnit.start()
            ), 200
          ), 200
        ), 100
