import { Component, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from '../api_services/apiInterface';
import { ApiSelectorService } from '../api_services/api-selector.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {
  public caption = 'Ability';
  public headers: string[];
  public abilities: JSON[];
  apiService: ApiService;

  public apiSetting = 'dnd';

  constructor(private apiSelectorService: ApiSelectorService) {
  }

  ngOnInit(): void {
    this.getAbilities();
  }

  getAbilities(): void {
    this.apiService = this.apiSelectorService.getApi(this.apiSetting);
    this.apiService.getAbilities()
      .subscribe(abilities => {
        this.abilities = abilities["results"];
        for (const ability of this.abilities) {
          this.headers = Object.keys(ability);
          break;
        }
      });
  }

  setApiSetting(api){
    this.apiSetting = api;
    this.getAbilities();
  }
  addAbility( entry: JSON): void{
    this.abilities.push(entry);
  }

}
