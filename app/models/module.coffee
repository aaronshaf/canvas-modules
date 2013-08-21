###
Consult:

https://gist.github.com/rpflorence/6274274
https://gist.github.com/rpflorence/6274302
https://gist.github.com/rpflorence/6274317
###

define [
  'Ember',
  'jquery',
  'underscore',
  './module_item',
  'vendor/ember/ember-model'
], (Ember,$,_,ModuleItem) ->
  attr = Ember.attr
  hasMany = Ember.hasMany
  course_id = window.ENV.COURSE_ID

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
    nextUrl: ''
    nextPage: ->
      alert '2'

  Module.reopenClass
    findPage: findPage = (params = {}) ->
      records = PaginatedRecordArray.create()
      this.adapter.findQuery(this, records, params)
      records

  Module.url = '/api/v1/courses/' + course_id + '/modules'

  Ember.InstructureRESTAdapter = Ember.RESTAdapter.extend
    findQuery: (klass, records, params) ->
      url = this.buildURL(klass)
      # self = this

      @ajax(url, params).then (data) ->
        self.didFindQuery(klass, records, params, data);
        records

  Module.adapter = Ember.RESTAdapter.create()
  Module

  # success: (results, textStatus, jqXHR) =>
  #   window.links_test = _parsePageLinks jqXHR

  #   this.addObjects results.map (result) ->
  #     module = Module.create(result)
  #     module.set 'expanded', true
  #     ModuleItem.findAll course_id, module
  #     module

# Source: https://github.com/instructure/canvas-lms/blob/stable/app/coffeescripts/collections/PaginatedCollection.coffee
_parsePageLinks = (xhr) ->
  nameRegex = /rel="([a-z]+)/
  linkRegex = /^<([^>]+)/ # Matches the full link, e.g. "/api/v1/accounts/1/users?page=1&per_page=15"
  pageRegex = /\Wpage=(\d+)/
  perPageRegex = /\per_page=(\d+)/

  linkHeader = xhr.getResponseHeader('link')?.split(',')
  linkHeader ?= []
  _.reduce linkHeader, reduceFn = (links, link) ->
    key = link.match(nameRegex)[1]
    val = link.match(linkRegex)[1]
    links[key] = val
    links
  , {}