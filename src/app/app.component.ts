import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dnd-campaign-manager';
  sideBarShown = false;


  toggleSidebar(){
    this.sideBarShown = !this.sideBarShown;
  }
}
