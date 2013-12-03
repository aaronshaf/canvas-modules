(function() {
  define(['ember', 'jquery', 'underscore'], function(Ember, $, _arg) {
    var $window, ModuleView, throttle;
    throttle = _arg.throttle;
    $window = $(window);
    ModuleView = Ember.View.extend({
      templateName: 'module',
      register: (function() {
        if (this.get('controller.itemLinks.next')) {
          return this.constructor.register(this);
        }
      }).observes('controller.itemLinks.next'),
      unregister: (function() {
        if (!this.get('controller.itemLinks.next')) {
          return this.constructor.unregister(this);
        }
      }).observes('controller.itemLinks.next')
    });
    return ModuleView.reopenClass({
      views: [],
      register: function(view) {
        this.views.addObject(view);
        if (this.views.length === 1) {
          $window.on('scroll.moduleView', throttle(this.checkViews.bind(this), 100));
        }
        return this.checkViews();
      },
      unregister: function(view) {
        this.views.removeObject(view);
        if (this.views.length === 0) {
          return $window.off('scroll.moduleView');
        }
      },
      checkViews: function() {
        var bottom, view, _i, _len, _ref;
        _ref = this.views;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          view = _ref[_i];
          if (view.get('controller.isLoading')) {
            continue;
          }
          bottom = view.get('element').getBoundingClientRect().bottom;
          if (bottom <= window.innerHeight + 500) {
            view.get('controller').send('loadNextItems');
          }
        }
        return null;
      }
    });
  });

}).call(this);
