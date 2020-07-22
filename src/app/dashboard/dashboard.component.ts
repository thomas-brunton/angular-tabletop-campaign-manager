import { Component, OnInit } from '@angular/core';
import {LayoutService} from "../dashboardLayout.service"
import { Layout } from "../layout";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  layout : Layout[];
  constructor(private layoutService : LayoutService) { }

  ngOnInit(): void {
    this.getLayout();
  }

  getLayout(): void {
    this.layout = this.layoutService.getLayout()
  }
}
