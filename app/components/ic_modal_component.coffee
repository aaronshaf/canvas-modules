define [
  'ember'
], (Ember) ->
  IcModalComponent = Ember.Component.extend Ember.ViewTargetActionSupport,Ember.TargetActionSupport,
    tagName: 'ic-modal'

    actions:

      open: ->
        @set 'is-open', true
        @sendAction 'on-open'

      cancel: ->
        @set 'is-open', false
        @sendAction 'on-close'
  
    # click: Ember.aliasMethod("toggleDialog")

    # toggleVisiblity: (action) ->
    #   @toggleProperty 'is-open'
    #   if @get 'is-open'
    #     @set 'style', 'display: block'
    #     @sendAction 'on-open'
    #   else
    #     @set 'style', 'display: none'
    #     @sendAction 'on-close'

    # click: (event) ->
    #   @toggleVisiblity()  if event.target is @$(".ic-dialog-wrapper")[0]