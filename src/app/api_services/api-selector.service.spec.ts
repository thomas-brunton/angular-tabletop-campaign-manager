import { TestBed } from '@angular/core/testing';
import { ApiSelectorService } from './api-selector.service';
import { DndapiService } from "./dndapi.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('ApiSelectorService', () => {
  let service: ApiSelectorService;
  let dndService: DndapiService;
  let httpTestingController: HttpTestingController;
  let httpClientModule: HttpClientModule

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiSelectorService);
    dndService = TestBed.inject(DndapiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pull dnd api', () => {
    const testSetting = "dnd";
    expect(service.getApi(testSetting)).toBe(dndService);
  });

  it("should pull default api (dnd)", () =>{
    const defaultSetting = "default";
    expect(service.getApi(defaultSetting)).toBe(dndService);
  });
});