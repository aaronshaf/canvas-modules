define [
  'Ember'
], (Ember) ->
  Ember.Route.extend
    model: ->
      [1,2,3]
      # url = '/api/v1/courses/' + window.ENV.COURSE_ID + '/modules'
      # window.url2 = window.ENV.API_HOST + url
      # $.getJSON(url)
      # window.ENV.API_HOST + 
      # $.getJSON(window.ENV.API_HOST + url).then (modules) ->
      #   # console.log modules
      #   modules = Ember.ArrayProxy.create(content: modules)
      #   modules.map (module) ->
      #     model = Ember.Object.create(module)
          
      #     # side effect, fetch items for module
      #     $.getJSON(window.ENV.API_HOST + url + "/" + module.id + "/items").then (items) ->
      #       items = items.map((item) ->
      #         Ember.Object.create item
      #       )
      #       items = Ember.ArrayProxy.create(content: items)
      #       model.set "items", items
      #     .bind(this)
      #     model