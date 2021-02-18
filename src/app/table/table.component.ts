import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @Input()
  data: JSON[];
  @Input()
  headers: string[];
  @Input()
  caption: string[];

  @Output()
  deleteRowEvent = new EventEmitter();

  public selectedRow: JSON = JSON.parse(JSON.stringify({index: ''})); //  Add a blank value for index so that the modal doesn't complain that it can't populate the modal when webpage initially loads

  constructor() {
  }

  ngOnInit(): void {
  }

  selectRow(dataRow: JSON): void {
    this.selectedRow = dataRow;
  }

  deleteRow(event: string): void {
    this.deleteRowEvent.emit(event);
  }
}
