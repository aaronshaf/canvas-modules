require [
  'compiled/ember/modules/config/app'
  'compiled/ember/modules/routes/index_route'
  # 'jquery'
  # 'compiled/ember/modules/controllers/module_controller'
  'compiled/ember/modules/templates'
  # 'compiled/ember/modules/config/routes',
], (App, IndexRoute) ->
  $(document.body).addClass 'context_modules2'
  App.IndexRoute = IndexRoute
  # App.ModuleController = ModuleController
  window.App = App