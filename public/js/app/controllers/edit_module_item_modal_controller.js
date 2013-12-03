(function() {
  define(['ember'], function(Ember) {
    var EditModuleItemModalController;
    return EditModuleItemModalController = Ember.ObjectController.extend({
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
      }).property('type')
    });
  });

}).call(this);
