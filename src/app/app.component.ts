import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leomund\'s Tiny Forge';
  sideBarShown = false;


  toggleSidebar(): void {
    this.sideBarShown = !this.sideBarShown;
  }
}
