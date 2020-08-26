"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AbilitiesComponent = void 0;
var core_1 = require("@angular/core");
var AbilitiesComponent = /** @class */ (function () {
    function AbilitiesComponent(apiSelectorService) {
        this.apiSelectorService = apiSelectorService;
        this.caption = 'Ability';
        this.apiSetting = 'dnd';
    }
    AbilitiesComponent.prototype.ngOnInit = function () {
        this.getAbilities();
    };
    AbilitiesComponent.prototype.getAbilities = function () {
        var _this = this;
        this.apiService = this.apiSelectorService.getApi(this.apiSetting);
        this.apiService.getAbilities()
            .subscribe(function (abilities) {
            _this.abilities = abilities['results'];
            for (var _i = 0, _a = _this.abilities; _i < _a.length; _i++) {
                var ability = _a[_i];
                _this.headers = Object.keys(ability);
                break;
            }
        });
    };
    AbilitiesComponent.prototype.setApiSetting = function (api) {
        this.apiSetting = api;
        this.getAbilities();
    };
    AbilitiesComponent.prototype.addAbility = function (entry) {
        this.abilities.push(entry);
    };
    AbilitiesComponent = __decorate([
        core_1.Component({
            selector: 'app-abilities',
            templateUrl: './abilities.component.html',
            styleUrls: ['./abilities.component.css']
        })
    ], AbilitiesComponent);
    return AbilitiesComponent;
}());
exports.AbilitiesComponent = AbilitiesComponent;
