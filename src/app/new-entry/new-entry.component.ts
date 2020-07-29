import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  @Input()
  headers: string[];
  @Input()
  caption: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
