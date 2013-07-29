define [
  'Ember'
], (Ember) ->
  Ember.Route.extend
    model: ->
      api = window.ENV.API or ''
      $.getJSON(api + '/api/v1/courses/' + window.ENV.COURSE_ID + '/modules').then ->
        modules = Ember.ArrayProxy.create({content: modules})
        modules.map (module) ->
          model = Ember.Object.create(module)
          $.getJSON(api + '/api/v1/courses/' + window.ENV.COURSE_ID + '/modules/' + module.id + '/items').then (items) ->
            items = items.map (item) ->
              Ember.Object.create(item)
            items = Ember.ArrayProxy.create({content: items})
            model.set('items', items)
          model