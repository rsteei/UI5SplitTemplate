sap.ui.jsview("com.splittemplate.view.Unit", {
	getControllerName : function() {
		return "com.splittemplate.view.Unit";
	},
	createContent : function(oController) {
		return new sap.m.Page({
			title: "Unit Page Title",
			content: [
				new sap.m.VBox({
					items: [
						new sap.m.Text('unit_info'),
						new sap.m.Table({
							headerToolbar: new sap.m.Toolbar({
								content: new sap.m.Text({
									text: '{management>name}'
								})
							}),
							columns: [
								new sap.m.Column({
									header: new sap.m.Text({
										text: 'ID'
									})
								}),
								new sap.m.Column({
									header: new sap.m.Text({
										text: 'Name'
									})
								})
							]
						}).bindItems('management>units', new sap.m.ColumnListItem({
							cells: [
								new sap.m.Text({
									text: '{management>id}'
								}),
								new sap.m.Text({
									text: '{management>name}'
								})
							]
						}))

					],
				})
			]
		});
	}
});