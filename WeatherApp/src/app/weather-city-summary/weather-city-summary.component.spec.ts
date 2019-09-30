import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCitySummaryComponent } from './weather-city-summary.component';

describe('WeatherCitySummaryComponent', () => {
  let component: WeatherCitySummaryComponent;
  let fixture: ComponentFixture<WeatherCitySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCitySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
