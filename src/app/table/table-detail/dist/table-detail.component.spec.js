"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var table_detail_component_1 = require("./table-detail.component");
describe('TableDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [table_detail_component_1.TableDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(table_detail_component_1.TableDetailComponent);
        component = fixture.componentInstance;
        component.data = {
            index: "brujah",
            name: "Brujah",
            url: "clans/brujah/brujah.json"
        };
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
