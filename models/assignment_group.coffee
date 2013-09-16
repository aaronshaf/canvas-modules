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