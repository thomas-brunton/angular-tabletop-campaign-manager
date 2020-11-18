import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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

  beforeEach(waitForAsync(() => {
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

  it('should not set the data variable if undefined is passed', () => {
    component.data = JSON.parse(JSON.stringify({test : 'test' }));
    component.data = undefined;
    expect(component.data).toEqual(JSON.parse(JSON.stringify({test : 'test' })));
  });

  it('should not set the headers if undefined is passed', () => {
    component.headers = undefined;
    expect(component.headers).toEqual(undefined);
  });

  it('should be able to set the headers', () => {
    component.headers = JSON.parse(JSON.stringify({test: 'test'}));
    expect(component.headers).toEqual(JSON.parse(JSON.stringify({test: 'test'})));
  });

  it('should emit an event to delete a row', () => {
    spyOn(component.deleteRowEvent, 'emit');

    component.deleteRow(JSON.parse(JSON.stringify({test: 'test'})));

    fixture.detectChanges();

    expect(component.deleteRowEvent.emit).toHaveBeenCalledWith(JSON.stringify({test: 'test'}));
  });
});
