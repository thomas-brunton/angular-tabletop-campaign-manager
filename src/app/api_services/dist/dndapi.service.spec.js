"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/common/http/testing");
var testing_2 = require("@angular/core/testing");
var dndapi_service_1 = require("./dndapi.service");
describe('DndapiService', function () {
    var service;
    var httpTestingController;
    beforeEach(function () {
        testing_2.TestBed.configureTestingModule({
            imports: [testing_1.HttpClientTestingModule]
        });
        service = testing_2.TestBed.inject(dndapi_service_1.DndApiService);
        httpTestingController = testing_2.TestBed.inject(testing_1.HttpTestingController);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should get races data', function () {
        var testData = {
            count: 1,
            results: [
                {
                    index: 'human',
                    name: 'Human',
                    url: '/api/races/human'
                }
            ]
        };
        // Make the get request
        service.getRaces().subscribe(function (racesData) {
            expect(racesData).toEqual(testData);
        });
        // The following `expectOne()` will match the request's URL.
        // If no request or multiple request matched that URL
        // `expectOne()` would throw.
        var req = httpTestingController.expectOne('https://www.dnd5eapi.co/api/races');
        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
        // Response with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        req.flush(testData);
        // Finally, assert that there are no outstanding requests.
        httpTestingController.verify();
    });
    // testing for getAbilities function
    it('should get spell data', function () {
        var testData = {
            count: 1,
            results: [
                {
                    index: 'acid-arrow',
                    name: 'Acid Arrow',
                    url: '/api/spells/acid-arrow'
                }
            ]
        };
        service.getAbilities().subscribe(function (abilitiesData) {
            expect(abilitiesData === null || abilitiesData === void 0 ? void 0 : abilitiesData.count).toBe(1);
            expect(abilitiesData === null || abilitiesData === void 0 ? void 0 : abilitiesData.results[0].index).toBe(testData.results[0].index);
            expect(abilitiesData === null || abilitiesData === void 0 ? void 0 : abilitiesData.results[0].name).toBe(testData.results[0].name);
            expect(abilitiesData === null || abilitiesData === void 0 ? void 0 : abilitiesData.results[0].url).toBe(testData.results[0].url);
        });
        // The following `expectOne()` will match the request's URL.
        // If no request or multiple request matched that URL
        // `expectOne()` would throw.
        var req = httpTestingController.expectOne('https://www.dnd5eapi.co/api/spells');
        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
        // Response with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        req.flush(testData);
        // Finally, assert that there are no outstanding requests.
        httpTestingController.verify();
    });
    it('should get classes data', function () {
        var testData = {
            count: 1,
            results: [
                {
                    index: 'barbarian',
                    name: 'Barbarian',
                    url: '/api/classes/barbarian'
                }
            ]
        };
        service.getClasses().subscribe(function (classesData) {
            expect(classesData).toEqual(testData);
        });
        var req = httpTestingController.expectOne('https://www.dnd5eapi.co/api/classes');
        expect(req.request.method).toEqual('GET');
        req.flush(testData);
        httpTestingController.verify();
    });
    it('should get details data', function () {
        var testData = {
            index: "dragonborn",
            name: "Dragonborn",
            speed: 30
        };
        var testUrl = "api/races/dragonborn";
        service.getDetails(testUrl).subscribe(function (detailsData) {
            expect(detailsData["index"]).toBe(testData.index);
            expect(detailsData["name"]).toBe(testData.name);
            expect(detailsData["speed"]).toBe(testData.speed);
        });
    });
    it('can test for network error', function () {
        var emsg = 'simulated network error';
        service.getRaces().subscribe(function (data) {
            expect(data).toBeUndefined();
        }, 
        // Shouldn't be used since if there is a network error an empty result is passed from the dndapiservice handleError method
        // so it gets handled by the about case with the data variable
        function (error) {
            expect(error).toEqual(undefined);
        });
        var req = httpTestingController.expectOne('https://www.dnd5eapi.co/api/races');
        // Create mock ErrorEvent, raised when something goes wrong at the network level.
        // Connection timeout, DNS error, offline, etc
        var mockError = new ErrorEvent('Network error', {
            message: emsg
        });
        // Respond with mock error
        req.error(mockError);
    });
});
