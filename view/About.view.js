sap.ui.jsview("com.splittemplate.view.About", {
	createContent : function(oController) {
		return new sap.m.Page({
			title: "About Page Title",
			content: [
				new sap.m.VBox({
					items: [
						new sap.m.Text({
							text: 'About Page'
						})
					],
				})
			]
		});
	}
});