"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DndApiService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var DndApiService = /** @class */ (function () {
    function DndApiService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.dndapiUrl = 'https://www.dnd5eapi.co';
        this.setting = 'dnd';
    }
    DndApiService.prototype.getRaces = function () {
        return this.sendRequest('/api/races');
    };
    DndApiService.prototype.getAbilities = function () {
        return this.sendRequest('/api/spells');
    };
    DndApiService.prototype.getDetails = function (url) {
        return this.sendRequest(url);
    };
    DndApiService.prototype.getClasses = function () {
        return this.sendRequest('/api/classes');
    };
    DndApiService.prototype.sendRequest = function (url) {
        var _this = this;
        return this.http.get(this.dndapiUrl + url)
            .pipe(operators_1.tap(function () { return _this.log('fetched ' + url); }), operators_1.catchError(this.handleError('get' + url)) // TODO: figure out how to have a blank json object to send to error function
        );
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DndApiService.prototype.handleError = function (operation, result) {
        var _this = this;
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error);
            // TODO: better job of transforming error for user consuption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    DndApiService.prototype.log = function (message) {
        this.messageService.add("DnDApi Service: " + message);
    };
    DndApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DndApiService);
    return DndApiService;
}());
exports.DndApiService = DndApiService;
