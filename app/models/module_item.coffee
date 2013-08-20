define [
  'Ember'
  'jquery'
  './module'
], (Ember,$,Module) ->
  ModuleItem = Ember.Object.extend(Ember.Evented,
    # find: ->
    indentClass: (->
      'indent-' + this.get('indent')
    ).property('indent')
    iconClass: (->
      'icon-' + this.get('type').toLowerCase()
    ).property('type')
    # visibleClass: (->
    #   this.get('visible') ? 'visible' : 'hidden'
    # ).property('visible')
  ).reopenClass
    findAll: (course_id,module) ->
      url = '/api/v1/courses/' + course_id + '/modules'
      $.getJSON url + "/" + module.id + "/items", success = (items) ->
        itemsArray = items.map((item) ->
          item = ModuleItem.create item
          item.set 'visible', true
          item
        )
        module.set 'items', Ember.ArrayProxy.create(content: itemsArray)
