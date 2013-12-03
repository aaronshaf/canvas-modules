(function() {
  define(['ember', '../../shared/xhr/parse_link_header', 'underscore'], function(Ember, parseLinkHeader, _arg) {
    var $window, IcPaginatedRecordsComponent, throttle;
    throttle = _arg.throttle;
    $window = $(window);
    IcPaginatedRecordsComponent = Ember.Component.extend({
      registerWithConstructor: (function() {
        if (this.get('meta.next')) {
          return this.constructor.register(this);
        }
      }).observes('meta.next'),
      unregisterFromConstructor: (function() {
        if (!this.get('meta.next')) {
          return this.constructor.unregister(this);
        }
      }).observes('meta.next'),
      setData: (function() {
        this.set('data', Ember.ArrayProxy.create({
          content: []
        }));
        return this.set('meta', Ember.Object.create());
      }).on('init'),
      loadRecords: (function(href) {
        this.set('is-loading', true);
        return Ember.$.getJSON(href || this.get('href'), this.ajaxCallback.bind(this));
      }).on('didInsertElement'),
      loadNextRecords: function() {
        return this.loadRecords(this.get('meta.next'));
      },
      ajaxCallback: function(res, status, xhr) {
        this.get('data').pushObjects(this.normalize(res, status, xhr));
        this.set('meta', this.extractMeta(res, status, xhr));
        return this.set('is-loading', false);
      },
      normalize: function(res) {
        var key;
        key = this.get('data-key');
        if (key) {
          return res[key];
        } else {
          return res;
        }
      },
      extractMeta: function(res, status, xhr) {
        return parseLinkHeader(xhr);
      }
    });
    return IcPaginatedRecordsComponent.reopenClass({
      views: [],
      register: function(view) {
        this.views.addObject(view);
        if (this.views.length === 1) {
          $window.on('scroll.ic-lazily-paginated-records', throttle(this.checkViews.bind(this), 100));
        }
        return Ember.run.scheduleOnce('afterRender', this, 'checkViews');
      },
      unregister: function(view) {
        this.views.removeObject(view);
        if (this.views.length === 0) {
          return $window.off('scroll.ic-lazily-paginated-records');
        }
      },
      checkViews: function() {
        var bottom, view, _i, _len, _ref;
        _ref = this.views;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          view = _ref[_i];
          if (view.get('is-loading')) {
            continue;
          }
          bottom = view.get('element').getBoundingClientRect().bottom;
          if (bottom <= window.innerHeight) {
            view.loadNextRecords();
          }
        }
        return null;
      }
    });
  });

}).call(this);
