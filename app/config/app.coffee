define [
  'ember'
], (Ember) ->

  Ember.Component.reopen
    attributeBindings: ['style', 'href']

  App = Ember.Application.extend
    location: 'none'
    rootElement: '#content'
    LOG_ACTIVE_GENERATION: true
    LOG_VIEW_LOOKUPS: true
