define [
  'ember'
  'jquery'
  './base'
], (Ember,$,BaseModel) ->
  ModuleItem = BaseModel.extend
    init: ->
      @setUrl()
      if not @get('module') then throw 'ModuleItem cannot be instantiated without Module'

    # Default values
    type: 'Assignment'
    indent: 0
    completion_requirement:
      type: []

    setUrl: ->
      @set '_url', "/api/v1/courses/#{window?.ENV?.COURSE_ID}/modules/#{@get('module.id')}/items"
      if @get('id')
        @set '_url', @get('_url') + '/' + @get('id')

    save: ->
      @_super.apply(@,arguments).then =>
        @get('module').addItem @

  ModuleItem.reopenClass
    container: 'module_item'

    attributes:
      module_id: Number
      title: String
      type: String
      content_id: String
      position: Number
      indent: Number
      page_url: String
      url: String
      external_url: String
      new_tab: Boolean
      completion_requirement:
        type: String
        min_score: Number
      published: Boolean
      module_id: String

    findFirstPage: findFirstPage = (params = {}) ->
      records = PaginatedRecordArray.create(modelClass: this)
      this.adapter.findQuery(this, records, params)
      records

  ModuleItem.types =
    Assignment: 'Assignment'
    Quiz: 'Quiz'
    ContentPage: 'Page'
    Discussion: 'Discussion'
    SubHeader: 'Text Header'
    ExternalUrl: 'External URL'
    ExternalTool: 'External Tool'

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
