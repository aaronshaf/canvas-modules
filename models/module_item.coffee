define [
  'ember'
  'jquery'
  './module'
  'vendor/ember/ember-model'
], (Ember,$,Module) ->
  return
  attr = Ember.attr
  hasMany = Ember.hasMany
  course_id = window.ENV.COURSE_ID

  ModuleItem = Ember.Model.extend
    # module: Ember.belongsTo('Module', {key: 'module_id'}),
    id: attr()
    position: attr(Number)
    title: attr()
    indent: attr(Number)
    type: attr()
    content_id: attr(Number)
    html_url: attr()
    url: attr()
    page_url: attr()
    external_url: attr()
    new_tab: attr(Boolean)
    completion_requirement: attr(Object)

  ModuleItem.url = '/api/v1/courses/' + course_id + '/modules/' + module_id

  ModuleItem

  # ModuleItem = Ember.Object.extend(Ember.Evented,
  #   # find: ->
  #   indentClass: (->
  #     'indent-' + this.get('indent')
  #   ).property('indent')
  #   iconClass: (->
  #     'icon-' + this.get('type').toLowerCase()
  #   ).property('type')
  #   # visibleClass: (->
  #   #   this.get('visible') ? 'visible' : 'hidden'
  #   # ).property('visible')
  # ).reopenClass
  #   findAll: (course_id,module) ->
  #     url = '/api/v1/courses/' + course_id + '/modules'
  #     $.getJSON url + "/" + module.id + "/items", success = (items) ->
  #       itemsArray = items.map((item) ->
  #         item = ModuleItem.create item
  #         item.set 'visible', true
  #         item
  #       )
  #       module.set 'items', Ember.ArrayProxy.create(content: itemsArray)
