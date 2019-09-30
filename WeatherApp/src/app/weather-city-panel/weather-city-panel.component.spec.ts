import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityPanelComponent } from './weather-city-panel.component';

describe('WeatherCityPanelComponent', () => {
  let component: WeatherCityPanelComponent;
  let fixture: ComponentFixture<WeatherCityPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCityPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
