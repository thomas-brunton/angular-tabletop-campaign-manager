import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api_services/apiInterface';
import { ApiSelectorService } from '../services/api_services/api-selector.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html'
})
export class AbilitiesComponent implements OnInit {
  public caption = 'Abilities';
  public headers: string[];
  public abilities: JSON[];
  apiService: ApiService;

  constructor(private apiSelectorService: ApiSelectorService) {
  }

  ngOnInit(): void {
    this.getAbilities();
  }

  getAbilities(): void {
    this.apiService = this.apiSelectorService.getApi();
    this.apiService.getAbilities()
      .subscribe(abilities => {
        this.abilities = abilities['results'];
        for (const ability of this.abilities) {
          this.headers = Object.keys(ability);
          break;
        }
      });
  }

  addAbility( entry: JSON): void{
    this.abilities.push(entry);
  }

  deleteRow(event: string): void {
    const dataRow = JSON.parse(event);
    const index = this.abilities.findIndex(x => x['index'] === dataRow['index']);
    if (index >= 0) {
      this.abilities.splice(index, 1);
    }
  }
}
