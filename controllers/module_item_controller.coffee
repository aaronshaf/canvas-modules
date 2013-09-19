define [
  'ember'
], (Ember) ->
  Ember.ObjectController.extend
    actions:
      delete: (item) ->
        debugger
        item.destroy()
        # item.delete()
