import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesComponent } from './races/races.component';
import { AbilitiesComponent } from "./abilities/abilities.component";

const routes: Routes = [
  { path: 'races', component: RacesComponent },
  { path: 'abilities', component : AbilitiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
