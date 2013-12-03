define ['ember', 'jquery', 'underscore'], (Ember, $, {throttle}) ->
  ModuleItemView = Ember.View.extend
    tagName: 'module-item'

    templateName: 'item'

    classNameBindings: ['indentClass']

    attributeBindings: ['contextmenu:contextmenuId']

    indentClass: (->
      'indent-' + @get('controller.indent')
    ).property('controller.indent')
