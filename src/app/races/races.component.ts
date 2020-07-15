import { Component, OnInit } from '@angular/core';

import { DndapiService } from '../dndapi.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  public races: JSON[];

  constructor(private dndapiService: DndapiService) { }

  ngOnInit(): void {
    this.getRaces();
  }

  getRaces(): void {
    this.dndapiService.getRaces()
      .subscribe(races => {
        this.races = races['results'];
        //console.log(this.races);
      });
  }
}
