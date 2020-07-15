import { Component, OnInit } from '@angular/core';
import {TableService} from "../table.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private table : TableService) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables(): void {
    
  }
}
