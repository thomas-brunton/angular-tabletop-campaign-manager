import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()
  data: JSON[];
  @Input()
  headers: string[];
  @Input()
  caption: string[];

  public selectedRow: JSON = JSON.parse(JSON.stringify({'index': ''})); //  Add a blank value for index so that the modal doesn't complain that it can't populate the modal when webpage initially loads

  constructor() {
  }

  ngOnInit(): void {
  }

  selectRow(dataRow: JSON): void {
    this.selectedRow = dataRow;
    // console.log(this.selectedRow);
  }

  deleteRow(dataRow: JSON): void {
    const index = this.data.findIndex(x => x['index'] === dataRow['index']);
    if (index >= 0) {
      this.data.splice(index, 1);
    }
  }
}
