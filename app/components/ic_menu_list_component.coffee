define ['ember'], (Ember) ->
  # See http://www.w3.org/WAI/GL/wiki/Using_ARIA_menus
  IcMenuListComponent = Ember.Component.extend
    tagName: "ic-menu-items"
    role: "menu"
    attributeBindings: ["ariaExpanded:aria-expanded", "tabindex"]
    
    # so we can focus the menu manually and get "focusOut" to trigger without
    # putting the menu in the tab-o-sphere
    tabindex: -1
    isOpen: false
    # aria wants "true" and "false" as strings
    ariaExpanded: (->
      @get("isOpen") + ""
    ).property("isOpen")
    focusedItem: null
    createItems: (->
      @set "items", Ember.ArrayProxy.create(content: [])
    ).on("init")
    keyDown: (event) ->
      
      # TODO: refactor this, every time I use switch I regret it, and now the
      # preventDefaults are making me sad
      switch event.keyCode
        when 40 #down
          event.preventDefault()
          @focusNext()
        when 38 #up
          event.preventDefault()
          @focusPrevious()
        when 27 #escape
          event.preventDefault()
          @focusTrigger()

    focusTrigger: ->
      @get("parentView.listTrigger").focus()

    focusNext: ->
      index = 0
      items = @get("items")
      focusedItem = @get("focusedItem")
      index = items.indexOf(focusedItem) + 1  if focusedItem
      index = 0  if index is items.get("length") # loop it
      @focusItemAtIndex index

    focusPrevious: ->
      items = @get("items")
      index = items.get("length") - 1
      focusedItem = @get("focusedItem")
      index = items.indexOf(focusedItem) - 1  if focusedItem
      index = items.get("length") - 1  if index is -1 # loop it
      @focusItemAtIndex index

    focusItemAtIndex: (index) ->
      item = @get("items").objectAt(index)
      @focusItem item

    focusItem: (item) ->
      focusedItem = @get("focusedItem")
      focusedItem.blur()  if focusedItem
      @set "focusedItem", item
      item.focus()

    registerItem: (item) ->
      @get("items").addObject item

    deregisterItem: (item) ->
      @get("items").removeObject item

    open: ->
      @set "isOpen", true

    close: ->
      @set "isOpen", false
      @set "focusedItem", null

    
    # wait for dom repaint so we can actually focus items
    
    # focus the list then keyboard navigation still works, but the first
    # item isn't strangely selected
    
    # select first item for keyboard navigation
    focusFirstItemOnOpen: (->
      return  unless @get("isOpen")
      Ember.run.next this, ->
        if @get("parentView.listTrigger.lastClickEventWasMouse")
          @$().focus()
        else
          @focusItemAtIndex 0

    ).observes("isOpen")
    registerWithParent: (->
      @get("parentView").registerList this
    ).on("didInsertElement")
    focusOut: (event) ->
      
      # wait for activeElement to get set (I think?)
      Ember.run.next this, ->
        @close()  unless @$().has(document.activeElement).length
