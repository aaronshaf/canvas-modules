define [
  'Ember'
  'jquery'
  'vendor/ember/ember-model'
], (Ember,$) ->
  $(document.body).addClass 'context_modules2'
  $(document.body).addClass 'environment-development'

  # $.subscribeAjax({
  #   cache: true,
  #   routes: [
  #     '/api/v1/courses/*'
  #   ]
  # });

  Ember.LOG_BINDING = true
  Ember.ENV.RAISE_ON_DEPRECATION = true
  Ember.LOG_STACKTRACE_ON_DEPRECATION = true

  # Ember.InstructureAdapter = Ember.Adapter.extend

  Ember.Application.create
    rootElement: '#content'
    LOG_TRANSITIONS: true
    LOG_TRANSITIONS_INTERNAL: true
    LOG_VIEW_LOOKUPS: true
    LOG_ACTIVE_GENERATION: true
