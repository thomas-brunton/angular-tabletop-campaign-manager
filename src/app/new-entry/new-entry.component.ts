import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewEntry } from './newEntryInterface';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  private Headers: string[];
  @Input()
  public set headers(value) {
    if (value === undefined) { return; }  //  The setting is sometimes called with a value of undefined first for some reason

    this.Headers = value;
    this.setupFormControls(this.Headers);
  }
  public get headers() {  //  Need the getter for getting the headers in the view, the for loop for headers doesn't work otherwise
    return this.Headers;
  }

  @Input()
  caption: string[];
  @Output()
  finishedEntryEmitter = new EventEmitter<JSON>();
  private finishedEntry: object = {};

  newEntryForm: FormGroup = this.fb.group({});  //  Start with an empty formGroup so angular doesn't give an error when linking formGroup to form tag in view

  newEntry: NewEntry = {} as NewEntry;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  private setupFormControls(headers: string[]): void {
    for (const header of headers) {
      this.newEntry[header] = new FormControl('', Validators.required); //  First parameter is initial value of the form control while the next value is the validators for the control
    }

    this.newEntryForm = new FormGroup(this.newEntry);

  }

  onSubmit(): void {
    for (const header of this.headers) {
      this.finishedEntry[header] = this.newEntryForm.controls[header].value;
    }
    const finishedEntryJSON: JSON = JSON.parse(JSON.stringify(this.finishedEntry)); //  Stringify then parse the finishedEntry object to create a variable of type JSON

    this.finishedEntryEmitter.emit(finishedEntryJSON);
  }
}
