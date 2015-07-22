sap.ui.jsview("com.splittemplate.view.404", {
	createContent : function(oController) {
		return new sap.m.Page({
			title: "404 Page Title",
			content: [
				new sap.m.VBox({
					items: [
						new sap.m.Text({
							text: '404'
						})
					],
				})
			]
		});
	}
});