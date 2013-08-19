define [
  'Ember',
  './module'
], (Ember,Module) ->
  Ember.Object.extend
    # find: ->
    indentClass: (->
      'indent-' + this.get('indent')
    ).property('indent')
    iconClass: (->
      'icon-' + this.get('type').toLowerCase()
    ).property('type')
    # visibleClass: (->
    #   this.get('visible') ? 'visible' : 'hidden'
    # ).property('visible')