define ['ember'], (Ember) ->

  ContentIconComponent = Ember.Component.extend

    tagName: 'i'

    classNameBindings: ['iconClass']

    iconClass: (->
      @iconClasses[@get('type')] || 'icon-document'
    ).property('type')

    iconClasses:
      'ModuleItem'   : "icon-module"
      'File'         : "icon-download"
      'Page'         : "icon-document"
      'Discussion'   : "icon-discussion"
      'Assignment'   : "icon-assignment"
      'Quiz'         : "icon-quiz"
      'ExternalTool' : "icon-link"

