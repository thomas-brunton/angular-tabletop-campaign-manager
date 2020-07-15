import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesComponent } from './races.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RacesComponent', () => {
  let component: RacesComponent;
  let fixture: ComponentFixture<RacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacesComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
