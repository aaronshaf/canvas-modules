define [
  'ember',
  'jquery'
], (Ember, $) ->
  Ember.Route.extend
    model: ->
      url = '/api/v1/courses/' + window.ENV.COURSE_ID + '/modules'
      $.getJSON(window.ENV.API_HOST + url).then (modules) ->
        # console.log modules
        modules = Ember.ArrayProxy.create(content: modules)
        modules.map (module) ->
          model = Ember.Object.create(module)
          
          # side effect, fetch items for module
          $.getJSON(window.ENV.API_HOST + url + "/" + module.id + "/items").then ((items) ->
            items = items.map((item) ->
              Ember.Object.create item
            )
            items = Ember.ArrayProxy.create(content: items)
            model.set "items", items
          ).bind(this)
          model