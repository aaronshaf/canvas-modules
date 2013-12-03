(function() {
  define(["ember", "config/app", "config/routes", "components/content_icon_component", "components/ic_icon_publish_component", "components/ic_icon_settings_component", "components/ic_lazily_paginated_records_component", "components/ic_menu_component", "components/ic_menu_item_component", "components/ic_menu_list_component", "components/ic_menu_trigger_component", "components/ic_modal_component", "components/ic_trigger_component", "controllers/add_module_item_modal_controller", "controllers/edit_module_item_modal_controller", "controllers/item_controller", "controllers/module_controller", "controllers/modules_controller", "routes/modules_route", "views/item_view", "views/module_view", "views/rename_module_item_view", '../templates'], function(Ember, App, routes, ContentIconComponent, IcIconPublishComponent, IcIconSettingsComponent, IcLazilyPaginatedRecordsComponent, IcMenuComponent, IcMenuItemComponent, IcMenuListComponent, IcMenuTriggerComponent, IcModalComponent, IcTriggerComponent, AddModuleItemModalController, EditModuleItemModalController, ItemController, ModuleController, ModulesController, ModulesRoute, ItemView, ModuleView, RenameModuleItemView) {
    var _parseJSON;
    _parseJSON = $.parseJSON;
    $.parseJSON = function() {
      var newData;
      if (arguments_[0]) {
        try {
          newData = arguments_[0].replace(/^while\(1\);/, "");
          arguments_[0] = newData;
        } catch (_error) {}
      }
      return _parseJSON.apply($, arguments_);
    };
    $.ajaxSettings.converters["text json"] = $.parseJSON;
    App.initializer({
      name: 'routes',
      initialize: function(container, application) {
        return application.Router.map(routes);
      }
    });
    App.reopen({
      ContentIconComponent: ContentIconComponent,
      IcIconPublishComponent: IcIconPublishComponent,
      IcIconSettingsComponent: IcIconSettingsComponent,
      IcLazilyPaginatedRecordsComponent: IcLazilyPaginatedRecordsComponent,
      IcMenuComponent: IcMenuComponent,
      IcMenuItemComponent: IcMenuItemComponent,
      IcMenuListComponent: IcMenuListComponent,
      IcMenuTriggerComponent: IcMenuTriggerComponent,
      IcModalComponent: IcModalComponent,
      IcTriggerComponent: IcTriggerComponent,
      AddModuleItemModalController: AddModuleItemModalController,
      EditModuleItemModalController: EditModuleItemModalController,
      ItemController: ItemController,
      ModuleController: ModuleController,
      ModulesController: ModulesController,
      ModulesRoute: ModulesRoute,
      ItemView: ItemView,
      ModuleView: ModuleView,
      RenameModuleItemView: RenameModuleItemView
    });
    return App = Ember.Application.create({
      LOG_TRANSITIONS: true,
      LOG_TRANSITIONS_INTERNAL: true,
      LOG_VIEW_LOOKUPS: true,
      LOG_ACTIVE_GENERATION: true
    });
  });

}).call(this);
