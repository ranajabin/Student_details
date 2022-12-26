sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("tableandform1.tableandformproject1.controller.View1", {
            onInit: function () {

                let oModel = new sap.ui.model.json.JSONModel("../model/Student.json");
                this.getView().setModel(oModel);
            },

            onRowClick: function (oEvent) {
                var value1 = oEvent.oSource.mAggregations.cells[0].mProperties;

                var array1 = [{
                    "studname": "Sumit",
                    "regno": "123",
                    "mobno": "928392802",
                    "address": "Bangalore"
                },
                {
                    "studname": "Ankita",
                    "regno": "345",
                    "mobno": "892839280",
                    "address": "Punjab"
                },
                {
                    "studname": "Kiran",
                    "regno": "567",
                    "mobno": "983928029",
                    "address": "Pune"
                }
                ];

                var array2 = [];

                for (var i = 0; i < array1.length; i++) {
                    if (value1.text === array1[i].studname) {
                        array2.push(array1[i]);

                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(array2);
                        this.getView().setModel(oModel, "student2");
                    }
                }

            }
        });
    });
