import { TestBed } from '@angular/core/testing';

import { VtmApiService } from './vtmapi.service';

describe('VtmapiService', () => {
  let service: VtmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VtmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
