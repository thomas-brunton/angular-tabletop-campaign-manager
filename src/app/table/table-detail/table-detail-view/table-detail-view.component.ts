import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-detail-view',
  templateUrl: './table-detail-view.component.html',
  styleUrls: ['./table-detail-view.component.css']
})
export class TableDetailViewComponent implements OnInit {

  private _data: JSON
  @Input()
  public set data(value){
    if(value === undefined) { return }  //  The setting is sometimes called with a value of undefined first for some reason
    this._data = value;
    this.name=this._data["name"];
    console.log(this._data);
  }
  public get data(){
    return this._data;
  }
  private _headers : JSON
  @Input()
  public set headers(value){
    if(value === undefined) { return }  //  The setting is sometimes called with a value of undefined first for some reason

    this._headers = value;
  }
  public get headers(){
    return this._headers;
  }

  public name : string;

  constructor() { }

  ngOnInit(): void {
  }

}
