import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-cityPanel',
  templateUrl: './weather-city-panel.component.html',
  styleUrls: ['./weather-city-panel.component.css']
})
export class WeatherCityPanelComponent implements OnInit {
  cities = [
    { name: 'Seattle', state: 'Washington United States' },
    { name: 'Barcelona', state: 'Spain' },
    { name: 'London', state: 'United Kingdom' },
    { name: 'Budapest', state: 'Hungary' }
  ];
  constructor() {}

  ngOnInit() {}
}
