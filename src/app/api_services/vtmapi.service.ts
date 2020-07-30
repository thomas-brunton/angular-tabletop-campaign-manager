import { Injectable } from '@angular/core';
import { ApiService } from "./apiInterface";
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { MessageService } from '../message.service';


@Injectable({
  providedIn: 'root'
})
export class VtmApiService implements ApiService{
  setting = "vtm";
  private vtmApiUrl = "/assets/vtm_5e_api/"; //Here please specify where you downloaded the vampire api

  constructor(private http : HttpClient,private messageService: MessageService) {
    
  }

  getRaces() : Observable<JSON[]> {
    return this.sendRequest('clans/clans.json');
  }

  sendRequest(url : string ) : Observable<JSON[]>{
    console.log(this.vtmApiUrl+url);
    return this.http.get<JSON[]>(this.vtmApiUrl + url);
  }
}
