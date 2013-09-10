# this is auto-generated
define [
  "ember",
  "./config/app",
  "./config/routes",
  "./components/canvas_module_item_publish_component",
  "./components/instructure_prereq_component",
  "./components/instructure_spinner_component",
  "./components/ic_popover_component",
  "./controllers/module_controller",
  "./controllers/module_item_controller",
  "./controllers/module_items_add_controller",
  "./controllers/modules_controller",
  "./models/module",
  "./models/module_item",
  "./routes/application_route",
   "./routes/missing_route",
   "./routes/modules_route",
   "./views/modules_view",
   # "./templates/components/canvas-available-at"
   # "./templates/components/canvas-available-at",
   # "./templates/components/canvas-due-at",
   # "./templates/components/canvas-modal",
   # "./templates/components/canvas-module-item-assignment-type",
   # "./templates/components/canvas-module-item-cog",
   # "./templates/components/canvas-module-item-publish",
   # "./templates/components/canvas-module-publish",
   # "./templates/components/instructure-prereq",
   # "./templates/components/instructure-spinner",
   # "./templates/module",
   # "./templates/module_item",
   # "./templates/module_items/add",
   # "./templates/modules/add",
   # "./templates/modules/index",
   # "./templates/modules/search",
   # "./templates/modules",
   "./helpers/format_date",
   "./helpers/module_icon"
], (
  Ember,
  App,
  routes,
  CanvasModuleItemPublishComponent,
  InstructurePrereqComponent,
  InstructureSpinnerComponent,
  IcPopoverComponent,
  ModuleController,
  ModuleItemController,
  ModuleItemsAddController,
  ModulesController,
  Module,
  ModuleItem,
  ApplicationRoute,
  MissingRoute,
  ModulesRoute,
  ModulesView
) ->
  App.initializer
    name: 'routes'
    initialize: (container, application) ->
      application.Router.map(routes)

  App.reopen({
    CanvasModuleItemPublishComponent: CanvasModuleItemPublishComponent
    InstructurePrereqComponent: InstructurePrereqComponent
    InstructureSpinnerComponent: InstructureSpinnerComponent
    IcPopoverComponent: IcPopoverComponent
    ModuleController: ModuleController
    ModuleItemController: ModuleItemController
    ModuleItemsAddController: ModuleItemsAddController
    ModulesController: ModulesController
    Module: Module
    ModuleItem: ModuleItem
    ApplicationRoute: ApplicationRoute
    MissingRoute: MissingRoute
    ModulesRoute: ModulesRoute
    ModulesView: ModulesView
  })
