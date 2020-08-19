import { Injectable } from '@angular/core';
import { Layout } from './layout';
import { TEST_LAYOUT } from './testDashboardLayout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  getLayout(): Layout[] {
    return TEST_LAYOUT;
  }
}
