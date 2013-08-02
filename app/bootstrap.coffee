window.ENV = {}
window.ENV.API_HOST = 'http://localhost:8000'
window.ENV.COURSE_ID = 1

requirejs.config
  paths:
    underscore: 'vendor/lodash/lodash'
    lodash: 'vendor/lodash/lodash'
    jquery: 'vendor/jquery/jquery.min'
    Ember: 'vendor/ember/ember'
    Handlebars: 'vendor/handlebars/handlebars.runtime'
    'jquery.csrf': 'libs/jquery.csrf'
    'jquery.ui.core': 'vendor/jquery.ui//ui/jquery.ui.core'
    'jquery.ui.mouse': 'vendor/jquery.ui//ui/jquery.ui.mouse'
    'jquery.ui.widget': 'vendor/jquery.ui//ui/jquery.ui.widget'
    'jquery.ui.sortable': 'vendor/jquery.ui//ui/jquery.ui.sortable'

  shim:
    lodash:
      exports: '_'
      init: (lodash) -> this.lodash.noConflict()
    jquery:
      exports: '$'
    'jquery.csrf':
      deps: ['jquery']
    'jquery.ui.sortable':
      deps: [
        'jquery.ui.core',
        'jquery.ui.mouse',
        'jquery.ui.widget',
      ]
    'jquery.ui.mouse':
      deps: [
        'jquery.ui.widget'
      ]
    Handlebars:
      exports: 'Handlebars'
    Ember:
      deps: ['jquery','Handlebars']
      exports: 'Ember'
    templates:
      deps: ['Ember']

require [
  'Ember'
  'compiled/ember/modules/config/app'
  'compiled/ember/modules/routes/index_route'
  'compiled/ember/modules/views/index_view'
  'jquery'
  'compiled/ember/modules/templates'
  'jquery.csrf'
  # 'compiled/ember/modules/controllers/module_controller'
  
  # 'compiled/ember/modules/config/routes',
], (Ember, App, IndexRoute, IndexView, $, templates) ->
  Ember.TEMPLATES = templates
  App.IndexRoute = IndexRoute
  App.IndexView = IndexView
  # App.ModuleController = ModuleController
  window.App = App