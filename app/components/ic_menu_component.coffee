define ['ember'], (Ember) ->
  IcMenuComponent = Ember.Component.extend
    tagName: "ic-menu"
    classNameBindings: ["isOpen:is-open:is-closed"]
    list: null
    listTrigger: null
    isOpen: (->
      @get "list.isOpen"
    ).property("list.isOpen")
    registerList: (list) ->
      @set "list", list

    registerTrigger: (trigger) ->
      @set "listTrigger", trigger

    openList: ->
      @get("list").open()
