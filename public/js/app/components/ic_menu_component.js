(function() {
  define(['ember'], function(Ember) {
    var IcMenuComponent;
    return IcMenuComponent = Ember.Component.extend({
      tagName: "ic-menu",
      classNameBindings: ["isOpen:is-open:is-closed"],
      list: null,
      listTrigger: null,
      isOpen: (function() {
        return this.get("list.isOpen");
      }).property("list.isOpen"),
      registerList: function(list) {
        return this.set("list", list);
      },
      registerTrigger: function(trigger) {
        return this.set("listTrigger", trigger);
      },
      openList: function() {
        return this.get("list").open();
      }
    });
  });

}).call(this);
