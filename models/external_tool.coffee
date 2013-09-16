define [
  'ember'
  './base'
], (Ember,BaseModel) ->
  ExternalTool = BaseModel.extend()
  ExternalTool.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/external_tools'

  ExternalTool.reopenClass
    records: Ember.ArrayProxy.create content: []
