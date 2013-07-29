requirejs.config
  paths:
    jquery: 'vendor/jquery/jquery.min'
    Ember: 'vendor/ember/ember.min'
    Handlebars: 'vendor/handlebars/handlebars.runtime'
  shim:
    jquery:
      exports: '$'
    Handlebars:
      exports: 'Handlebars'
    Ember:
      deps: ['jquery','Handlebars']
      exports: 'Ember'
    templates:
      deps: ['Ember']
require [
  'Ember',
], (Ember) ->
  window.ENV ?= {}
  window.ENV.API = 'http://localhost:3000' 
  window.ENV.COURSE_ID = 1