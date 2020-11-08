import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api_services/apiInterface';
import { ApiSelectorService } from '../api_services/api-selector.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  public caption = 'Class';
  public headers: string[];
  public tableTopClasses: JSON[];
  apiService: ApiService;

  constructor(private apiSelectorService: ApiSelectorService) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(): void {
    this.apiService = this.apiSelectorService.getApi();
    this.apiService.getClasses()
      .subscribe(tableTopClasses => {
        this.tableTopClasses = tableTopClasses['results'];
        for (const tableTopClass of this.tableTopClasses) {
          this.headers = Object.keys(tableTopClass);
          break;
        }
        console.log(tableTopClasses);
      });
  }

  addClass(entry: JSON): void {
    this.tableTopClasses.push(entry);
  }

  deleteRow(event) {
    const dataRow = JSON.parse(event);
    const index = this.tableTopClasses.findIndex(x => x['index'] === dataRow['index']);
    if (index >= 0) {
      this.tableTopClasses.splice(index, 1);
    }
  }
}
