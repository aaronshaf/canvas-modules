(function() {
  define(['ember'], function(Ember) {
    var ItemController;
    return ItemController = Ember.ObjectController.extend({
      contextmenuId: (function() {
        return this.get('id') + 'Contextmenu';
      }).property('id'),
      dialogId: (function() {
        return this.get('id') + 'Dialog';
      }).property('id'),
      wasAddedInThisSession: (function() {
        return this.get('_wasAddedInThisSession');
      }).property('_wasAddedInThisSession'),
      serialize: function() {
        return this.getProperties('title', 'position', 'indent', 'external_url', 'new_tab', 'published', 'module_id');
      },
      actions: {
        addItemAbove: function() {
          return alert('addItemAbove');
        },
        addItemBelow: function() {
          return alert('addItemBelow');
        },
        openEditModal: function() {
          return this.set('editing', true);
        },
        closeEditModal: function(action) {
          var _this = this;
          this.set('editing', false);
          if ("save") {
            return $.ajax({
              url: "/api/v1/courses/" + window.ENV.course_id + "/modules/" + (this.get('module_id')) + "/items/" + (this.get('id')),
              type: 'PUT',
              dataType: 'json',
              data: {
                module_item: this.getProperties('title', 'indent')
              },
              success: function(response) {
                return _this.setProperties(response);
              }
            });
          }
        },
        rename: function() {
          this.set('titleBeforeRename', this.get('title'));
          this.set('renaming', true);
          return false;
        },
        cancelRename: function() {
          this.set('title', this.get('titleBeforeRename'));
          this.set('renaming', false);
          return false;
        },
        saveRename: function() {
          $.ajax({
            url: "/api/v1/courses/" + window.ENV.course_id + "/modules/" + (this.get('module_id')) + "/items/" + (this.get('id')),
            type: 'PUT',
            dataType: 'json',
            data: {
              module_item: this.serialize()
            }
          });
          return this.set('renaming', false);
        },
        remove: function() {
          var model,
            _this = this;
          model = void 0;
          Ember.run.next(this, function() {
            return model = this.get('parentController.model.items').removeObject(this.get('model'));
          });
          return $.ajax({
            url: "/api/v1/courses/" + window.ENV.course_id + "/modules/" + (this.get('module_id')) + "/items/" + (this.get('id')),
            type: 'DELETE',
            dataType: 'json',
            error: function(data) {
              return _this.get('parentController.model.items').addObject(model);
            }
          });
        }
      }
    });
  });

}).call(this);
