import { TestBed } from '@angular/core/testing';

import { RacesComponent } from './races.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DndApiService } from '../services/api_services/dndapi.service';
import { Observable } from 'rxjs';
import { ApiSelectorService } from '../services/api_services/api-selector.service';

describe('RacesComponent', () => {
  let component: RacesComponent;
  let dndapiService: DndApiService;
  let apiSelectorService: ApiSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesComponent ],
      imports: [ HttpClientTestingModule ],
      // Provide the component-under-test and dependent service
      providers: [
        RacesComponent,
        { provide: DndApiService, useClass: MockDndApiService },
      ]
    });

    component = TestBed.inject(RacesComponent);
    dndapiService = TestBed.inject(DndApiService);
    apiSelectorService = TestBed.inject(ApiSelectorService);

    // Initialize races with some data
    component.races = [
      JSON.parse(JSON.stringify(
          {
            index: 'test',
            name: 'test',
            url: 'api/races/test'
          },
      )),
      JSON.parse(JSON.stringify(
        {
          index: 'test2',
          name: 'test2',
          url: 'api/races/test2'
        }
      ))
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have a value for the races variable after construction', () => {
    component.races = undefined; // TODO: Think of a better way to do this unit test
    expect(component.races).toBeUndefined();
  });

  it('should get values for the races variable after Angular calls ngOnInit', () => {
    spyOn(apiSelectorService, 'getApi').and.returnValue(dndapiService); // Spy on the apiSelectorService and return the api service we need for the test to continue
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
    spyOn(apiSelectorService, 'getApi').and.returnValue(dndapiService); // Spy on the apiSelectorService and return the api service we need for the test to continue
    component.ngOnInit();
    const newRaceObj = {
      index: 'test',
      name: 'test',
      url: 'test'
    };
    const expectedOutput: JSON[] = [
      JSON.parse(JSON.stringify({
        index: 'human',
        name: 'Human',
        url: '/api/races/human'
      })),
      JSON.parse(JSON.stringify({
        index: 'test',
        name: 'test',
        url: 'test'
      })),
    ];
    const newRace: JSON = JSON.parse(JSON.stringify(newRaceObj));
    component.addRace(newRace);
    expect(component.races).toEqual(expectedOutput);
  });

  it('should delete a row in the data variable', () => {
    const expectedOutput = [
      JSON.parse(JSON.stringify(
        {
          index: 'test2',
          name: 'test2',
          url: 'api/races/test2'
        }
      ))
    ];
    const rowToDelete: JSON = JSON.parse(JSON.stringify({
      index: 'test',
      name: 'test',
      url: 'api/races/test'
    }));

    component.deleteRow(JSON.stringify(rowToDelete));
    expect(component.races).toEqual(expectedOutput);
  });

  it('should not delete a row if no entry is found', () => {
    const expectedOutput = [
      JSON.parse(JSON.stringify(
          {
            index: 'test',
            name: 'test',
            url: 'api/races/test'
          },
      )),
      JSON.parse(JSON.stringify(
        {
          index: 'test2',
          name: 'test2',
          url: 'api/races/test2'
        }
      ))
    ];
    const rowToDelete: JSON = JSON.parse(JSON.stringify({
      index: 'test3',
      name: 'test3',
      url: 'api/races/test3'
    }));

    component.deleteRow(JSON.stringify(rowToDelete));
    expect(component.races).toEqual(expectedOutput);
  });
});

class MockDndApiService {
  test = {
    count: 1,
    results: [
      {
        index: 'human',
        name: 'Human',
        url: '/api/races/human'
      }
    ]
  };
  // races is test in string form for JSON.parse()
  races = '{"count": 1,"results": [{"index": "human", "name": "Human", "url": "/api/races/human"}]}';

  testArray: JSON[] = JSON.parse(this.races);

  observable = new Observable<JSON[]>((observer => {
    observer.next(this.testArray);
    observer.complete();
  }));

  getRaces(): Observable<JSON[]> {
    return this.observable;
  }
}
