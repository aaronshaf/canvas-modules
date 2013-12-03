(function() {
  define(['ember'], function(Ember) {
    var IcMenuListComponent;
    return IcMenuListComponent = Ember.Component.extend({
      tagName: "ic-menu-items",
      role: "menu",
      attributeBindings: ["ariaExpanded:aria-expanded", "tabindex"],
      tabindex: -1,
      isOpen: false,
      ariaExpanded: (function() {
        return this.get("isOpen") + "";
      }).property("isOpen"),
      focusedItem: null,
      createItems: (function() {
        return this.set("items", Ember.ArrayProxy.create({
          content: []
        }));
      }).on("init"),
      keyDown: function(event) {
        switch (event.keyCode) {
          case 40:
            event.preventDefault();
            return this.focusNext();
          case 38:
            event.preventDefault();
            return this.focusPrevious();
          case 27:
            event.preventDefault();
            return this.focusTrigger();
        }
      },
      focusTrigger: function() {
        return this.get("parentView.listTrigger").focus();
      },
      focusNext: function() {
        var focusedItem, index, items;
        index = 0;
        items = this.get("items");
        focusedItem = this.get("focusedItem");
        if (focusedItem) {
          index = items.indexOf(focusedItem) + 1;
        }
        if (index === items.get("length")) {
          index = 0;
        }
        return this.focusItemAtIndex(index);
      },
      focusPrevious: function() {
        var focusedItem, index, items;
        items = this.get("items");
        index = items.get("length") - 1;
        focusedItem = this.get("focusedItem");
        if (focusedItem) {
          index = items.indexOf(focusedItem) - 1;
        }
        if (index === -1) {
          index = items.get("length") - 1;
        }
        return this.focusItemAtIndex(index);
      },
      focusItemAtIndex: function(index) {
        var item;
        item = this.get("items").objectAt(index);
        return this.focusItem(item);
      },
      focusItem: function(item) {
        var focusedItem;
        focusedItem = this.get("focusedItem");
        if (focusedItem) {
          focusedItem.blur();
        }
        this.set("focusedItem", item);
        return item.focus();
      },
      registerItem: function(item) {
        return this.get("items").addObject(item);
      },
      deregisterItem: function(item) {
        return this.get("items").removeObject(item);
      },
      open: function() {
        return this.set("isOpen", true);
      },
      close: function() {
        this.set("isOpen", false);
        return this.set("focusedItem", null);
      },
      focusFirstItemOnOpen: (function() {
        if (!this.get("isOpen")) {
          return;
        }
        return Ember.run.next(this, function() {
          if (this.get("parentView.listTrigger.lastClickEventWasMouse")) {
            return this.$().focus();
          } else {
            return this.focusItemAtIndex(0);
          }
        });
      }).observes("isOpen"),
      registerWithParent: (function() {
        return this.get("parentView").registerList(this);
      }).on("didInsertElement"),
      focusOut: function(event) {
        return Ember.run.next(this, function() {
          if (!this.$().has(document.activeElement).length) {
            return this.close();
          }
        });
      }
    });
  });

}).call(this);
