import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-detail-view',
  templateUrl: './table-detail-view.component.html',
  styleUrls: ['./table-detail-view.component.css']
})
export class TableDetailViewComponent implements OnInit {

  private _data: JSON;
  @Input()
  public set data(value){
    if (value === undefined) { return; }  //  The setting is sometimes called with a value of undefined first for some reason
    this._data = value;
    this.name = this._data['name'];
  }
  public get data(): JSON {
    return this._data;
  }
  private _headers: JSON;
  @Input()
  public set headers(value){
    if (value === undefined) { return; }  //  The setting is sometimes called with a value of undefined first for some reason

    this._headers = value;
  }
  public get headers(): JSON {
    return this._headers;
  }
  private _caption: string;
  @Input()
  public set caption(value) {
    this._caption = value;
  }
  public get caption(): string {
    return this._caption;
  }

  @Output()
  deleteRowEvent = new EventEmitter();

  public name: string;

  constructor() {}

  ngOnInit(): void {
  }

  deleteRow(entry: JSON): void {
    this.deleteRowEvent.emit(JSON.stringify(entry));
  }

}
