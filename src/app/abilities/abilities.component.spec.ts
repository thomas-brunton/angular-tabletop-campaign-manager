import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AbilitiesComponent } from './abilities.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { VtmApiService } from '../api_services/vtmapi.service';
import { Observable } from 'rxjs';

describe('AbilitiesComponent', () => {
  let component: AbilitiesComponent;
  let vtmApiService: VtmApiService;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should not have abilities on construction', () => {
    expect(component.abilities).toBeUndefined();
  });

  it('Should get spells once angular runs ngOnInit', () => {
    component.setApiSetting('vtm');
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
    component.setApiSetting('vtm');
    // console.log(component.apiSetting);
    component.ngOnInit();
    // console.log(component.abilities);
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
});

class MockVtmApiService{
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
