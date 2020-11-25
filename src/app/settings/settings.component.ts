import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { SettingsInterface } from './settingsInterface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  public settings: SettingsInterface[] = [];

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settings = this.getSettings();
  }

  getSettings(): SettingsInterface[] {
    return this.settingsService.getSettings();
  }

  setSetting(name: string, value: any): void {
    this.settingsService.setSetting(name, value);
  }

  getSetting(name: string): any {
    return this.settingsService.getSetting(name);
  }

  settingChange($event: any): void {
    this.setSetting($event.target.name, $event.target.value);
  }

}
