import { Injectable } from '@angular/core';
import { ApiService } from './apiInterface';
import { DndApiService } from './dndapi.service';
import { VtmApiService } from './vtmapi.service';

@Injectable({
  providedIn: 'root'
})
export class ApiSelectorService {
  DND = 'dnd';
  VTM = 'vtm';

  constructor(
    private dndApiService: DndApiService,
    private vtmApiService: VtmApiService
  ) { }

  getApi(setting: string): ApiService{
    switch (setting){
      case(this.DND): {
        return this.dndApiService;
      }
      case(this.VTM): {
        return this.vtmApiService;
      }
      default: {
        return this.dndApiService;
      }
    }
  }
}
