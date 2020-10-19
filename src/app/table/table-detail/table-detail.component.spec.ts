import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailComponent } from './table-detail.component';
import {VtmApiService} from '../../api_services/vtmapi.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { ApiSelectorService } from 'src/app/api_services/api-selector.service';

const testData = {
  index : 'brujah',
  name : 'Brujah',
  url : 'clans/brujah/brujah.json'
};

describe('TableDetailComponent', () => {
  let component: TableDetailComponent;
  let fixture: ComponentFixture<TableDetailComponent>;
  let vtmapiService: VtmApiService;
  let apiSelectorService: ApiSelectorService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDetailComponent ],
      imports: [ HttpClientTestingModule],

      providers: [
        TableDetailComponent,
        { provide: VtmApiService, useClass: MockVtmApiService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDetailComponent);
    vtmapiService = TestBed.inject(VtmApiService);
    apiSelectorService = TestBed.inject(ApiSelectorService);
    component = fixture.componentInstance;

    spy = spyOn(apiSelectorService, 'getApi').and.returnValue(vtmapiService);
    component.data = JSON.parse(JSON.stringify(testData));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return url after providing json data', () => {
    component.setUrl(component.data);
    expect(component.url).toBe(testData['url']);
  });

  it('should not update url, details or title if data is undefined', () => {
    component.url = undefined;
    component.data = undefined;
    expect(component.url).toBe(undefined);
  });

  it('should return keys data matching given url', () => {
    const testKeys = ['index', 'name', 'faction'];
    component.getDetailsData();
    expect(component.headers).toEqual(testKeys);
  });

  it('should return details data matching given url', () => {
    const testDetails = {
      index     : 'brujah',
      name      : 'Bujah',
      faction   : 'Anarch'
  };
    component.getDetailsData();
    expect(JSON.stringify(component.details)).toBe(JSON.stringify(testDetails));
  });
});

class MockVtmApiService{
  testDetails = {
      index     : 'brujah',
      name      : 'Bujah',
      faction   : 'Anarch'
  };

  testUrl = 'clans/brujah/brujah.json';

  testArray: JSON[] = JSON.parse(JSON.stringify(this.testDetails));

  observable = new Observable<JSON[]> ((observer => {
    observer.next(this.testArray);
    observer.complete;
  }));

  getDetails(url): Observable<JSON[]> {
    if (url === this.testUrl){
      return this.observable;
    }
  }
}
