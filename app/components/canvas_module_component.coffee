define [
  'Ember'
], (Ember) ->
  Ember.Component.extend
    toggleExpandCollapse: ->
      if this.get 'module.expanded'
        this.set 'module.expanded', false
      else
        this.set 'module.expanded', true
