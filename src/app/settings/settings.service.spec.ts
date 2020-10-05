import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { SettingsInterface } from './settingsInterface';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);

    service.settings = null;
    service.initFunction();
    service.settings[0].selectedValue = 'dnd';  // Had to reset the value of the selectedValue since the value was not being reset for some reason inbetween unit tests
  });

  afterEach(() => {
    service.settings = null; // Null the settings variable so that its value from one unit test does not carry over to another unit test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize the settings variable when the initFunction is called', () => {
    const testSettings: SettingsInterface[] = [
      {position : 1, name : 'api', selectedValue : 'dnd', values : ['dnd', 'vtm']},
      {position : 2, name : 'test 1', selectedValue : 'value 1', values : ['value 1', 'value 3']},
      {position : 3, name : 'test 2', selectedValue : 'value 2', values : ['value 2', 'value 4']}
    ];

    expect(service.settings).toEqual(testSettings);
  });

  it('should be able to set a setting', () => {
    const testSettings: SettingsInterface[] = [
      {position : 1, name : 'api', selectedValue : 'vtm', values : ['dnd', 'vtm']},
      {position : 2, name : 'test 1', selectedValue : 'value 1', values : ['value 1', 'value 3']},
      {position : 3, name : 'test 2', selectedValue : 'value 2', values : ['value 2', 'value 4']}
    ];

    service.setSetting('api', 'vtm');
    expect(service.settings).toEqual(testSettings);
  });

  it('should be able to get a setting', () => {
    expect(service.getSetting('api')).toEqual('dnd');
  });

  it('should not return anything if you try to get a setting that doesn\'t exist', () => {
    expect(service.getSetting('fakeSetting')).toEqual(undefined);
  });
});
