require [
  'jquery'
],($, App) ->
  $.getJSON 'dev/config.json', (config) ->
    window.ENV = config[config?.environment]?.ENV

    require [
      'compiled/main'
      'compiled/templates'
    ], (App) ->
    
      # if config.use_fake_server
      #   fake_server = FakeServer()

      # if QUnit?
        # window.test.app = App.create
        #   rootElement: '#qunit-fixture'

      window.test = {}
      window.test.app = App.create()     
