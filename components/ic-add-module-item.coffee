define [
  'ember'
  './ic_popover_component'
  '../models/module_item'
  '../models/assignment'
  '../models/assignment_group'
  '../models/discussion_topic'
  '../models/external_tool'
  '../models/file'
  '../models/module_item'
  '../models/page'
  '../models/quiz'
], (
  Ember
  PopoverComponent
  ModuleItem
  Assignment
  AssignmentGroup
  DiscussionTopic
  ExternalTool
  ExternalURL
  File
  Page
  Quiz
) ->
  AddModuleItemComponent = PopoverComponent.extend
    init: ->
      @_super.apply @, arguments
      @reset()

    type: 'assignment'
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
    
    isAssignment: (-> @get('type') is 'assignment' ).property('type')
    isQuiz: (-> @get('type') is 'quiz').property('type')
    isWikiPage: (-> @get('type') is 'wiki_page').property('type')
    isAttachment: (-> @get('type') is 'attachment').property('type')
    isDiscussionTopic: (-> @get('type') is 'discussion_topic').property('type')
    isContextModuleSubHeader: (-> @get('type') is 'context_module_sub_header').property('type')
    isExternalUrl: (-> @get('type') is 'external_url').property('type')
    isContextExternalTool: (-> @get('type') is 'context_external_tool').property('type')

    assignment_groups: (-> AssignmentGroup.findFirstPage() ).property()
    assignments: (-> Assignment.findFirstPage() ).property()
    quizzes: (-> Quiz.findFirstPage() ).property()
    files: (-> File.findFirstPage() ).property()
    pages: (-> Page.findFirstPage() ).property()
    discussion_topics: (-> DiscussionTopic.findFirstPage() ).property()
    quizzes: (-> Quiz.findFirstPage() ).property()
    headers: (-> Header.findFirstPage() ).property()
    external_urls: (-> ExternalURL.findFirstPage() ).property()
    external_tools: (-> ExternalTool.findFirstPage() ).property()

    reset: ->
      @set 'module_item', {}
      @set 'new_assignment', {}

    actions:
      toggleProperty: Ember.Controller.prototype.toggleProperty #@toggleProperty
      save: ->
        if @get('isNewAssignment') and @get('new_assignment.name')
          Assignment.addRecord(@get('new_assignment')).then (assignment) =>
            @set 'isNewAssignment', false
            @set 'module_item.assignment_id', assignment.id

        # this
        # debugger
        # alert 'save'
        # Module.addRecord @get 'module'
        # @close()
        # @reset()
