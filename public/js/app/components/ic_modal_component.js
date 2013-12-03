(function() {
  define(['ember'], function(Ember) {
    var IcModalComponent;
    return IcModalComponent = Ember.Component.extend(Ember.ViewTargetActionSupport, Ember.TargetActionSupport, {
      tagName: 'ic-modal',
      actions: {
        open: function() {
          this.set('is-open', true);
          return this.sendAction('on-open');
        },
        cancel: function() {
          this.set('is-open', false);
          return this.sendAction('on-close');
        }
      }
    });
  });

}).call(this);
