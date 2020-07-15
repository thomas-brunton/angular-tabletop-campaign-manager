import { Component, OnInit } from '@angular/core';
import {TableService} from "../table.service"
import { Table } from "../table";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tables : Table[];
  constructor(private table : TableService) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables(): void {
    this.tables = this.table.getTable()
  }
}
