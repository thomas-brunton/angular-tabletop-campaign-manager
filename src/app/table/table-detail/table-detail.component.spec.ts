import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailComponent } from './table-detail.component';

describe('TableDetailComponent', () => {
  let component: TableDetailComponent;
  let fixture: ComponentFixture<TableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDetailComponent);
    component = fixture.componentInstance;
    const testData = {
      index : "brujah",
      name : "Brujah",
      url : "clans/brujah/brujah.json"
    };

    component.data = JSON.parse(JSON.stringify(testData));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
