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

  constructor() {
  }

  ngOnInit(): void {
  }

}
