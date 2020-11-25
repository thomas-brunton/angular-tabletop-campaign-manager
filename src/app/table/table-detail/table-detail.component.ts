import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api_services/apiInterface';
import { ApiSelectorService } from '../../api_services/api-selector.service';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {

  private _data: JSON;
  @Input() // for data to be set on change
  public set data(value) {
    this._data = value;

    if (!this.setUrl(this._data)) { // error handling occurs when attempting to set the url as pulling of the api happens after
      return;
    }
    this.setTitle(this._data);
    this.getDetailsData();
  }
  public get data(): JSON {  //  Need the getter for getting the headers in the view, the for loop for headers doesn't work otherwise
    return this._data;
  }

  @Output()
  deleteRowEvent = new EventEmitter();

  url: string;
  title: string;
  headers: string[];
  details: JSON[];

  apiService: ApiService;

  constructor(
    private apiSelectorService: ApiSelectorService
  ) { }

  ngOnInit(): void {
  }

  setUrl(dataRow: JSON): boolean {
    if (dataRow === undefined || dataRow['url'] === undefined || dataRow['url'] === ''){
      return false;
    }
    else{
      this.url = dataRow['url'];
      return true;
    }
  }

  setTitle(dataRow: JSON): void {
    this.title = dataRow['name'] + ' details';
  }

  getDetailsData(): void {
    this.apiService = this.apiSelectorService.getApi();
    this.apiService.getDetails(this.url).subscribe( details => {
      this.details = details;
      this.headers = Object.keys(this.details);
    });
  }

  deleteRow(event: JSON): void {
    this.deleteRowEvent.emit(event);
  }
}
