import { TestBed } from '@angular/core/testing';

import { DndapiService } from './dndapi.service';

describe('DndapiService', () => {
  let service: DndapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DndapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
