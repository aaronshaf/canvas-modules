(function() {
  define(['ember'], function(Ember) {
    var IcMenuTriggerComponent;
    return IcMenuTriggerComponent = Ember.Component.extend({
      tagName: "button",
      classNames: "ic-menu-trigger",
      attributeBindings: ["ariaOwns:aria-owns", "ariaHaspopup:aria-haspopup"],
      ariaHaspopup: "true",
      ariaOwns: (function() {
        return this.get("parentView.list.elementId");
      }).property("parentView.list"),
      mouseDown: function() {
        if (!this.get("parentView.list.isOpen")) {
          return;
        }
        return this.closingClickStarted = true;
      },
      keyDown: function(event) {
        switch (event.keyCode) {
          case 40:
          case 38:
            return this.openList(event);
        }
      },
      openList: function(event) {
        event.preventDefault();
        this.set("lastClickEventWasMouse", event.clientX > 0 && event.clientY > 0);
        if (this.closingClickStarted) {
          return this.closingClickStarted = false;
        }
        return this.get("parentView").openList();
      },
      click: Ember.aliasMethod("openList"),
      registerWithParent: (function() {
        return this.get("parentView").registerTrigger(this);
      }).on("didInsertElement"),
      focus: function() {
        return this.$().focus();
      }
    });
  });

}).call(this);
