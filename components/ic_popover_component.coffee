define [
  'ember'
], (Ember) ->
  PopoverComponent = Ember.Component.extend
    classNames: ["ic-popover"]
    classNameBindings: ["open:ic-popover-open:ic-popover-closed"]

    close: ->
      @toggleProperty 'open'

    position: (->
      @$().css
        left: parseInt(@get("x"))
        top: parseInt(@get("y"))
    ).observes("x", "y")

    initX: (->
      return  if @get("x")
      @set "x", @calculateCenter("width")
    ).on("didInsertElement")

    initY: (->
      return  if @get("y")
      @set "y", @calculateCenter("height")
    ).on("didInsertElement")

    calculateCenter: (axis) ->
      (window["inner" + Ember.String.capitalize(axis)] / 2) - (@$()[axis]() / 2)
