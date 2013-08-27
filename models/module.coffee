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

  Module = Ember.Model.extend 
    id: attr()
    workflow_state: attr()
    position: attr(Number)
    name: attr()
    unlock_at: attr() # Use Date?
    require_sequential_process: attr(Boolean)
    prerequisite_module_ids: attr(Array)
    items_count: attr(Number)
    items_url: attr()
    items: hasMany(ModuleItem, {key: 'items', embedded: true})
    state: attr()
    completed_at: attr() # Use Date?
    # didCreateRecord: ->
    #   console.log "yess!!!"
    loadItems: ->
      console.log 'loadItems'

  Module.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/modules?include%5B%5D=items&page=1&per_page=10'

  # PaginatedRecordArray = Ember.RecordArray.extend
  #   loadItems: ->
  #     this.content.forEach (module) ->
  #       module.on 'didLoad', ->
  #         console.log '21312312312'
  #     # alert 'something'

  Module.reopenClass
    findFirstPage: (params = {}) ->
      records = Ember.RecordArray.create(model: this)
      this.adapter.findQuery(this, records, params)
      records.on 'didLoad', ->
        records.forEach (record) ->
          console.log (record.get 'items_count') > (record.get 'items.length')
      records

  Module.adapter = InstructureAdapter.create()
  Module

  # success: (results, textStatus, jqXHR) =>
  #   window.links_test = _parsePageLinks jqXHR

  #   this.addObjects results.map (result) ->
  #     module = Module.create(result)
  #     module.set 'expanded', true
  #     ModuleItem.findAll course_id, module
  #     module
