import { TestBed } from '@angular/core/testing';

import { LayoutService } from './dashboardLayout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a layout', () =>{
    const testLayout =[
      {position : 1, name : "Race", route : "races"},
      {position : 2, name : "Spells", route : ""}
    ];

    expect(service.getLayout()).toEqual(testLayout);
    
  });
});