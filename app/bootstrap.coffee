window.ENV = {}
window.ENV.COURSE_ID = 62

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
  "compiled/ember/#{bundle}/routes/modules_route"
  "compiled/ember/#{bundle}/models/module"
  "compiled/ember/#{bundle}/models/module_item"
  "compiled/ember/#{bundle}/views/modules_view"
  "compiled/ember/#{bundle}/controllers/modules_controller"
  "compiled/ember/#{bundle}/controllers/module_controller"
  "compiled/ember/#{bundle}/controllers/module_items_add_controller"
  "compiled/ember/#{bundle}/components/canvas_module_component"
  "compiled/ember/#{bundle}/components/canvas_module_item_publish_component"
  "compiled/templates"
  "compiled/ember/#{bundle}/config/routes"
  # 'vendor/jquery.subscribeAjax/jquery.subscribeAjax'
], (Ember, App, ModulesRoute, Module, ModuleItem, ModulesView, ModulesController, ModuleController, ModuleItemsAddController, CanvasModuleComponent, CanvasModuleItemPublishComponent, templates) ->
  Ember.TEMPLATES = templates
  App.CanvasModuleComponent  = CanvasModuleComponent
  App.ModulesRoute = ModulesRoute
  App.ModulesView = ModulesView
  App.ModuleItemsAddController = ModuleItemsAddController

  # Ember.testing = true
  Ember.LOG_BINDING = true
  Ember.ENV.RAISE_ON_DEPRECATION = true

  App.Module = Module
  App.ModuleItem = ModuleItem
  App.ModuleController = ModuleController
  App.ModulesController = ModulesController

  App.CanvasDropdownComponent = Ember.Mixin.create
    open: ->
      this.$('ul.canvas-dropdown').show()
      document.body.addEventListener 'click', @close.bind(this), true
    close: ->
      # alert 'close'
      document.body.removeEventListener 'click',@close,true
      this.$('ul.canvas-dropdown').hide()

  App.CanvasModuleItemCogComponent = Ember.Component.extend App.CanvasDropdownComponent

  App.CanvasPublishComponent = Ember.Mixin.create
    togglePublish: ->
      if this.get 'published'
        this.set 'published', false
      else
        this.set 'published', true

  App.CanvasModulePublishComponent = Ember.Component.extend App.CanvasPublishComponent

  App.CanvasModuleComponent = CanvasModuleComponent
  App.CanvasModuleItemPublishComponent = CanvasModuleItemPublishComponent

  window.App = App
