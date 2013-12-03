(function() {
  define(['ember', 'jquery'], function(_arg, $) {
    var Controller, ModulesController, get, set;
    Controller = _arg.Controller, get = _arg.get, set = _arg.set;
    return ModulesController = Controller.extend({
      url: '/api/v1/courses/#{ENV.course_id}/modules',
      actions: {
        add: function() {
          var module,
            _this = this;
          module = this.pushObject(Ember.Object.create({
            id: Math.random()
          }));
          $.ajax({
            url: '/api/v1/courses/#{ENV.course_id}/modules',
            type: 'POST',
            dataType: 'json',
            data: {
              module: {
                name: "TEST"
              }
            },
            success: function(response) {
              return module.setProperties(response);
            },
            error: function() {
              return false;
            }
          });
          return false;
        }
      }
    });
  });

}).call(this);
