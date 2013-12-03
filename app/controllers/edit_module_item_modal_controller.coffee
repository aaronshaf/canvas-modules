define ['ember'], (Ember) ->
  EditModuleItemModalController = Ember.ObjectController.extend
    type: 'assignment'

    isAssignment: (-> @get('type') is 'assignment').property('type')
    isPage: (-> @get('type') is 'page').property('type')
    isQuiz: (-> @get('type') is 'quiz').property('type')
    isFile: (-> @get('type') is 'file').property('type')
    isDiscussion: (-> @get('type') is 'discussion').property('type')
    isTextHeader: (-> @get('type') is 'text_header').property('type')
    isExternalUrl: (-> @get('type') is 'external_url').property('type')
    isExternalTool: (-> @get('type') is 'external_tool').property('type')

