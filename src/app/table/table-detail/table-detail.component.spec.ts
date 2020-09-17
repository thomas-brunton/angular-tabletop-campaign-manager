import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDetailComponent } from './table-detail.component';
import {VtmApiService} from "../../api_services/vtmapi.service";
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Observable } from 'rxjs';

const testData = {
  index : "brujah",
  name : "Brujah",
  url : "clans/brujah/brujah.json"
};

describe('TableDetailComponent', () => {
  let component: TableDetailComponent;
  let fixture: ComponentFixture<TableDetailComponent>;

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
    component = fixture.componentInstance;

    component.data = JSON.parse(JSON.stringify(testData));
    component.apiSetting="vtm";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return url after providing json data', () => {
    component.setUrl(component.data);
    expect(component.url).toBe(testData['url']);
  });

  it('should not update url, details or title if data is undefined',() => {
    component.url = undefined;
    component.data = undefined;
    expect(component.url).toBe(undefined);
  });

  it('should return keys data matching given url', () => {
    const testKeys =["index", "name", "faction"];
    component.getDetailsData();
    expect(component.headers).toEqual(testKeys);
  });

  it('should return details data matching given url', () => {
    const testDetails = {
      index     : "brujah",
      name      : "Bujah",
      faction   : "Anarch"
  }
    component.getDetailsData();
    expect(JSON.stringify(component.details)).toBe(JSON.stringify(testDetails));
  });

});

class MockVtmApiService{
  testDetails = {
      index     : "brujah",
      name      : "Bujah",
      faction   : "Anarch"
  }

  testUrl = "clans/brujah/brujah.json";

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
