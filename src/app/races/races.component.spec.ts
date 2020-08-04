import { TestBed } from '@angular/core/testing';

import { RacesComponent } from './races.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DndApiService } from '../api_services/dndapi.service';
import { Observable } from 'rxjs';

describe('RacesComponent', () => {
  let component: RacesComponent;
  let dndapiService: DndApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesComponent ],
      imports: [ HttpClientTestingModule ],
      // Provide the component-under-test and dependent service
      providers: [
        RacesComponent,
        { provide: DndApiService, useClass: MockDndApiService }
      ]
    })

    component = TestBed.inject(RacesComponent);
    dndapiService = TestBed.inject(DndApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have a value for the races variable after construction', () => {
    expect(component.races).toBeUndefined();
  });

  it('should get values for the races variable after Angular calls ngOnInit', () => {
    component.setApiSetting('dnd'); //  TODO: Might want to test with the vtm api later?
    component.ngOnInit();
    let temp;
    dndapiService.getRaces()
      .subscribe(
        res => {
          temp = res['results'];
          expect(component.races).toEqual(temp);
        }
      )
  });

  it('should return correct dnd apiSetting once set', () => {
    component.onSettingChange('dnd');
    expect(component.getApiSetting()).toEqual("dnd");

  });

});

class MockDndApiService {
  test = {
    'count': 1,
    'results': [
      {
        'index': 'human',
        'name': 'Name',
        'url': '/api/races/human'
      }
    ]
  };
  // races is test in string form for JSON.parse()
  races = '{"count": 1,"results": [{"index": "human", "name": "Name", "url": "/api/races/human"}]}';
  
  testArray:JSON[] = JSON.parse(this.races);

  observable = new Observable<JSON[]>((observer => {
    observer.next(this.testArray);
    observer.complete();
  }));

  getRaces(): Observable<JSON[]> {
    return this.observable;
  }
}
