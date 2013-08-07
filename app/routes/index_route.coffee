define [
  'Ember',
  'jquery'
], (Ember, $) ->
  Ember.Route.extend
    model: ->
      ModuleItem = Ember.Object.extend
        indentClass: (->
          'indent-' + this.get('indent')
        ).property('indent')
        # visibleClass: (->
        #   this.get('visible') ? 'visible' : 'hidden'
        # ).property('visible')

      url = '/api/v1/courses/' + window.ENV.COURSE_ID + '/modules'
      $.getJSON(url).then success = (modules) ->
        modules = Ember.ArrayProxy.create(content: modules)
        modules.map (module) ->
          model = Ember.Object.create(module)
          # side effect, fetch items for module
          $.getJSON(url + "/" + module.id + "/items").then (success = (items) ->
            items = items.map((item) ->
              item = ModuleItem.create item
              item.set 'visible', true
              item
            )
            items = Ember.ArrayProxy.create(content: items)
            model.set "items", items
          ).bind(this)
          model
    events:
      showAddModuleModal: ->
        this.modelFor('index').unshiftObject(Ember.Object.create(
          name: 'Unnamed'
        ))
        # this.controllerFor('reveal').set('model',awefwae)
