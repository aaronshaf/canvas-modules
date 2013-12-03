(function() {
  define(['ember', 'jquery'], function(_arg, $) {
    var ModuleController, ObjectController, get, set;
    ObjectController = _arg.ObjectController, get = _arg.get, set = _arg.set;
    return ModuleController = ObjectController.extend({
      dialogId: (function() {
        return this.get('id') + 'Dialog';
      }).property('id'),
      actions: {
        addItemForDevelopment: function() {
          var item;
          return item = this.get('items').pushObject(Ember.Object.create({
            id: Math.random(),
            _editing: true
          }));
        },
        showAddModuleItemModal: function() {
          return this.set('addingModuleItem', true);
        },
        hideAddModuleItemModal: function() {
          return this.set('addingModuleItem', false);
        },
        openEditModuleModal: function() {
          return this.set('editingModule', true);
        },
        closeEditModuleModal: function() {
          return this.set('editingModule', false);
        }
      }
    });
  });

}).call(this);
