sap.ui.jsview("com.splittemplate.view.Settings", {
	getControllerName : function() {
		return "com.splittemplate.view.Settings";
	},
	createContent : function(oController) {
		return new sap.m.Page({
			title: "Settings Page Title",
			content: [
				new sap.m.VBox({
					items: [
						new sap.m.Text({
							text: '{i18n>language}:'
						}),
						new sap.m.Select({
							change: function(ev) {
								var key = ev.getParameter("selectedItem").getKey();
								oController.changeLanguage(key);
							}
						}).bindItems('settings>/languages', new sap.ui.core.Item({
							key: '{settings>key}',
							text: '{settings>key}',
						}))
					],
				})
			]
		});
	}
});