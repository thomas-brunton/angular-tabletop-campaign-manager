"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableDetailComponent = void 0;
var core_1 = require("@angular/core");
var TableDetailComponent = /** @class */ (function () {
    function TableDetailComponent(apiSelectorService) {
        this.apiSelectorService = apiSelectorService;
        this.apiSetting = 'dnd';
    }
    Object.defineProperty(TableDetailComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            if (value === undefined) {
                return;
            } //  The setting is sometimes called with a value of undefined first for some reason
            this._data = value;
            this.setUrl(this._data);
            this.setTitle(this._data);
            this.getDetailsData();
        },
        enumerable: false,
        configurable: true
    });
    TableDetailComponent.prototype.ngOnInit = function () {
    };
    TableDetailComponent.prototype.setUrl = function (dataRow) {
        this.url = dataRow["url"];
    };
    TableDetailComponent.prototype.setTitle = function (dataRow) {
        this.title = dataRow["name"] + ' details';
    };
    TableDetailComponent.prototype.getDetailsData = function () {
        var _this = this;
        this.apiService = this.apiSelectorService.getApi(this.apiSetting);
        this.apiService.getDetails(this.url).subscribe(function (details) {
            _this.details = details;
            _this.headers = Object.keys(_this.details);
        });
    };
    __decorate([
        core_1.Input() // for data to be set on change
    ], TableDetailComponent.prototype, "data");
    TableDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-table-detail',
            templateUrl: './table-detail.component.html',
            styleUrls: ['./table-detail.component.css']
        })
    ], TableDetailComponent);
    return TableDetailComponent;
}());
exports.TableDetailComponent = TableDetailComponent;
