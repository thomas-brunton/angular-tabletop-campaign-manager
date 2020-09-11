"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var abilities_component_1 = require("./abilities.component");
var testing_2 = require("@angular/common/http/testing");
var vtmapi_service_1 = require("../api_services/vtmapi.service");
var rxjs_1 = require("rxjs");
describe('AbilitiesComponent', function () {
    var component;
    var vtmApiService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [abilities_component_1.AbilitiesComponent],
            imports: [testing_2.HttpClientTestingModule],
            providers: [
                abilities_component_1.AbilitiesComponent,
                { provide: vtmapi_service_1.VtmApiService, useClass: MockVtmApiService }
            ]
        });
        component = testing_1.TestBed.inject(abilities_component_1.AbilitiesComponent);
        vtmApiService = testing_1.TestBed.inject(vtmapi_service_1.VtmApiService);
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('Should not have abilities on construction', function () {
        expect(component.abilities).toBeUndefined();
    });
    it('Should get spells once angular runs ngOnInit', function () {
        component.setApiSetting('vtm');
        component.ngOnInit();
        var temp;
        vtmApiService.getAbilities()
            .subscribe(function (res) {
            temp = res['results'];
            expect(component.abilities).toEqual(temp);
        });
    });
    it('Should add an ability with corresponding data', function () {
        component.setApiSetting('vtm');
        // console.log(component.apiSetting);
        component.ngOnInit();
        // console.log(component.abilities);
        var testData = {
            index: 'one_with_the_blade',
            name: 'One With The Blade',
            url: 'powers/one_with_the_blade'
        };
        var expectedOutPutData = {
            results: [
                {
                    index: 'bound_famulus',
                    name: 'Bond Famulus',
                    url: 'powers/bond_famulus'
                },
                {
                    index: 'one_with_the_blade',
                    name: 'One With The Blade',
                    url: 'powers/one_with_the_blade'
                }
            ]
        };
        var expectedOutput = JSON.parse(JSON.stringify(expectedOutPutData.results));
        var testDataArray = JSON.stringify(testData);
        var testJSON = JSON.parse(testDataArray);
        component.addAbility(testJSON);
        expect(component.abilities).toEqual(expectedOutput);
    });
});
var MockVtmApiService = /** @class */ (function () {
    function MockVtmApiService() {
        var _this = this;
        this.test = {
            count: 1,
            results: [
                {
                    index: 'bound_famulus',
                    name: 'Bond Famulus',
                    url: 'powers/bond_famulus'
                }
            ]
        };
        this.powers = JSON.stringify(this.test);
        this.powersArray = JSON.parse(this.powers);
        this.observable = new rxjs_1.Observable((function (observer) {
            observer.next(_this.powersArray);
            observer.complete;
        }));
    }
    MockVtmApiService.prototype.getAbilities = function () {
        return this.observable;
    };
    return MockVtmApiService;
}());
