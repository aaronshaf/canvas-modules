define ['ember'], (Ember) ->
  ItemController = Ember.ObjectController.extend
    # wasAddedInThisSession: false

    contextmenuId: (->
      @get('id') + 'Contextmenu'
    ).property('id')

    dialogId: (->
      @get('id') + 'Dialog'
    ).property('id')

    wasAddedInThisSession: (->
      return @get '_wasAddedInThisSession'
    ).property('_wasAddedInThisSession')

    serialize: ->
      @getProperties 'title','position','indent','external_url','new_tab','published','module_id'

    actions:
      addItemAbove: ->
        alert 'addItemAbove'

      addItemBelow: ->
        alert 'addItemBelow'

      openEditModal: ->
        @set 'editing', true

      closeEditModal: (action) ->
        @set 'editing', false
        if "save"
          $.ajax
            url: "/api/v1/courses/#{window.ENV.course_id}/modules/#{this.get('module_id')}/items/#{this.get('id')}"
            type: 'PUT'
            dataType: 'json'
            data: 
              module_item: @getProperties('title', 'indent')
            success: (response) =>
              @setProperties response

      rename: ->
        @set 'titleBeforeRename',@get('title')
        @set 'renaming', true
        false

      cancelRename: ->
        @set 'title', @get('titleBeforeRename')
        @set 'renaming', false
        false

      saveRename: ->
        $.ajax
          url: "/api/v1/courses/#{window.ENV.course_id}/modules/#{this.get('module_id')}/items/#{this.get('id')}"
          type: 'PUT'
          dataType: 'json'
          data: module_item: @serialize()
        @set 'renaming', false

      remove: ->
        model = undefined
        Ember.run.next @, ->
          model = @get('parentController.model.items').removeObject @get('model')
        $.ajax
          url: "/api/v1/courses/#{window.ENV.course_id}/modules/#{this.get('module_id')}/items/#{this.get('id')}"
          type: 'DELETE'
          dataType: 'json'
          error: (data) =>
            @get('parentController.model.items').addObject model