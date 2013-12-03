(function() {
  define(['ember', 'jquery', 'underscore'], function(Ember, $, _arg) {
    var ModuleItemView, throttle;
    throttle = _arg.throttle;
    return ModuleItemView = Ember.View.extend({
      tagName: 'module-item',
      templateName: 'item',
      classNameBindings: ['indentClass'],
      attributeBindings: ['contextmenu:contextmenuId'],
      indentClass: (function() {
        return 'indent-' + this.get('controller.indent');
      }).property('controller.indent')
    });
  });

}).call(this);
