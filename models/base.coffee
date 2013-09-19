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

    save: ->
      new Ember.RSVP.Promise (resolve, reject) =>
        data = data
        if @get 'api_container'
          data = {}
          data[@get('api_container')] = data

        this
        test = 'abc'
        alert '?'
        debugger
        Ember.$.ajax
          type: if @get('id') then 'put' else 'post'
          url: @get('_url')
          data: data
          dataType: 'json'
          success: (data) =>
            @setProperties data
            resolve @
          fail : (error) =>
            # console.log {error}
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
