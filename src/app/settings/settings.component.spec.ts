import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { SettingsService } from '../services/settings.service';
import { SettingsInterface } from './settingsInterface';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let settingsService: SettingsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    settingsService = TestBed.inject(SettingsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to get all the settings', () => {
    const defaultSettings: SettingsInterface[] = [
      {position : 1, name : 'api', selectedValue : 'dnd', values : ['dnd', 'vtm']},
      {position : 2, name : 'test 1', selectedValue : 'value 1', values : ['value 1', 'value 3']},
      {position : 3, name : 'test 2', selectedValue : 'value 2', values : ['value 2', 'value 4']}
    ];
    spyOn(settingsService, 'getSettings').and.returnValue(defaultSettings);

    const testSettings: SettingsInterface[] = [
      {position : 1, name : 'api', selectedValue : 'dnd', values : ['dnd', 'vtm']},
      {position : 2, name : 'test 1', selectedValue : 'value 1', values : ['value 1', 'value 3']},
      {position : 3, name : 'test 2', selectedValue : 'value 2', values : ['value 2', 'value 4']}
    ];

    component.ngOnInit();

    expect(component.getSettings()).toEqual(testSettings);
  });

  it('should be able to set a setting', () => {
    const defaultSettings: SettingsInterface[] = [
      {position : 1, name : 'api', selectedValue : 'dnd', values : ['dnd', 'vtm']},
      {position : 2, name : 'test 1', selectedValue : 'value 1', values : ['value 1', 'value 3']},
      {position : 3, name : 'test 2', selectedValue : 'value 2', values : ['value 2', 'value 4']}
    ];
    spyOn(settingsService, 'getSettings').and.returnValue(defaultSettings);
    spyOn(settingsService, 'setSetting').and.returnValue();

    component.ngOnInit();

    component.setSetting('api', 'vtm');
    expect(settingsService.setSetting).toHaveBeenCalled();
  });

  it('should be able to get a setting', () => {
    spyOn(settingsService, 'getSetting').and.returnValue('dnd');
    expect(component.getSetting('api')).toEqual('dnd');
  });

  it('should set a setting when a setting dropdown calls the settingChange method', () => {
    const $event = {
      target: {
        name: 'test',
        value: 'testValue'
      }
    };
    spyOn(settingsService, 'setSetting').and.returnValue();
    spyOn(component, 'setSetting');

    component.settingChange($event);
    expect(component.setSetting).toHaveBeenCalledWith($event.target.name, $event.target.value);
  });
});
