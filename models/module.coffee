define [
  'ember'
  '../lib/parse_page_links'
], (Ember,parsePageLinks) ->
  # ModuleItem = Ember.Object.extend()

  Module = Ember.Object.extend()
  Module.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/modules?include%5B%5D=items&page=1&per_page=50'

  Module.reopen
    items: (->
      items = []
      if not @items?.length and @items_count and @items_url?
        Ember.$.getJSON @get('items_url'), (data, textStatus, jqXHR) =>
          items.addObjects data
          items.set 'links', parsePageLinks jqXHR
      items
    ).property()

  Module.reopenClass
    records: Ember.ArrayProxy.create content: []
    findAll: ->
      Ember.$.ajax
        url: @url
        dataType: 'json'
        contentType: 'application/json; charset=utf-8'
        success: (data, textStatus, jqXHR) =>
          records = data.map (record, index, arr) ->
            record = Module.create record
          Module.records.pushObjects records
          window.records = Module.records
          # Module.records.set 'links', parsePageLinks jqXHR
        error: (jqXHR, textStatus, errorThrown) ->
          console.log 'Error when fetching records', {jqXHR, textStatus, errorThrown}
      Module.records
    loadNextPage: ->
      url = Module.records.get('links.next')
      return unless url
      Module.records.set 'loading', true
      Module.records.set 'links.next', null
      Ember.$.getJSON url, (data, textStatus, jqXHR) =>
        records = data.map (record) -> record = Module.create record
        Module.records.pushObjects records
        Module.records.set 'loading', false
        Module.records.set 'links', parsePageLinks jqXHR
  Module
