import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { RacesComponent } from './races/races.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    RacesComponent,
    TableComponent,
    NewEntryComponent,
    AbilitiesComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
