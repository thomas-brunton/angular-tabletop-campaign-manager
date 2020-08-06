import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.data = [
      JSON.parse(JSON.stringify(
          {
            'index': 'test',
            'name': 'test',
            'url': 'api/races/test'
          },
      )),
      JSON.parse(JSON.stringify(
        {
          'index': 'test2',
          'name': 'test2',
          'url': 'api/races/test2'
        }
      ))
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the proper row to delete', () => {
    const expectedOutput: JSON = JSON.parse(JSON.stringify({
      'index': 'test',
      'name': 'test',
      'url': 'api/races/test'
    }));
    const rowToDelete: JSON = JSON.parse(JSON.stringify({
      'index': 'test',
      'name': 'test',
      'url': 'api/races/test'
    }));

    component.selectRowToDelete(rowToDelete);
    expect(component.rowToDelete).toEqual(expectedOutput);
  });

  it('should delete a row in the data variable', () => {
    const expectedOutput = [
      JSON.parse(JSON.stringify(
        {
          'index': 'test2',
          'name': 'test2',
          'url': 'api/races/test2'
        }
      ))
    ];
    const rowToDelete: JSON = JSON.parse(JSON.stringify({
      'index': 'test',
      'name': 'test',
      'url': 'api/races/test'
    }));

    component.deleteRow(rowToDelete);
    expect(component.data).toEqual(expectedOutput);
  });

  it('should not delete a row if no entry is found', () => {
    const expectedOutput = [
      JSON.parse(JSON.stringify(
          {
            'index': 'test',
            'name': 'test',
            'url': 'api/races/test'
          },
      )),
      JSON.parse(JSON.stringify(
        {
          'index': 'test2',
          'name': 'test2',
          'url': 'api/races/test2'
        }
      ))
    ];
    const rowToDelete: JSON = JSON.parse(JSON.stringify({
      'index': 'test3',
      'name': 'test3',
      'url': 'api/races/test3'
    }));

    component.deleteRow(rowToDelete);
    expect(component.data).toEqual(expectedOutput);
  });
});
