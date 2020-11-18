import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the proper row to delete', () => {
    const expectedOutput: JSON = JSON.parse(JSON.stringify({
      index: 'test',
      name: 'test',
      url: 'api/races/test'
    }));
    const rowToDelete: JSON = JSON.parse(JSON.stringify({
      index: 'test',
      name: 'test',
      url: 'api/races/test'
    }));

    component.selectRow(rowToDelete);
    expect(component.selectedRow).toEqual(expectedOutput);
  });

  it('should emit an event to delete a row', () => {
    spyOn(component.deleteRowEvent, 'emit');

    component.deleteRow('test');

    fixture.detectChanges();

    expect(component.deleteRowEvent.emit).toHaveBeenCalledWith('test');
  });
});
