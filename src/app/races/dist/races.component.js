"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RacesComponent = void 0;
var core_1 = require("@angular/core");
var RacesComponent = /** @class */ (function () {
    function RacesComponent(apiSelectorService) {
        this.apiSelectorService = apiSelectorService;
        this.caption = 'Race';
        this.apiSetting = 'dnd';
    }
    RacesComponent.prototype.ngOnInit = function () {
        this.getRaces();
    };
    RacesComponent.prototype.getRaces = function () {
        var _this = this;
        this.apiService = this.apiSelectorService.getApi(this.apiSetting);
        this.apiService.getRaces()
            .subscribe(function (races) {
            _this.races = races['results'];
            for (var _i = 0, _a = _this.races; _i < _a.length; _i++) {
                var race = _a[_i];
                _this.headers = Object.keys(race);
                break;
            }
        });
    };
    RacesComponent.prototype.setApiSetting = function (newValue) {
        this.apiSetting = newValue;
    };
    RacesComponent.prototype.getApiSetting = function () {
        return this.apiSetting;
    };
    RacesComponent.prototype.onSettingChange = function (newValue) {
        this.apiSetting = newValue;
        this.getRaces();
    };
    RacesComponent.prototype.addRace = function (entry) {
        this.races.push(entry);
    };
    RacesComponent = __decorate([
        core_1.Component({
            selector: 'app-races',
            templateUrl: './races.component.html',
            styleUrls: ['./races.component.css']
        })
    ], RacesComponent);
    return RacesComponent;
}());
exports.RacesComponent = RacesComponent;
