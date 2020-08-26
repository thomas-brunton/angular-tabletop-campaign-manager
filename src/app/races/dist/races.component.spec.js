"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var races_component_1 = require("./races.component");
var testing_2 = require("@angular/common/http/testing");
var dndapi_service_1 = require("../api_services/dndapi.service");
var rxjs_1 = require("rxjs");
describe('RacesComponent', function () {
    var component;
    var dndapiService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [races_component_1.RacesComponent],
            imports: [testing_2.HttpClientTestingModule],
            // Provide the component-under-test and dependent service
            providers: [
                races_component_1.RacesComponent,
                { provide: dndapi_service_1.DndApiService, useClass: MockDndApiService }
            ]
        });
        component = testing_1.TestBed.inject(races_component_1.RacesComponent);
        dndapiService = testing_1.TestBed.inject(dndapi_service_1.DndApiService);
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should not have a value for the races variable after construction', function () {
        expect(component.races).toBeUndefined();
    });
    it('should get values for the races variable after Angular calls ngOnInit', function () {
        component.setApiSetting('dnd'); //  TODO: Might want to test with the vtm api later?
        component.ngOnInit();
        var temp;
        dndapiService.getRaces()
            .subscribe(function (res) {
            temp = res['results'];
            expect(component.races).toEqual(temp);
        });
    });
    it('should be able to add a race to the races variable', function () {
        component.ngOnInit();
        var newRaceObj = {
            index: 'test',
            name: 'test',
            url: 'test'
        };
        var expectedOutput = [
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
        var newRace = JSON.parse(JSON.stringify(newRaceObj));
        component.addRace(newRace);
        expect(component.races).toEqual(expectedOutput);
    });
    it('should return correct dnd apiSetting once set', function () {
        component.onSettingChange('dnd');
        expect(component.getApiSetting()).toEqual('dnd');
    });
});
var MockDndApiService = /** @class */ (function () {
    function MockDndApiService() {
        var _this = this;
        this.test = {
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
        this.races = '{"count": 1,"results": [{"index": "human", "name": "Human", "url": "/api/races/human"}]}';
        this.testArray = JSON.parse(this.races);
        this.observable = new rxjs_1.Observable((function (observer) {
            observer.next(_this.testArray);
            observer.complete();
        }));
    }
    MockDndApiService.prototype.getRaces = function () {
        return this.observable;
    };
    return MockDndApiService;
}());
