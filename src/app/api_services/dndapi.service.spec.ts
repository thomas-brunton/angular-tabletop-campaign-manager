import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DndApiService } from './dndapi.service';
import { isUndefined } from 'util';

describe('DndapiService', () => {
  let service: DndApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    service = TestBed.inject(DndApiService)
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get races data', () => {
    const testData = {
      "count": 1,
      "results": [
        {
          "index": "human",
          "name": "Human",
          "url": "/api/races/human"
        }
      ]
  };

    // Make the get request
    service.getRaces().subscribe((racesData: any) => {
      expect(racesData?.count).toBe(1);
      expect(racesData?.results[0].index).toBe('human');
      expect(racesData?.results[0].name).toBe('Human');
      expect(racesData?.results[0].url).toBe('/api/races/human');
    });

    // The following `expectOne()` will match the request's URL.
    // If no request or multiple request matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('https://www.dnd5eapi.co/api/races');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Response with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    //Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  //testing for getAbilities function
  it("should get spell data", ()=> {
    const testData = {
      "count" : 1,
      "results" : [
        {
          "index": "acid-arrow",
          "name": "Acid Arrow",
          "url": "/api/spells/acid-arrow"
        }
      ]
    }

    service.getAbilities().subscribe((abilitiesData: any) => {
      expect(abilitiesData?.count).toBe(1);
      expect(abilitiesData?.results[0].index).toBe(testData.results[0].index);
      expect(abilitiesData?.results[0].name).toBe(testData.results[0].name);
      expect(abilitiesData?.results[0].url).toBe(testData.results[0].url);
    });

        // The following `expectOne()` will match the request's URL.
    // If no request or multiple request matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne('https://www.dnd5eapi.co/api/races');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Response with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    //Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
  it('can test for network error', () => {  
    const emsg = 'simulated network error';

    service.getRaces().subscribe(
      data => {
        expect(data).toBeUndefined();
      },
      // Shouldn't be used since if there is a network error an empty result is passed from the dndapiservice handleError method
      // so it gets handled by the about case with the data variable
      error => {
        expect(error).toEqual(undefined);
      }
    );

    const req = httpTestingController.expectOne('https://www.dnd5eapi.co/api/races');

    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: emsg,
    });

    // Respond with mock error
    req.error(mockError);   
    }
  );
});
