sap.ui.jsview("com.splittemplate.view.Category", {
	createContent : function(oController) {
		return new sap.m.Page({
			title: "Category Page Title",
			content: [
				new sap.m.VBox({
					items: [
						new sap.m.Text({
							text: 'Category Page'
						})
					],
				})
			]
		});
	}
});