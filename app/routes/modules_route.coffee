define [
  'Ember',
  '../models/module',
  '../models/module_item'
], (Ember, Module, ModuleItem) ->
  Ember.Route.extend
    model: ->
      url = '/api/v1/courses/' + window.ENV.COURSE_ID + '/modules'
      Module.find()
    events:
      showAddModuleModal: ->
        this.modelFor('index').unshiftObject(Ember.Object.create(
          name: 'Unnamed'
        ))
        # this.controllerFor('reveal').set('model',awefwae)
