define [
  'ember'
  './base'
], (Ember,BaseModel) ->
  DiscussionTopic = BaseModel.extend()
  DiscussionTopic.url = '/api/v1/courses/' + window?.ENV?.COURSE_ID + '/discussion_topics'

  DiscussionTopic.reopenClass
    records: Ember.ArrayProxy.create content: []
