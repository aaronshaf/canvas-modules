define [
  'ember'
  '../lib/parse_page_links'
  'jquery'
  'underscore'
], (Ember,parsePageLinks,$,_) ->
  AssignmentGroup = Ember.Object.extend()
  AssignmentGroup.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/assignment_groups'

  AssignmentGroup.reopenClass
    records: Ember.ArrayProxy.create content: []

    findAll: ->
      Ember.$.ajax
        dataType: 'json'
        url: @url,
        success: (data, textStatus, jqXHR) =>
          records = data.map (record) -> record = AssignmentGroup.create record
          AssignmentGroup.records.pushObjects records
        error: (error) ->
          console.log 'error: ', error
      AssignmentGroup.records

    # addRecord: (assignment_group) ->
    #   Ember.$.ajax
    #     data: assignment_group
    #     dataType: 'json'
    #     url: @url
    #     type: 'post'
    #     success: (data, textStatus, jqXHR) =>
    #       console.log 'success', data
    #     error: (error) ->
    #       console.log 'error: ', error