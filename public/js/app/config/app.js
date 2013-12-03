(function() {
  define(['ember'], function(Ember) {
    var App;
    Ember.Component.reopen({
      attributeBindings: ['style', 'href']
    });
    return App = Ember.Application.extend({
      location: 'none',
      rootElement: '#content',
      LOG_ACTIVE_GENERATION: true,
      LOG_VIEW_LOOKUPS: true
    });
  });

}).call(this);
