window.ENV = {}
window.ENV.COURSE_ID = 1

bundle = 'context_modules2'

requirejs.config
  paths:
    'ember': 'vendor/ember/ember'
    'handlebars': 'vendor/handlebars/handlebars-1.0.0-rc4'
    'underscore': 'vendor/underscore/underscore-1.4.4'

  map:
    '*':
      'Handlebars': 'handlebars'
      'ember': 'vendor/ember/ember-1.0.0-rc6'
      'Ember': 'vendor/ember/ember-1.0.0-rc6'
      'jquery': 'vendor/instructure/jquery.instructure-1.1'
      'vendor/jqueryui/sortable': 'vendor/jqueryui/sortable-1.10.3'

  shim:
    ember:
      deps: ['jquery','handlebars']
      exports: 'Ember'
    handlebars:
      deps: ['jquery']
      exports: 'Handlebars'
    underscore:
      exports: '_'

  urlArgs:"bust=" + (new Date()).getTime()

require [
  'ember'
  "compiled/ember/#{bundle}/config/app"
  "compiled/ember/#{bundle}/routes/index_route"
  "compiled/ember/#{bundle}/views/index_view"
  "compiled/ember/#{bundle}/controllers/module_controller"
  "compiled/templates"
  "compiled/ember/#{bundle}/config/routes",
], (Ember, App, IndexRoute, IndexView, ModuleController, templates) ->
  Ember.TEMPLATES = templates
  App.IndexRoute = IndexRoute
  App.IndexView = IndexView

  # Ember.testing = true
  Ember.LOG_BINDING = true
  Ember.ENV.RAISE_ON_DEPRECATION = true

  App.ModuleController = ModuleController

  App.IndexController = Ember.Controller.extend
    editable: true
    togglePreview: ->
      if this.get 'editable'
        this.set 'editable', false
      else
        this.set 'editable', true
    filterItems: (->
      exp = new RegExp this.searchQuery,'g'
      this.get('model').map (module) ->
        if exp.test module.get('name')
          module.set 'hidden', false
          module.get('items').map (item) ->
            item.set 'visible', true
            item
        else
          moduleHidden = true
          module.get('items').map (item) ->
            if exp.test item.get('title')
              item.set 'visible', true
              moduleHidden = false
            else
              item.set 'visible', false
            item
          module.set 'hidden', moduleHidden
        module
    ).observes('searchQuery')

  App.CanvasModuleComponent = Ember.Component.extend
    toggleExpandCollapse: ->
      if this.get 'module.expanded'
        this.set 'module.expanded', false
      else
        this.set 'module.expanded', true

  # TODO: Move these to their own files. Also, if possible, consolidate.
  App.CanvasModulePublishComponent = Ember.Component.extend
    togglePublish: ->
      if this.get 'published'
        this.set 'published', false
      else
        this.set 'published', true

  App.CanvasModuleItemPublishComponent = Ember.Component.extend
    togglePublish: ->
      if this.get('published')
        this.set 'published', false
      else
        this.set 'published', true

  window.App = App
