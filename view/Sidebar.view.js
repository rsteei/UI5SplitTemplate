sap.ui.jsview("com.splittemplate.view.Sidebar", {
	getControllerName : function() {
		return "com.splittemplate.view.Sidebar";
	},
	createContent: function(oController) {
		var sidebarDynamicList = new sap.m.List().bindItems({
			path: "management>/manage", 
			template: new sap.m.StandardListItem({
					title: "{management>category}",
					type: sap.m.ListType.Navigation,
					press: function(evt){
						oController.sidebarDynamicNav(evt);
					}
				})
		});
		var sidebarStaticList = new sap.m.List({
			items: [
				new sap.m.StandardListItem({
					title: "Settings",
					type: sap.m.ListType.Navigation,
					press: function(evt){
						oController.sidebarStaticNav('settings');
					}
				}),
				new sap.m.StandardListItem({
					title: "About",
					type: sap.m.ListType.Navigation,
					press: function(evt){
						oController.sidebarStaticNav('about');
					}
				})
			]
		});
 		return new sap.m.Page({
			title: "Sidebar",
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
				sidebarDynamicList,
				sidebarStaticList
			]
		});
	}
});