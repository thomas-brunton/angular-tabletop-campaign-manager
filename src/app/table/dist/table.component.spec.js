"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var table_component_1 = require("./table.component");
describe('TableComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [table_component_1.TableComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(table_component_1.TableComponent);
        component = fixture.componentInstance;
        component.data = [
            JSON.parse(JSON.stringify({
                index: 'test',
                name: 'test',
                url: 'api/races/test'
            })),
            JSON.parse(JSON.stringify({
                index: 'test2',
                name: 'test2',
                url: 'api/races/test2'
            }))
        ];
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should select the proper row to delete', function () {
        var expectedOutput = JSON.parse(JSON.stringify({
            index: 'test',
            name: 'test',
            url: 'api/races/test'
        }));
        var rowToDelete = JSON.parse(JSON.stringify({
            index: 'test',
            name: 'test',
            url: 'api/races/test'
        }));
        component.selectRow(rowToDelete);
        expect(component.selectedRow).toEqual(expectedOutput);
    });
    it('should delete a row in the data variable', function () {
        var expectedOutput = [
            JSON.parse(JSON.stringify({
                index: 'test2',
                name: 'test2',
                url: 'api/races/test2'
            }))
        ];
        var rowToDelete = JSON.parse(JSON.stringify({
            index: 'test',
            name: 'test',
            url: 'api/races/test'
        }));
        component.deleteRow(rowToDelete);
        expect(component.data).toEqual(expectedOutput);
    });
    it('should not delete a row if no entry is found', function () {
        var expectedOutput = [
            JSON.parse(JSON.stringify({
                index: 'test',
                name: 'test',
                url: 'api/races/test'
            })),
            JSON.parse(JSON.stringify({
                index: 'test2',
                name: 'test2',
                url: 'api/races/test2'
            }))
        ];
        var rowToDelete = JSON.parse(JSON.stringify({
            index: 'test3',
            name: 'test3',
            url: 'api/races/test3'
        }));
        component.deleteRow(rowToDelete);
        expect(component.data).toEqual(expectedOutput);
    });
});
