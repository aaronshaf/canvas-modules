(function() {
  define(['ember', 'i18nObj'], function(Ember, I18n) {
    return Ember.Handlebars.registerHelper('t', function(translationKey, defaultValue, options) {
      var key, scope, value, wrappers, _ref;
      wrappers = {};
      options = (_ref = options != null ? options.hash : void 0) != null ? _ref : {};
      scope = options.scope;
      delete options.scope;
      for (key in options) {
        value = options[key];
        if (!(key.match(/^w\d+$/))) {
          continue;
        }
        wrappers[new Array(parseInt(key.replace('w', '')) + 2).join('*')] = value;
        delete options[key];
      }
      if (wrappers['*']) {
        options.wrapper = wrappers;
      }
      options.needsEscaping = true;
      if (!(this instanceof String || typeof this === 'string')) {
        options = $.extend(options, this);
      }
      return I18n.scoped(scope).t(translationKey, defaultValue, options);
    });
  });

}).call(this);
