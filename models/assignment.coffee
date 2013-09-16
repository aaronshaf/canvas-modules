define [
  'ember'
  './base'
], (Ember,BaseModel) ->
  Assignment = BaseModel.extend()
  Assignment.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/assignments'

  Assignment.reopenClass
    records: Ember.ArrayProxy.create content: []
