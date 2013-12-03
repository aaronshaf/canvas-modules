# this is auto-generated

define ["ember", "config/app", "config/routes", "components/content_icon_component", "components/ic_icon_publish_component", "components/ic_icon_settings_component", "components/ic_lazily_paginated_records_component", "components/ic_menu_component", "components/ic_menu_item_component", "components/ic_menu_list_component", "components/ic_menu_trigger_component", "components/ic_modal_component", "components/ic_trigger_component", "controllers/add_module_item_modal_controller", "controllers/edit_module_item_modal_controller", "controllers/item_controller", "controllers/module_controller", "controllers/modules_controller", "routes/modules_route", "views/item_view", "views/module_view", "views/rename_module_item_view", '../templates'], (Ember, App, routes, ContentIconComponent, IcIconPublishComponent, IcIconSettingsComponent, IcLazilyPaginatedRecordsComponent, IcMenuComponent, IcMenuItemComponent, IcMenuListComponent, IcMenuTriggerComponent, IcModalComponent, IcTriggerComponent, AddModuleItemModalController, EditModuleItemModalController, ItemController, ModuleController, ModulesController, ModulesRoute, ItemView, ModuleView, RenameModuleItemView) ->
  App.initializer
    name: 'routes'
    initialize: (container, application) ->
      application.Router.map(routes)

  App.reopen({
    ContentIconComponent: ContentIconComponent
    IcIconPublishComponent: IcIconPublishComponent
    IcIconSettingsComponent: IcIconSettingsComponent
    IcLazilyPaginatedRecordsComponent: IcLazilyPaginatedRecordsComponent
    IcMenuComponent: IcMenuComponent
    IcMenuItemComponent: IcMenuItemComponent
    IcMenuListComponent: IcMenuListComponent
    IcMenuTriggerComponent: IcMenuTriggerComponent
    IcModalComponent: IcModalComponent
    IcTriggerComponent: IcTriggerComponent
    AddModuleItemModalController: AddModuleItemModalController
    EditModuleItemModalController: EditModuleItemModalController
    ItemController: ItemController
    ModuleController: ModuleController
    ModulesController: ModulesController
    ModulesRoute: ModulesRoute
    ItemView: ItemView
    ModuleView: ModuleView
    RenameModuleItemView: RenameModuleItemView
  })

  App = Ember.Application.create
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_ACTIVE_GENERATION: true
