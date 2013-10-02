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
  'underscore'
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
  _
) ->
  AddModuleItemComponent = PopoverComponent.extend
    init: -> @_super.apply @, arguments

    new_assignment: {}

    module_item: (->
      ModuleItem.create
        module: @get('module')
    ).property()

    type: 'assignment'
    types: _.map ModuleItem.types, (value, key) -> return {key, value}

    completion_requirement_types: (->
      _.map ModuleItem.completion_requirement_types, ({label,applies_to}, key) =>
        # possibly for when multiple types are supported
        # checked = @get('module_item.completion_requirement.type').indexOf(key) > -1

        checked = @get('module_item.completion_requirement.type') is key
        disabled = false
        return {key, label, checked, disabled}  
    ).property('module_item.type') #'module_item.completion_requirement.type.@each'

    is: identifiers

    assignment_groups: (-> AssignmentGroup.findFirstPage() ).property()
    assignments: (-> Assignment.findFirstPage() ).property()
    quizzes: (-> Quiz.findFirstPage() ).property()
    files: (-> File.findFirstPage() ).property()
    pages: (-> Page.findFirstPage() ).property()
    discussion_topics: (-> DiscussionTopic.findFirstPage() ).property()
    quizzes: (-> Quiz.findFirstPage() ).property()
    headers: (-> Header.findFirstPage() ).property()
    # external_urls: (-> ExternalURL.findFirstPage() ).property()
    # external_tools: (-> ExternalTool.findFirstPage() ).property()

    save: ->
      @get('module_item').save().then =>
        @close()
        @reset()

    actions:
      toggleProperty: Ember.Controller.prototype.toggleProperty
      save: ->
        # possibly for when multiple types are supported
        # @set 'module_item.completion_requirement.type', @get('completion_requirements').filterProperty('checked',true).mapProperty('key')
        type = @get('completion_requirement_types').filterProperty('checked',true).mapProperty('key')
        @set 'module_item.completion_requirement.type', type 

        if @get('isNewAssignment') and @get('new_assignment.name')
          Assignment.addRecord(@get('new_assignment')).then (assignment) =>
            @set 'isNewAssignment', false
            @set 'module_item.content_id', assignment.id
            @save()
        else if @get('isNewQuiz') and @get('new_quiz.title')
          Quiz.addRecord(@get('new_assignment')).then (quiz) =>
            @set 'isNewQuiz', false
            @set 'module_item.content_id', quiz.id
            @save()
        else
          switch @get('module_item.type')
            when 'Assignment', 'Quiz', 'Discussion'
              if @get('module_item.content_id')
                @save()
            when 'ContentPage'
              if @get('module_item.page_url')
                @save()
            when 'SubHeader'
              if @get('module_item.title')
                @save()
            when 'ExternalUrl'
              if @get('module_item.external_url')
                @save() 

          # if @get('module_item.content_id')
          #   @save()

  # isAssignment, isQuiz, etc. 
  identifiers = {}
  _.each ModuleItem.types, (value, key) ->
    identifiers["is#{key}"] = (-> @get('module_item.type') is key).property('module_item.type')
  AddModuleItemComponent.reopen identifiers
