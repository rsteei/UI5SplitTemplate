sap.ui.jsview("com.splittemplate.view.App", {
	createContent : function(oController) {
		this.setDisplayBlock(true);
		return new sap.m.SplitApp('splitApp');
	}
});