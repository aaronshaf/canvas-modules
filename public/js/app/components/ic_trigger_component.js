(function() {
  define(['ember'], function(Ember) {
    var IcTiggerComponent;
    return IcTiggerComponent = Ember.Component.extend({
      tagName: 'ic-trigger',
      click: function(event) {
        var targetView;
        if (this.get('target') != null) {
          targetView = Ember.View.views[this.get('target')];
        } else {
          targetView = this.get('parentView');
        }
        return targetView._actions[this.get('action')].call(targetView);
      }
    });
  });

}).call(this);
