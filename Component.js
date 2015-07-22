jQuery.sap.declare("com.splittemplate.Component");

sap.ui.core.UIComponent.extend("com.splittemplate.Component",{
	metadata: {
		name: "Splittemplate",
		version: "0.1",
		includes: [],
		dependencies: {
			libs: ["sap.m"],
		},
		config: {
			resourceBundle: "i18n/messageBundle.properties"
		},
		routing: {
			config: {
				viewType: "JS",
				targetControl: "splitApp",
				viewPath: "com.splittemplate.view",
				clearTarget: false,
				transition: "slide"
			},
			routes: [
				{
					pattern: "management/{category}",
					name: "management",
					view: "SidebarManagement",
					targetAggregation: "masterPages",
					subroutes: [
						{
						   pattern: "management/{category}",
						   name: "category",
						   view: "Category",
						   targetAggregation: "detailPages",
						},
						{
						   pattern: "management/category/{category}/subunit/{subunit}",
						   name: "unit",
						   view: "Unit",
						   targetAggregation: "detailPages",
						},
					]
				},
				{
					pattern: "",
					name: "default",
					view: "Sidebar",
					targetAggregation: "masterPages",
					subroutes: [
						{
							pattern: "",
							name: "index",
							view: "Index",
							targetAggregation: "detailPages",
							callback: function () {
								/*Routes can have callbacks */
							}
						},
						{
							pattern: "settings",
							name: "settings",
							view: "Settings",
							targetAggregation: "detailPages",
						},
						{
							pattern: "about",
							name: "about",
							view: "About",
							targetAggregation: "detailPages",
						},
						{
							pattern: "{all*}",
							name: "404",
							view: "404",
							targetAggregation: "detailPages",
						}
					]
				}
			]
		}
	},
	init: function() {
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("sap.ui.core.routing.HashChanger");
		
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		this._router = this.getRouter();

		this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
		this._router.initialize();
	},
	createContent: function() {
		var oView = sap.ui.view({
			id: "app",
			viewName: "com.splittemplate.view.App",
			type: "JS",
			viewData: { component: this }
		});

		//Data from "fake back-end"
		var jsonModel = new sap.ui.model.json.JSONModel('model/backend.json');
		jsonModel.setDefaultBindingMode('OneWay');
		oView.setModel(jsonModel, 'management');

		//Custom App settings
		var settings = {
			language: 'de',
			languages: [
				{key: 'de',},
				{key: 'en',},
				{key: 'fr',}
			]
		};

		var settingsModel = new sap.ui.model.json.JSONModel(settings);
		oView.setModel(settingsModel, 'settings');

		
		//Set i18n model 
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "i18n/messageBundle.properties",
			bundleLocale: settings.language
		});
		oView.setModel(i18nModel, "i18n");

		//get a specific i18n value
		//sap.ui.getCore().byId('app').getModel('i18n').getResourceBundle().getText('language');

		return oView;
	}
});
