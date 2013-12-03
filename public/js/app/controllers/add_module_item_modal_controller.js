(function() {
  define(['ember'], function(Ember) {
    var AddModuleItemModalController;
    return AddModuleItemModalController = Ember.ObjectController.extend({
      type: 'assignment',
      isAssignment: (function() {
        return this.get('type') === 'assignment';
      }).property('type'),
      isPage: (function() {
        return this.get('type') === 'page';
      }).property('type'),
      isQuiz: (function() {
        return this.get('type') === 'quiz';
      }).property('type'),
      isFile: (function() {
        return this.get('type') === 'file';
      }).property('type'),
      isDiscussion: (function() {
        return this.get('type') === 'discussion';
      }).property('type'),
      isTextHeader: (function() {
        return this.get('type') === 'text_header';
      }).property('type'),
      isExternalUrl: (function() {
        return this.get('type') === 'external_url';
      }).property('type'),
      isExternalTool: (function() {
        return this.get('type') === 'external_tool';
      }).property('type'),
      assignmentGroups: (function() {
        var module, url,
          _this = this;
        module = this.pushObject(Ember.Object.create({
          id: Math.random()
        }));
        url = "/api/v1/courses/" + ENV.course_id + "/assignment_groups";
        Ember.$.getJSON(url).then(function() {});
        return $.ajax({
          url: '',
          type: 'GET',
          dataType: 'json',
          success: function(response) {
            return module.setProperties(response);
          },
          error: function() {
            return false;
          }
        });
      }).property()
    });
  });

}).call(this);
