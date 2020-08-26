"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var messages_component_1 = require("./messages/messages.component");
var races_component_1 = require("./races/races.component");
var app_routing_module_1 = require("./app-routing.module");
var table_component_1 = require("./table/table.component");
var table_detail_component_1 = require("./table/table-detail/table-detail.component");
var table_detail_view_component_1 = require("./table/table-detail/table-detail-view/table-detail-view.component");
var new_entry_component_1 = require("./new-entry/new-entry.component");
var abilities_component_1 = require("./abilities/abilities.component");
var classes_component_1 = require("./classes/classes.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                messages_component_1.MessagesComponent,
                races_component_1.RacesComponent,
                table_component_1.TableComponent,
                table_detail_component_1.TableDetailComponent,
                table_detail_view_component_1.TableDetailViewComponent,
                new_entry_component_1.NewEntryComponent,
                abilities_component_1.AbilitiesComponent,
                classes_component_1.ClassesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
