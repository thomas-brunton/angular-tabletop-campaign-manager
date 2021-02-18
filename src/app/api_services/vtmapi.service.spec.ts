import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { VtmApiService } from './vtmapi.service';

describe('VtmapiService', () => {
  let service: VtmApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    service = TestBed.inject(VtmApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return races', () => {
    const testData = {
      count: 1,
      results: [
        {
          index : 'brujah',
          name  : 'Brujah',
          url   : 'clans/brujah/brujah.json'
        }
      ]
    };

    // calls vtm api for races data and checks first one matches test data
    service.getRaces().subscribe((racesData: any) => {
      expect(racesData?.count).toBe(1);
      expect(racesData?.results[0].index).toBe(testData.results[0].index);
      expect(racesData?.results[0].name).toBe(testData.results[0].name);
      expect(racesData?.results[0].url).toBe(testData.results[0].url);
    });

  });

  it('should return classes', () => { // currently don't have anything similar to classes in vampire so using clans for now
    const testData = {
      count: 1,
      results: [
        {
          index : 'brujah',
          name  : 'Brujah',
          url   : 'clans/brujah/brujah.json'
        }
      ]
    };

    // calls vtm api for races data and checks first one matches test data
    service.getClasses().subscribe((racesData: any) => {
      expect(racesData?.count).toBe(1);
      expect(racesData?.results[0].index).toBe(testData.results[0].index);
      expect(racesData?.results[0].name).toBe(testData.results[0].name);
      expect(racesData?.results[0].url).toBe(testData.results[0].url);
    });
    const req = httpTestingController.expectOne('/assets/vtm_5e_api/clans/clans.json');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Response with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();

  });

  it('should return powers', () => {
    const testData = {
      count : 1,
      results : [
        {
          index : 'bond_famulus',
          name  : 'Bond Famulus',
          url   : 'powers/bond_famulus'
        }
      ]
    };

    service.getAbilities().subscribe((abilitiesData: any) => {
      expect(abilitiesData?.count).toBe(1);
      expect(abilitiesData.results[0].index).toBe(testData.results[0].index);
      expect(abilitiesData.results[0].name).toBe(testData.results[0].name);
      expect(abilitiesData.results[0].url).toBe(testData.results[0].url);
    });
    const req = httpTestingController.expectOne('/assets/vtm_5e_api/powers/powers.json');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Response with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('should return details', () => {
    const testData = {
    index     : 'brujah',
    name      : 'Bujah',
    faction   : 'Anarch'
    };

    const testUrl = 'clans/brujah/brujah.json';

    service.getDetails(testUrl).subscribe((detailsData: any) => {
      expect(detailsData?.index).toBe(testData.index);
      expect(detailsData?.name).toBe(testData.name);
      expect(detailsData?.faction).toBe(testData.faction);
    });
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
    const req = httpTestingController.expectOne('/assets/vtm_5e_api/clans/clans.json');

    // Create mock ErrorEvent, raised when something goes wrong at the network level.
    // Connection timeout, DNS error, offline, etc
    const mockError = new ErrorEvent('Network error', {
      message: emsg,
    });

    // Respond with mock error
    req.error(mockError);
  });
});
