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

  it('should create a layout', () => {
    const testLayout = [
      {position : 1, name : 'Home', route : 'home'},
      {position : 2, name : 'Race', route : 'races'},
      {position : 3, name : 'Spells', route : 'abilities'},
      {position : 4, name : 'Classes', route : 'classes'},
      {position : 5, name : 'Settings', route : 'settings'}
    ];

    expect(service.getLayout()).toEqual(testLayout);

  });
});
