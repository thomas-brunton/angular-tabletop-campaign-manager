"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VtmApiService = void 0;
var core_1 = require("@angular/core");
var VtmApiService = /** @class */ (function () {
    function VtmApiService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.setting = 'vtm';
        this.vtmApiUrl = '/assets/vtm_5e_api/'; // Here please specify where you downloaded the vampire api
    }
    VtmApiService.prototype.getRaces = function () {
        return this.sendRequest('clans/clans.json');
    };
    VtmApiService.prototype.getAbilities = function () {
        return this.sendRequest('powers/powers.json');
    };
    VtmApiService.prototype.getDetails = function (url) {
        return this.sendRequest(url);
    };
    VtmApiService.prototype.sendRequest = function (url) {
        return this.http.get(this.vtmApiUrl + url);
    };
    VtmApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], VtmApiService);
    return VtmApiService;
}());
exports.VtmApiService = VtmApiService;
