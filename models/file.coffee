define [
  'ember'
  './base'
], (Ember,BaseModel) ->
  File = BaseModel.extend()
  File.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/files'

  File.reopenClass
    records: Ember.ArrayProxy.create content: []
