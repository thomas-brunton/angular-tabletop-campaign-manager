import { Injectable } from '@angular/core';
import { Table } from "./table";
import { TEST_TABLE } from "./test_table"

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getTable() : Table[] {
    return TEST_TABLE;
  }
}
