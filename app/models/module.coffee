###
Consult:

https://gist.github.com/rpflorence/6274274
https://gist.github.com/rpflorence/6274302
https://gist.github.com/rpflorence/6274317
###

define [
  'ember'
  'jquery'
  'underscore'
  './module_item'
  '../lib/instructure_adapter'
  'vendor/ember/ember-model'
], (Ember,$,_,ModuleItem,InstructureAdapter) ->
  attr = Ember.attr
  hasMany = Ember.hasMany
  course_id = window?.ENV?.COURSE_ID

  ModuleInterface =
    id: attr(),
    workflow_state: attr(),
    position: attr(Number),
    name: attr(),
    unlock_at: attr(), # Use Date?
    require_sequential_process: attr(Boolean),
    prerequisite_module_ids: attr(Array),
    items_count: attr(Number),
    items_url: attr(),
    # items: hasMany('ModelItem'),
    state: attr(),
    completed_at: attr() # Use Date?

  Module = Ember.Model.extend ModuleInterface

  PaginatedRecordArray = Ember.RecordArray.extend
    pushObjects: (data) ->
      @_super this.materializeData(this.get('modelClass'), data)
      this.notifyLoaded();
    nextPage: ->
      modelClass = this.get('modelClass')
      modelClass.adapter.findNextPage(modelClass, this)

  Module.reopenClass
    findPage: findPage = (params = {}) ->
      records = PaginatedRecordArray.create(modelClass: this)
      this.adapter.findQuery(this, records, params)
      records

  Module.url = '/api/v1/courses/' + course_id + '/modules'

  Module.adapter = InstructureAdapter.create()
  Module

  # success: (results, textStatus, jqXHR) =>
  #   window.links_test = _parsePageLinks jqXHR

  #   this.addObjects results.map (result) ->
  #     module = Module.create(result)
  #     module.set 'expanded', true
  #     ModuleItem.findAll course_id, module
  #     module
