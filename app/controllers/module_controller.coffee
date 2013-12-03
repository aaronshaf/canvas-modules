define [
  'ember'
  'jquery'
], ({ObjectController, get, set}, $) ->

  ModuleController = ObjectController.extend

    dialogId: (->
      @get('id') + 'Dialog'
    ).property('id')
    
    actions:
      addItemForDevelopment: ->
        item = @get('items').pushObject Ember.Object.create
          id:Math.random(),
          _editing: true
        
        # # temporary
        # $.ajax
        #   url: "/api/v1/courses/#{window.ENV.course_id}/modules/#{this.get('id')}/items"
        #   type: 'POST'
        #   dataType: 'json'
        #   data: 
        #     module_item:
        #       title: "Τεκνία μου, ταῦτα γράφω ὑμῖν ἵνα μὴ ἁμάρτητε".split(' ').sort(-> .5 - Math.random()).join(' ')
        #       type: "SubHeader"
        #       indent: Math.floor(Math.random() * 5)
        #   success: (response) =>
        #     item.setProperties response
        #   error: =>
        #     @get('items').removeObject item

      showAddModuleItemModal: ->
        @set 'addingModuleItem',true

      hideAddModuleItemModal: ->
        @set 'addingModuleItem',false

      openEditModuleModal: ->
        @set 'editingModule',true

      closeEditModuleModal: ->
        @set 'editingModule',false

# contextmenuId: (->
#   @get('id') + 'Contextmenu'
# ).property()

# dialogId: (->
#   @get('id') + 'Dialog'
# ).property('id')

# serialize: ->
#   @getProperties 'name','unlock_at','position','require_sequential_progress','prerequisite_module_ids','published','items'

# actions:
#   addItem: ->
#     item = @get('items').pushObject Ember.Object.create({id:Math.random()})
#     # temporary
#     $.ajax
#       url: "/api/v1/courses/#{window.ENV.course_id}/modules/#{this.get('id')}/items"
#       type: 'POST'
#       dataType: 'json'
#       data: 
#         module_item:
#           title: "Τεκνία μου, ταῦτα γράφω ὑμῖν ἵνα μὴ ἁμάρτητε".split(' ').sort(-> .5 - Math.random()).join(' ')
#           type: "SubHeader"
#           indent: Math.floor(Math.random() * 5)
#       success: (response) =>
#         item.setProperties response
#       error: =>
#         @get('items').removeObject item

#   loadNextItems: ->
#     @loadItems get(this, 'itemLinks.next')

#   addModuleItem: ->
#     @get('items').pushObject
#       title: "new guy"

#   rename: ->
#     @set 'nameBeforeRename',@get('name')
#     @set 'renaming', true
#     false

#   cancelRename: ->
#     @set 'name', @get('nameBeforeRename')
#     @set 'renaming', false
#     false

#   saveRename: ->
#     $.ajax
#       url: "/api/v1/courses/#{window.ENV.course_id}/modules/#{this.get('id')}"
#       type: 'PUT'
#       dataType: 'json'
#       data: module: @serialize()
#     @set 'renaming', false

#   remove: ->
#     return unless confirm I18n.t('confirm_deletion_of_module','Are you really sure that you want to delete this module?')
#     model = undefined
#     Ember.run.next @, ->
#       model = @get('parentController.model').removeObject @get('model')
#     $.ajax
#       url: "/api/v1/courses/#{window.ENV.course_id}/modules/#{this.get('id')}"
#       type: 'DELETE'
#       dataType: 'json'
#       error: (data) =>
#         @get('parentController.model').addObject model

# loadItems: (url) ->
#   set this, 'isLoading', true
#   $.getJSON url, (items, status, xhr) =>
#     set this, 'isLoading', false
#     set this, 'itemLinks', parseLinkHeader(xhr)
#     @get('items').pushObjects items

# loadPagedItems: (->
#   items = get this, 'items'
#   return if items
#   set this, 'items', []
#   @loadItems get(this, 'items_url')
# ).on('init')
