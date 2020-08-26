"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dashboardLayout_service_1 = require("./dashboardLayout.service");
describe('LayoutService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(dashboardLayout_service_1.LayoutService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should create a layout', function () {
        var testLayout = [
            { position: 1, name: "Race", route: "races" },
            { position: 2, name: "Spells", route: "abilities" },
            { position: 3, name: "Classes", route: "classes" }
        ];
        expect(service.getLayout()).toEqual(testLayout);
    });
});
