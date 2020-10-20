import { Component, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from '../api_services/apiInterface';
import { ApiSelectorService } from '../api_services/api-selector.service';

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
    private apiSelectorService: ApiSelectorService
    ) {
  }

  ngOnInit(): void {
    this.getRaces();
  }

  getRaces(): void {
    this.apiService = this.apiSelectorService.getApi();
    this.apiService.getRaces()
      .subscribe(races => {
        this.races = races['results'];
        for (const race of this.races) {
          this.headers = Object.keys(race);
          break;
        }
      });
  }

  addRace(entry: JSON): void {  // adds an entry to races
    this.races.push(entry);
  }
}
