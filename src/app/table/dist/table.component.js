"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableComponent = void 0;
var core_1 = require("@angular/core");
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.selectedRow = JSON.parse(JSON.stringify({ "index": "" })); //  Add a blank value for index so that the modal doesn't complain that it can't populate the modal when webpage initially loads
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.selectRow = function (dataRow) {
        this.selectedRow = dataRow;
        //console.log(this.selectedRow);
    };
    TableComponent.prototype.deleteRow = function (dataRow) {
        var index = this.data.findIndex(function (x) { return x['index'] === dataRow['index']; });
        if (index >= 0) {
            this.data.splice(index, 1);
        }
    };
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "data");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "headers");
    __decorate([
        core_1.Input()
    ], TableComponent.prototype, "caption");
    TableComponent = __decorate([
        core_1.Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
