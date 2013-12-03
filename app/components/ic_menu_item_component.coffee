define ['ember'], (Ember) ->
  IcMenuItemComponent = Ember.Component.extend
    tagName: "ic-menu-item"
    
    # classNames: 'ic-menu-item',
    role: "menuitem"
    attributeBindings: ["tabindex"]
    tabindex: -1
    focused: false
    click: ->
      @get("parentView").close()
      Ember.run.next this, ->
        @get("parentView").focusTrigger()
        @sendAction "on-select", this

    keyDown: (event) ->
      @click()  if event.keyCode is 13 or event.keyCode is 32

    register: (->
      @get("parentView").registerItem this
    ).on("didInsertElement")
    deregister: (->
      @get("parentView").deregisterItem this
    ).on("willDestroyElement")
    focus: ->
      @set "focused", true
      @$().focus()

    mouseEnter: ->
      @get("parentView").focusItem this

    blur: ->
      @set "focused", false
