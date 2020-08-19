import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from "../../api_services/apiInterface";
import { ApiSelectorService } from "../../api_services/api-selector.service";

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit { 
  
  private _data: JSON;


  @Input() // for data to be set on change
  public set data(value) {
    if(value === undefined) { return }  //  The setting is sometimes called with a value of undefined first for some reason

    this._data = value;
    this.setUrl(this._data);
    this.setTitle(this._data);
    this.getDetailsData();
  }
  public get data() {  //  Need the getter for getting the headers in the view, the for loop for headers doesn't work otherwise
    return this._data;
  }
  url: string;
  title : string;
  headers: string[];
  details: JSON[];

  apiService : ApiService;
  apiSetting = 'dnd';

  constructor(
    private apiSelectorService : ApiSelectorService
  ) { }

  ngOnInit(): void {
  }


  setUrl (dataRow: JSON): void {
    this.url = dataRow['url'];
  }
  
  setTitle (dataRow: JSON) : void {
    this.title = dataRow["name"] + " details";
  }

  getDetailsData() : void {
    this.apiService = this.apiSelectorService.getApi(this.apiSetting);
    this.apiService.getDetails(this.url).subscribe( details => {
      this.details = details;
      })
    console.log(this.details);
  }
}
