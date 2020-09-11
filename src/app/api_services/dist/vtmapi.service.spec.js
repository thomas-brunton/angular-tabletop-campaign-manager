"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/common/http/testing");
var vtmapi_service_1 = require("./vtmapi.service");
describe('VtmapiService', function () {
    var service;
    var httpTestingController;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule]
        });
        service = testing_1.TestBed.inject(vtmapi_service_1.VtmApiService);
        httpTestingController = testing_1.TestBed.inject(testing_2.HttpTestingController);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('should return races', function () {
        var testData = {
            count: 1,
            results: [
                {
                    index: 'brujah',
                    name: 'Brujah',
                    url: 'clans/brujah/brujah.json'
                }
            ]
        };
        // calls vtm api for races data and checks first one matches test data
        service.getRaces().subscribe(function (racesData) {
            expect(racesData === null || racesData === void 0 ? void 0 : racesData.count).toBe(1);
            expect(racesData === null || racesData === void 0 ? void 0 : racesData.results[0].index).toBe(testData.results[0].index);
            expect(racesData === null || racesData === void 0 ? void 0 : racesData.results[0].name).toBe(testData.results[0].name);
            expect(racesData === null || racesData === void 0 ? void 0 : racesData.results[0].url).toBe(testData.results[0].url);
        });
    });
    it('should return classes', function () {
        var testData = {
            count: 1,
            results: [
                {
                    index: 'brujah',
                    name: 'Brujah',
                    url: 'clans/brujah/brujah.json'
                }
            ]
        };
        // calls vtm api for races data and checks first one matches test data
        service.getClasses().subscribe(function (racesData) {
            expect(racesData === null || racesData === void 0 ? void 0 : racesData.count).toBe(1);
            expect(racesData === null || racesData === void 0 ? void 0 : racesData.results[0].index).toBe(testData.results[0].index);
            expect(racesData === null || racesData === void 0 ? void 0 : racesData.results[0].name).toBe(testData.results[0].name);
            expect(racesData === null || racesData === void 0 ? void 0 : racesData.results[0].url).toBe(testData.results[0].url);
        });
    });
    it('should return powers', function () {
        var testData = {
            count: 1,
            results: [
                {
                    index: 'bond_famulus',
                    name: 'Bond Famulus',
                    url: 'powers/bond_famulus'
                }
            ]
        };
        service.getAbilities().subscribe(function (abilitiesData) {
            expect(abilitiesData === null || abilitiesData === void 0 ? void 0 : abilitiesData.count).toBe(1);
            expect(abilitiesData.results[0].index).toBe(testData.results[0].index);
            expect(abilitiesData.results[0].name).toBe(testData.results[0].name);
            expect(abilitiesData.results[0].url).toBe(testData.results[0].url);
        });
    });
    it('should return details', function () {
        var testData = {
            index: "brujah",
            name: "Bujah",
            faction: "Anarch"
        };
        var testUrl = 'clans/brujah/brujah.json';
        service.getDetails(testUrl).subscribe(function (detailsData) {
            expect(detailsData === null || detailsData === void 0 ? void 0 : detailsData.index).toBe(testData.index);
            expect(detailsData === null || detailsData === void 0 ? void 0 : detailsData.name).toBe(testData.name);
            expect(detailsData === null || detailsData === void 0 ? void 0 : detailsData.faction).toBe(testData.faction);
        });
    });
});
