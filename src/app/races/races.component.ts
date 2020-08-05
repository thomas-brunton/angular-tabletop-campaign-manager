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

  public apiSetting = 'dnd';

  constructor(
    private apiSelectorService : ApiSelectorService
    ) {
  }

  ngOnInit(): void {
    this.getRaces();
  }
  
  getRaces(): void {
    this.apiService=this.apiSelectorService.getApi(this.apiSetting);
    this.apiService.getRaces()
      .subscribe(races => {
        this.races = races['results'];
        for(let race of this.races) {
          this.headers = Object.keys(race);
          break;
        }
        console.log("Returned races: ", this.races);
      });
  }

  setApiSetting(newValue) {
    this.apiSetting = newValue;
  }

  getApiSetting() {
    return this.apiSetting;
  }

  onSettingChange(newValue) {
    this.apiSetting = newValue;
    this.getRaces();
  }

  addRace(e: JSON): void {
    this.races.push(e);
  }
}
