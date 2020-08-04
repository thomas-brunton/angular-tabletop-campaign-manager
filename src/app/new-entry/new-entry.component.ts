import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { newEntry } from './newEntryInterface';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  private _headers: string[];
  @Input()
  public set headers(value) {
    if(value === undefined) { return }  //  The setting is sometimes called with a value of undefined first for some reason

    this._headers = value;
    this.setupFormControls(this._headers);
  }
  public get headers() {  //  Need the getter for getting the headers in the view, the for loop for headers doesn't work otherwise
    return this._headers;
  }

  @Input()
  caption: string[];
  @Output()
  finishedEntryEmitter = new EventEmitter<JSON>();
  private finishedEntry: Object = {};

  newEntryForm: FormGroup = this.fb.group({});  //  Start with an empty formGroup so angular doesn't give an error when linking formGroup to form tag in view

  newEntry: newEntry = {} as newEntry;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  private setupFormControls(headers: string[]): void {
    for(let header of headers) {
      this.newEntry[header] = new FormControl("", Validators.required); //  First parameter is initial value of the form control while the next value is the validators for the control
    }

    this.newEntryForm = new FormGroup(this.newEntry);

  }

  onSubmit() {
    for(let header of this._headers) {
      this.finishedEntry[header] = this.newEntryForm.controls[header].value;
    }
    let finishedEntryJSON: JSON = JSON.parse(JSON.stringify(this.finishedEntry)); //  Stringify then parse the finishedEntry object to create a variable of type JSON

    this.finishedEntryEmitter.emit(finishedEntryJSON);
  }
}
