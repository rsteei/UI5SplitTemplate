sap.ui.jsview("com.splittemplate.view.Index", {
	createContent : function(oController) {
		return new sap.m.Page({
			title: "Index",
			content: [
				new sap.m.VBox({
					items: [
						new sap.m.Text({
							text: 'Master Detail UI5 Template - Split Template, with no extras'
						}),
						new sap.m.Text({
							text: '\n Features included: \n- Basic Hash Navigation \n - Basic Model binding and loading \n - Dynamic and static navigation \n - Internationilization with language switch \n - 404 Page'
						})
					],
				})
			],
		});
	}
});