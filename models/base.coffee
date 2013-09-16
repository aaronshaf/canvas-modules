define [
  'ember'
  '../lib/parse_page_links'
  'jquery'
  'underscore'
], (Ember,parsePageLinks,$,_) ->
  BaseModel = Ember.Object.extend()
  BaseModel.reopenClass
    # records: Ember.ArrayProxy.create content: []
    
    addRecord: (assignment) ->
      Ember.$.ajax
        data: {assignment}
        dataType: 'json'
        url: @url
        type: 'post'
        success: (data, textStatus, jqXHR) =>
          console.log 'success', data
        error: (error) ->
          console.log 'error: ', error

    findAll: ->
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
