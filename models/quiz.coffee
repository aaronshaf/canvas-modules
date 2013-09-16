define [
  'ember'
  './base'
], (Ember,BaseModel) ->
  Quiz = BaseModel.extend()
  Quiz.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/quizzes'

  Quiz.reopenClass
    records: Ember.ArrayProxy.create content: []
