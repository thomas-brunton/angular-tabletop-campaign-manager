import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TableComponent} from '../../table.component';
import { TableDetailViewComponent } from './table-detail-view.component';

const testData = {
  index     : 'brujah',
  name      : 'Bujah',
  faction   : 'Anarch'
};

describe('TableDetailViewComponent', () => {
  let component: TableDetailViewComponent;
  let fixture: ComponentFixture<TableDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDetailViewComponent ],
      providers: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDetailViewComponent);
    component = fixture.componentInstance;

    component.data = JSON.parse(JSON.stringify(testData));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
