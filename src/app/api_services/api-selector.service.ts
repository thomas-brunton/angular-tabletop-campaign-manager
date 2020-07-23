import { Injectable } from '@angular/core';
import { ApiService } from "./apiInterface";
import { DndapiService } from "./dndapi.service";

@Injectable({
  providedIn: 'root'
})
export class ApiSelectorService {
  DND = "dnd";

  constructor(
    private dndApiService : DndapiService
  ) { }

  getApi(setting : string) : ApiService{
    switch(setting){
      case(this.DND):{
        return this.dndApiService;
      }
      default:{
        return this.dndApiService;
      }
    }
  }
}
