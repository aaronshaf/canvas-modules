define [
  'ember'
  '../lib/parse_page_links'
  'jquery'
  'underscore'
], (Ember,parsePageLinks,$,_) ->
  BaseModel = Ember.Object.extend()
  BaseModel.reopenClass
    # records: Ember.ArrayProxy.create content: []
    
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
