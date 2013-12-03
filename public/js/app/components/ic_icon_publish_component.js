(function() {
  define(['ember'], function(Ember) {
    var IcIconPublishComponent;
    return IcIconPublishComponent = Ember.Component.extend({
      tagName: 'ic-icon-publish',
      classNames: ['ic-icon'],
      attributeBindings: 'style',
      'fillColor': (function() {
        var _ref;
        return (_ref = this.get('fill-color')) != null ? _ref : '#010101';
      }).property('fill-color')
    });
  });

}).call(this);
