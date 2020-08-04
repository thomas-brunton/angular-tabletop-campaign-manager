import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NewEntryComponent } from './new-entry.component';

describe('NewEntryComponent', () => {
  let component: NewEntryComponent;
  let fixture: ComponentFixture<NewEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEntryComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntryComponent);
    component = fixture.componentInstance;
    const headers: string[] = ['index', 'name', 'url'];
    component.headers = headers;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the headers', () => {
    expect(component.headers).toEqual(['index', 'name', 'url']);
  });

  it('should not update the headers variable if undefiend is passed as headers value', () => {
    component.headers = undefined;
    expect(component.headers).toEqual(['index', 'name', 'url']);
  });

  it('should emit an event with a payload of JSON when onSubmit() is called', () => {
    const expectedOutput: JSON = JSON.parse(JSON.stringify({
      'index': '',
      'name': '',
      'url': ''
    }));
    let entry;
    component.finishedEntryEmitter.subscribe(newEntry => {
      entry = newEntry;
    });
    component.onSubmit();
    expect(entry).toEqual(expectedOutput);
  });
});
