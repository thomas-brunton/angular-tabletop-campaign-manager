"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewEntryComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var NewEntryComponent = /** @class */ (function () {
    function NewEntryComponent(fb) {
        this.fb = fb;
        this.finishedEntryEmitter = new core_1.EventEmitter();
        this.finishedEntry = {};
        this.newEntryForm = this.fb.group({}); //  Start with an empty formGroup so angular doesn't give an error when linking formGroup to form tag in view
        this.newEntry = {};
    }
    Object.defineProperty(NewEntryComponent.prototype, "headers", {
        get: function () {
            return this.Headers;
        },
        set: function (value) {
            if (value === undefined) {
                return;
            } //  The setting is sometimes called with a value of undefined first for some reason
            this.Headers = value;
            this.setupFormControls(this.Headers);
        },
        enumerable: false,
        configurable: true
    });
    NewEntryComponent.prototype.ngOnInit = function () { };
    NewEntryComponent.prototype.setupFormControls = function (headers) {
        for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
            var header = headers_1[_i];
            this.newEntry[header] = new forms_1.FormControl('', forms_1.Validators.required); //  First parameter is initial value of the form control while the next value is the validators for the control
        }
        this.newEntryForm = new forms_1.FormGroup(this.newEntry);
    };
    NewEntryComponent.prototype.onSubmit = function () {
        for (var _i = 0, _a = this.headers; _i < _a.length; _i++) {
            var header = _a[_i];
            this.finishedEntry[header] = this.newEntryForm.controls[header].value;
        }
        var finishedEntryJSON = JSON.parse(JSON.stringify(this.finishedEntry)); //  Stringify then parse the finishedEntry object to create a variable of type JSON
        this.finishedEntryEmitter.emit(finishedEntryJSON);
    };
    __decorate([
        core_1.Input()
    ], NewEntryComponent.prototype, "headers");
    __decorate([
        core_1.Input()
    ], NewEntryComponent.prototype, "caption");
    __decorate([
        core_1.Output()
    ], NewEntryComponent.prototype, "finishedEntryEmitter");
    NewEntryComponent = __decorate([
        core_1.Component({
            selector: 'app-new-entry',
            templateUrl: './new-entry.component.html',
            styleUrls: ['./new-entry.component.css']
        })
    ], NewEntryComponent);
    return NewEntryComponent;
}());
exports.NewEntryComponent = NewEntryComponent;
