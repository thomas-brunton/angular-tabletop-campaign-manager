import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AbilitiesComponent } from './abilities.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { VtmApiService } from '../api_services/vtmapi.service';
import { Observable } from 'rxjs';
import { ApiService } from '../api_services/apiInterface';
import { ApiSelectorService } from '../api_services/api-selector.service';

describe('AbilitiesComponent', () => {
  let component: AbilitiesComponent;
  let vtmApiService: VtmApiService;
  let apiSelectorService: ApiSelectorService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbilitiesComponent],
      imports : [HttpClientTestingModule],
      providers : [
        AbilitiesComponent,
        {provide: VtmApiService, useClass: MockVtmApiService}
      ]
    });
    component = TestBed.inject(AbilitiesComponent);
    vtmApiService = TestBed.inject(VtmApiService);
    apiSelectorService = TestBed.inject(ApiSelectorService);

    // Initialize races with some data
    component.abilities = [
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

  it('Should not have abilities on construction', () => {
    component.abilities = undefined; // TODO: Think of a better way to do this unit test
    expect(component.abilities).toBeUndefined();
  });

  it('Should get spells once angular runs ngOnInit', () => {
    spy = spyOn(apiSelectorService, 'getApi').and.returnValue(vtmApiService);
    component.ngOnInit();
    let temp;
    vtmApiService.getAbilities()
      .subscribe(
        res => {
          temp = res['results'];
          expect(component.abilities).toEqual(temp);
        }
      );
  });

  it('Should add an ability with corresponding data', () => {
    spy = spyOn(apiSelectorService, 'getApi').and.returnValue(vtmApiService);
    component.ngOnInit();
    const testData =
        {
          index : 'one_with_the_blade',
          name : 'One With The Blade',
          url : 'powers/one_with_the_blade'
        };
    const expectedOutPutData = {
      results: [
        {
          index : 'bound_famulus',
          name  : 'Bond Famulus',
          url   : 'powers/bond_famulus'
        },
        {
          index : 'one_with_the_blade',
          name : 'One With The Blade',
          url : 'powers/one_with_the_blade'
        }
      ]
    };
    const expectedOutput: JSON[] = JSON.parse(JSON.stringify(expectedOutPutData.results));

    const testDataArray = JSON.stringify(testData);
    const testJSON = JSON.parse(testDataArray);

    component.addAbility(testJSON);
    expect(component.abilities).toEqual(expectedOutput);
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
    expect(component.abilities).toEqual(expectedOutput);
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
    expect(component.abilities).toEqual(expectedOutput);
  });
});

class MockVtmApiService {
  test = {
    count : 1,
    results : [
      {
        index : 'bound_famulus',
        name  : 'Bond Famulus',
        url   : 'powers/bond_famulus'
      }
    ]
  };
  powers = JSON.stringify(this.test);

  powersArray: JSON[] = JSON.parse(this.powers);

  observable = new Observable<JSON[]> ((observer => {
    observer.next(this.powersArray);
    observer.complete;
  }));

  getAbilities(): Observable<JSON[]> {
    return this.observable;
  }
}
