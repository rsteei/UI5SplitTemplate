sap.ui.controller("com.splittemplate.view.Unit", {
	onInit: function() {
		this._router = sap.ui.core.UIComponent.getRouterFor(this);
		this._router.attachRoutePatternMatched(this._onRouteMatched, this);

	},
	_onRouteMatched: function(oEvent) {
		this.params = oEvent.getParameter("arguments");
		var localModel = sap.ui.getCore().byId("app").getModel('management').getContext('/manage/' + this.params.category + '/unit/subunits/' + this.params.subunit);
		this.getView().setBindingContext(localModel,'management');
	},
	onBeforeRendering: function() {
	},
	onAfterRendering: function() {

	},
/*
	onExit: function() {

	}
*/
});