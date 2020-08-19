import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesComponent } from './races/races.component';
import { AbilitiesComponent } from "./abilities/abilities.component";
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  { path: 'races', component: RacesComponent },
  { path: 'abilities', component : AbilitiesComponent },
  { path: 'classes', component: ClassesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
