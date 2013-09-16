define [
  'ember'
  './base'
], (Ember,BaseModel) ->
  Page = BaseModel.extend()
  Page.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/pages'

  Page.reopenClass
    records: Ember.ArrayProxy.create content: []
    container: 'wiki_page'
