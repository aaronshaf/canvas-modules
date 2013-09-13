define [
  'ember'
], (Ember) ->
  AddModuleItemComponent = Ember.Component.extend
    isAssignment: true
    types: [
      {key: 'assignment', value: 'Assignment'}
      {key: 'quiz', value: 'Quiz'}
      {key: 'attachment', value: 'File'}
      {key: 'wiki_page', value: 'Content Page'}
      {key: 'discussion_topic', value: 'Discussion'}
      {key: 'context_module_sub_header', value: 'Text Header'}
      {key: 'external_url', value: 'External URL'}
      {key: 'context_external_tool', value: 'External Tool'}
    ]
    
    isAssignment: (-> @get('type') is 'assignment').property('type')
    isQuiz: (-> @get('type') is 'quiz').property('type')
    isWikiPage: (-> @get('type') is 'wiki_page').property('type')
    isAttachment: (-> @get('type') is 'attachment').property('type')
    isDiscussionTopic: (-> @get('type') is 'discussion_topic').property('type')
    isContextModuleSubHeader: (-> @get('type') is 'context_module_sub_header').property('type')
    isExternalUrl: (-> @get('type') is 'external_url').property('type')
    isContextExternalTool: (-> @get('type') is 'context_external_tool').property('type')

    actions:
      toggleProperty: Ember.Controller.prototype.toggleProperty #@toggleProperty