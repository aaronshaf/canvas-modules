define ['ember'], (Ember) ->
  IcMenuTriggerComponent = Ember.Component.extend
    tagName: "button"
    classNames: "ic-menu-trigger"
    attributeBindings: ["ariaOwns:aria-owns", "ariaHaspopup:aria-haspopup"]
    ariaHaspopup: "true"
    ariaOwns: (->
      @get "parentView.list.elementId"
    ).property("parentView.list")
    mouseDown: ->
      return  unless @get("parentView.list.isOpen")
      
      # MenuList::focusOut handles outerclick/outerfocus, mousedown on the
      # trigger will close an already open list, then the click finishes after
      # and would reopen the list, so we have this temporary property to deal
      # with it.
      @closingClickStarted = true

    keyDown: (event) ->
      switch event.keyCode
        #down
        when 40, 38 #up
          @openList event

    openList: (event) ->
      event.preventDefault()
      
      # I have no idea how reliable this is, but it seems good enough
      @set "lastClickEventWasMouse", event.clientX > 0 and event.clientY > 0
      return @closingClickStarted = false  if @closingClickStarted
      @get("parentView").openList()

    click: Ember.aliasMethod("openList")
    registerWithParent: (->
      @get("parentView").registerTrigger this
    ).on("didInsertElement")
    focus: ->
      @$().focus()
