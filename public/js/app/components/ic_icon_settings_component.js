(function() {
  define(['ember'], function(Ember) {
    var IcIconSettingsComponent;
    return IcIconSettingsComponent = Ember.Component.extend({
      tagName: 'ic-icon-settings',
      classNames: ['ic-icon'],
      attributeBindings: 'style',
      'fillColor': (function() {
        var _ref;
        return (_ref = this.get('fill-color')) != null ? _ref : '#010101';
      }).property('fill-color')
    });
  });

}).call(this);
