import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from "../api_services/apiInterface";
import { ApiSelectorService } from "../api_services/api-selector.service";

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit { 
  @Input()
  data: JSON[];

  url: string;
  headers: string[];
  details: JSON[];

  apiService : ApiService;
  apiSetting = 'dnd';

  constructor(
    private apiSelectorService : ApiSelectorService
  ) { }

  ngOnInit(): void {
    this.setUrl(this.data);
    this.getDetailsData();
  }

  setUrl (dataRow: JSON[]): void {
    this.url = dataRow['url'];
  }

  getDetailsData() : void {
    this.apiService = this.apiSelectorService.getApi(this.apiSetting);
    this.apiService.getDetails(this.url).subscribe( details => {
      this.details = details;
      for(let details of this.details){
        this.headers = Object.keys(details);
      }
    })
  }
}
