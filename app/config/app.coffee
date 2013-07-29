define [
  'Ember'
], (Ember) ->
  Ember.Application.create
    rootElement: '#content'
    LOG_TRANSITIONS: true
    LOG_TRANSITIONS_INTERNAL: true