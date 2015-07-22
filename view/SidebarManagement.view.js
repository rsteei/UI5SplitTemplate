sap.ui.jsview("com.splittemplate.view.SidebarManagement", {
	getControllerName : function() {
		return "com.splittemplate.view.SidebarManagement";
	},
	createContent: function(oController) {
		var sidebarUnitList = new sap.m.List().bindItems({
			path: "management>unit/subunits/", 
			template: new sap.m.StandardListItem({
					title: "{management>name}",
					type: sap.m.ListType.Navigation,
					press: function(evt){
						oController.sidebarDynamicNav(evt);
					}
				})
		});
 		return new sap.m.Page({
			title: "{management>category} Sidebar",
			content: [
				new sap.m.List({
 					items: [
 						new sap.m.StandardListItem({
							title: "Home",
							type: sap.m.ListType.Navigation,
							press: function(evt){
								var router = sap.ui.core.UIComponent.getRouterFor(oController);
								router.navTo('/', null, false); 
							}
						})
					]
 				}),
				sidebarUnitList,
			],
			showNavButton: true,
			navButtonPress: function() { 
				window.history.back(); //should be native
			}
		});
	}
});