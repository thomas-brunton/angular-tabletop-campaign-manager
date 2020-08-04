import { TestBed } from '@angular/core/testing';

import { RacesComponent } from './races.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DndapiService } from '../api_services/dndapi.service';
import { Observable } from 'rxjs';

describe('RacesComponent', () => {
  let component: RacesComponent;
  let dndapiService: DndapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesComponent ],
      imports: [ HttpClientTestingModule ],
      // Provide the component-under-test and dependent service
      providers: [
        RacesComponent,
        { provide: DndapiService, useClass: MockDndApiService }
      ]
    })

    component = TestBed.inject(RacesComponent);
    dndapiService = TestBed.inject(DndapiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have a value for the races variable after construction', () => {
    expect(component.races).toBeUndefined();
  });

  it('should get values for the races variable after Angular calls ngOnInit', () => {
    component.ngOnInit();
    let temp;
    dndapiService.getRaces()
      .subscribe(
        res => {
          temp = res['results'];
          expect(component.races).toEqual(temp);
        }
      );
  });

  it('should be able to add a race to the races variable', () => {
    component.ngOnInit();
    const newRaceObj = {
      'index': 'test',
      'name': 'test',
      'url': 'test'
    };
    const expectedOutput: JSON[] = [
      JSON.parse(JSON.stringify({
        'index': 'human',
        'name': 'Name',
        'url': '/api/races/human'
      })),
      JSON.parse(JSON.stringify({
        'index': 'test',
        'name': 'test',
        'url': 'test'
      })),
    ];
    const newRace: JSON = JSON.parse(JSON.stringify(newRaceObj)) 
    component.addRace(newRace);
    expect(component.races).toEqual(expectedOutput);
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
