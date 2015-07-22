sap.ui.controller("com.splittemplate.view.Settings", {
/*
	onInit: function() {
		
	},
*/
	changeLanguage: function(lang) {
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "i18n/messageBundle.properties",
			bundleLocale: lang
		});
		sap.ui.getCore().byId('app').setModel(i18nModel, "i18n");
		//Use cookies/localstorage for visitor settings like language preference
	}
/*
	onBeforeRendering: function() {

	},
	onAfterRendering: function() {

	},
	onExit: function() {

	}
*/
});