define [
  'ember'
  '../lib/parse_page_links'
  'jquery'
  'underscore'
], (Ember,parsePageLinks,$,_) ->
  BaseModel = Ember.Object.extend
    delete: ->
      new Ember.RSVP.Promise (resolve, reject) =>
        Ember.$.ajax
          type: 'delete'
          url: @get('_url')
          dataType: 'json'
          success: (data) =>
            @destroy()
            resolve()
          fail : (error) =>
            reject error

    serialize: ->
      data = {}

      _serialize = (obj,attributes) =>
        properties = {}
        for key, type of attributes
          if type is Number or type is String or type is Boolean
            properties[key] = obj.get key
          else if type is Array
            properties[key] = obj.get key
          else if type instanceof Object
            properties[key] = _serialize(obj.get(key),attributes[key])
        properties

      properties = _serialize(@, @constructor.attributes)

      # properties = @getProperties Object.keys(@constructor.attributes)

      if @constructor.container
        data[@constructor.container] = properties
      else
        data = properties
      data

    save: ->
      new Ember.RSVP.Promise (resolve, reject) =>
        data = @serialize()

        console.log JSON.stringify(data)

        Ember.$.ajax
          type: if @get('id') then 'put' else 'post'
          url: @get('_url')
          data: JSON.stringify(data)
          contentType: 'application/json'
          dataType: 'json'
          success: (data) =>
            @setProperties data
            @setUrl()
            resolve @
          fail: (error) =>
            reject error

  BaseModel.reopenClass
    addRecord: (record) ->
      new Ember.RSVP.Promise (resolve, reject) =>
        data = {}
        if @container?
          data[@container] = record
        else
          data = record;
        Ember.$.ajax
          data: data
          dataType: 'json'
          url: @url
          type: 'post'
          success: (data, textStatus, jqXHR) =>
            record = @create(data)
            @records.pushObject record
            resolve(record)
          error: (error) ->
            reject(error)

    findFirstPage: ->
      if not @records.get('loading') and not @records.get('length')
        @records.set 'loading', true
        Ember.$.ajax
          dataType: 'json'
          url: @url
          success: (data, textStatus, jqXHR) =>
            records = data.map (record) => record = @create record
            @records.pushObjects records
            @records.set 'loading', false
            @records.set 'links', parsePageLinks jqXHR
          error: (error) ->
            console.log 'error: ', error
      @records
