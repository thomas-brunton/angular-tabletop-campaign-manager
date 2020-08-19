import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailViewComponent } from './table-detail-view.component';

describe('TableDetailViewComponent', () => {
  let component: TableDetailViewComponent;
  let fixture: ComponentFixture<TableDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
