(function() {
  define(['ember', 'jquery'], function(Ember, $) {
    var $window, RenameModuleItem;
    $window = $(window);
    return RenameModuleItem = Ember.View.extend({
      classNames: ['title', 'rename'],
      didInsertElement: (function() {
        return this.$('input[type="text"]').focus();
      }),
      keyDown: function(e) {
        var enterKey, escapeKey;
        enterKey = 13;
        escapeKey = 27;
        if (e.which === enterKey) {
          this.get('controller').send('saveRename');
        }
        if (e.which === escapeKey) {
          return this.get('controller').send('cancelRename');
        }
      }
    });
  });

}).call(this);
