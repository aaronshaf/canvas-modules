# this is auto-generated
define [
  "ember",
  "./config/app",
  "./config/routes",
  "./components/canvas_module_item_publish_component",
  "./components/instructure_spinner_component",
  "./controllers/module_controller",
  "./controllers/module_items_add_controller",
  "./controllers/modules_controller",
  "./controllers/module_item_controller",
  "./models/module",
  "./models/module_item",
  "./routes/application_route",
  "./routes/missing_route",
  "./routes/modules_route",
  "./views/modules_view",
  './helpers/module_icon'
  # "./templates/components/canvas-available-at",
  # "./templates/components/canvas-due-at",
  # "./templates/components/canvas-modal",
  # "./templates/components/canvas-module-item-assignment-type",
  # "./templates/components/canvas-module-item-cog",
  # "./templates/components/canvas-module-item-publish",
  # "./templates/components/canvas-module-item",
  # "./templates/components/canvas-module-publish",
  # "./templates/components/canvas-module",
  # "./templates/components/canvas-pts",
  # "./templates/module_items/add",
  # "./templates/modules/add",
  # "./templates/modules/index",
  # "./templates/modules/search",
  # "./templates/modules"
], (Ember, App, routes, CanvasModuleItemPublishComponent, InstructureSpinnerComponent, ModuleController, ModuleItemsAddController, ModulesController, ModuleItemController, Module, ModuleItem, ApplicationRoute, MissingRoute, ModulesRoute, ModulesView) ->
  App.initializer
    name: 'routes'
    initialize: (container, application) ->
      application.Router.map(routes)

  App.reopen
    CanvasModuleItemPublishComponent: CanvasModuleItemPublishComponent
    InstructureSpinnerComponent: InstructureSpinnerComponent
    ModuleController: ModuleController
    ModuleItemsAddController: ModuleItemsAddController
    ModulesController: ModulesController
    ModuleItemController: ModuleItemController
    Module: Module
    ModuleItem: ModuleItem
    ApplicationRoute: ApplicationRoute
    MissingRoute: MissingRoute
    ModulesRoute: ModulesRoute
    ModulesView: ModulesView
