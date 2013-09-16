define [
  'ember'
  './base'
], (Ember,BaseModel) ->
  AssignmentGroup = BaseModel.extend()
  AssignmentGroup.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/assignment_groups'

  AssignmentGroup.reopenClass
    records: Ember.ArrayProxy.create content: []
