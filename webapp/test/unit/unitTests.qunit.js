/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"tableandform1/tableandformproject1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
