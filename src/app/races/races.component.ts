import { Component, OnInit } from '@angular/core';

import { DndapiService } from '../dndapi.service';
import { TableComponent } from './../table/table.component';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  public caption = 'List of Races';
  public headers: string[];
  public races: JSON[];

  constructor(private dndapiService: DndapiService) { }

  ngOnInit(): void {
    this.getRaces();
  }

  getRaces(): void {
    this.dndapiService.getRaces()
      .subscribe(races => {
        this.races = races['results'];
        for(let race of this.races) {
          this.headers = Object.keys(race);
          break;
        }
        //console.log(this.races);
      });
  }
}
