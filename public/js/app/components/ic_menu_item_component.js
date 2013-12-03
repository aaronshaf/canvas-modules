(function() {
  define(['ember'], function(Ember) {
    var IcMenuItemComponent;
    return IcMenuItemComponent = Ember.Component.extend({
      tagName: "ic-menu-item",
      role: "menuitem",
      attributeBindings: ["tabindex"],
      tabindex: -1,
      focused: false,
      click: function() {
        this.get("parentView").close();
        return Ember.run.next(this, function() {
          this.get("parentView").focusTrigger();
          return this.sendAction("on-select", this);
        });
      },
      keyDown: function(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
          return this.click();
        }
      },
      register: (function() {
        return this.get("parentView").registerItem(this);
      }).on("didInsertElement"),
      deregister: (function() {
        return this.get("parentView").deregisterItem(this);
      }).on("willDestroyElement"),
      focus: function() {
        this.set("focused", true);
        return this.$().focus();
      },
      mouseEnter: function() {
        return this.get("parentView").focusItem(this);
      },
      blur: function() {
        return this.set("focused", false);
      }
    });
  });

}).call(this);
