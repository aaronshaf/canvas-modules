define [
  'ember'
], (Ember) ->
  IcPopoverComponent = Ember.Component.extend(
    classNames: ["ic-popover"]
    classNameBindings: ["open:ic-popover-open:ic-popover-closed"]
    
    # popovers are on the document root so it can popover any other element
    appendToDocument: ->
      @$().appendTo $("body")
    .on("didInsertElement")
    position: ->
      @$().css
        left: parseInt(@get("x"))
        top: parseInt(@get("y"))

    .observes("x", "y")
    initX: ->
      return  if @get("x")
      @set "x", @calculateCenter("width")
    .on("didInsertElement")
    initY: ->
      return  if @get("y")
      @set "y", @calculateCenter("height")
    .on("didInsertElement")
    calculateCenter: (axis) ->
      capitalize = Ember.String.capitalize
      (window["inner" + capitalize(axis)] / 2) - (@$()[axis]() / 2)
  )
