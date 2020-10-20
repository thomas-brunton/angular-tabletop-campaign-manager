import { TestBed } from '@angular/core/testing';
import { ApiSelectorService } from './api-selector.service';
import { DndApiService } from './dndapi.service';
import { VtmApiService } from './vtmapi.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SettingsService } from '../settings/settings.service';

describe('ApiSelectorService', () => {
  let service: ApiSelectorService;
  let dndService: DndApiService;
  let vtmService: VtmApiService;
  let httpTestingController: HttpTestingController;
  let settingService: SettingsService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiSelectorService);
    dndService = TestBed.inject(DndApiService);
    vtmService = TestBed.inject(VtmApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
    settingService = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pull dnd api', () => {
    spy = spyOn(settingService, 'getSetting').and.returnValue('dnd');
    expect(service.getApi()).toBe(dndService);
  });

  it('should pull vtm api', () => {
    spy = spyOn(settingService, 'getSetting').and.returnValue('vtm');
    expect(service.getApi()).toBe(vtmService);
  });

  it('should pull default api (dnd)', () => {
    spy = spyOn(settingService, 'getSetting').and.returnValue('');
    expect(service.getApi()).toBe(dndService);
  });

});
