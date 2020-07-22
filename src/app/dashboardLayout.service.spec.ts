import { TestBed } from '@angular/core/testing';

import { LayoutService } from './dashboardLayout.service';

describe('TableService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a table', () =>{
    const testLayout =[
      {position : 1, name : "Race", route : ""},
      {position : 2, name : "Spells", route : ""}
    ];

    expect(service.getLayout()).toEqual(testLayout);
    
  });
});
