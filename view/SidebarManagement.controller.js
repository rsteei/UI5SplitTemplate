sap.ui.controller("com.splittemplate.view.SidebarManagement", {
	onInit: function() {
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		this._router.attachRoutePatternMatched(this._onRouteMatched, this);
	},
	_onRouteMatched: function(oEvent) {
		this.category = oEvent.getParameter("arguments").category;
		var localModel = sap.ui.getCore().byId("app").getModel('management').getContext('/manage/' + this.category);
		this.getView().setBindingContext(localModel,'management');
	},
	sidebarDynamicNav: function(evt) {
		var path = evt.getSource().getBindingContext('management').sPath;
		this.subunit = path.substring((path.lastIndexOf('/') + 1), path.length);
		this._router.navTo('unit', {'category': this.category, 'subunit': this.subunit }, false);
	}
});