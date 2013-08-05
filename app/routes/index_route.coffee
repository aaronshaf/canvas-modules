define [
  'ember',
  'jquery'
], (Ember, $) ->
  Ember.Route.extend
    model: ->
      url = '/api/v1/courses/' + window.ENV.COURSE_ID + '/modules'

      $.getJSON(url).then success = (modules) ->
        modules = Ember.ArrayProxy.create(content: modules)
        modules.map (module) ->
          model = Ember.Object.create(module)
          # side effect, fetch items for module
          $.getJSON(url + "/" + module.id + "/items").then (success = (items) ->
            items = items.map((item) ->
              Ember.Object.create item
            )
            items = Ember.ArrayProxy.create(content: items)
            model.set "items", items
          ).bind(this)
          model