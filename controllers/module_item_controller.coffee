define [
  'ember'
], (Ember) ->
  Ember.ObjectController.extend
    actions:
      delete: (item) ->
        item.delete().then =>
          item.get('module.items').removeObject(item)
          item.destroy()
        
