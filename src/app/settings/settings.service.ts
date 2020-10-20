import { Injectable } from '@angular/core';
import { SettingsInterface } from './settingsInterface';
import { SettingsLayout } from './settingsLayout';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: SettingsInterface[];

  constructor() { }

  initFunction(): void {  //  Called in the app.module file on app startup to populate the settings variable for use throughout the app
    this.settings = SettingsLayout;
  }

  getSettings(): SettingsInterface[] {
    return this.settings;
  }

  setSetting(name: string, value: any): void {
    for (const setting of this.settings) {
      if (setting.name === name) {
        setting.selectedValue = value;
      }
    }
  }

  getSetting(name: string): any {
    for (const setting of this.settings) {
      if (setting.name === name) {
        return setting.selectedValue;
      }
    }
  }
}
