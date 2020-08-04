import { Component, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from "../api_services/apiInterface";
import { TableComponent } from './../table/table.component';
import { ApiSelectorService } from "../api_services/api-selector.service";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  public caption = 'Race';
  public headers: string[];
  public races: JSON[];
  apiService: ApiService;

  constructor(
    private apiSelectorService : ApiSelectorService
    ) {
  }

  ngOnInit(): void {
    this.apiService=this.apiSelectorService.getApi("dnd")
    this.getRaces();
  }
  
  getRaces(): void {
    this.apiService.getRaces()
      .subscribe(races => {
        this.races = races['results'];
        for(let race of this.races) {
          this.headers = Object.keys(race);
          break;
        }
        //console.log(this.races);
      });
  }

  addRace(e: JSON): void {
    this.races.push(e);
  }
}
