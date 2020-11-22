import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { RacesComponent } from './races/races.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { TableDetailComponent} from './table/table-detail/table-detail.component';
import { TableDetailViewComponent} from './table/table-detail/table-detail-view/table-detail-view.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ClassesComponent } from './classes/classes.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './settings/settings.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessagesComponent,
    RacesComponent,
    TableComponent,
    TableDetailComponent,
    TableDetailViewComponent,
    NewEntryComponent,
    AbilitiesComponent,
    ClassesComponent,
    SettingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    SettingsService,  //  The settings service is run when the app initially loads to load the settings so they can be used by the rest of the app
                      //  This is done with the APP_INITILIZER token to call the initFunction in the SettingsService
    {
      provide: APP_INITIALIZER,
      useFactory: (ss: SettingsService) => () => ss.initFunction(),
      deps: [SettingsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
