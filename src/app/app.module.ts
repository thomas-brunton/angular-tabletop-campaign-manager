import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { RacesComponent } from './races/races.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RacesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
