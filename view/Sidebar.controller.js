sap.ui.controller("com.splittemplate.view.Sidebar", {
	onInit: function() {
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
	},
/*
	onBeforeRendering: function() {

	},
	onAfterRendering: function() {

	},
	onExit: function() {

	}
*/
	sidebarDynamicNav: function(evt) {
		var path = evt.getSource().getBindingContext('management').sPath;
		var paths = path.split('/');
		this._router.navTo('management', {'category': paths[2]});
	},
	sidebarStaticNav: function(location) {
		this._router.navTo(location);
	}
});