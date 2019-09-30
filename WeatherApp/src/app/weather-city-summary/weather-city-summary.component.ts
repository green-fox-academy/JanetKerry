import { Component, OnInit, Input } from '@angular/core';
const apikey = 'd62d76453327e5869241c4e38f16ba6b';
const kelvinToCelcius: number = 273.15;

@Component({
  selector: 'weather-citySummary',
  templateUrl: './weather-city-summary.component.html',
  styleUrls: ['./weather-city-summary.component.css']
})
export class WeatherCitySummaryComponent implements OnInit {
  _city: string;
  _state: string;
  _temperature: number;
  _cloudy: boolean;
  _partly_cloudy: boolean;
  _rainy: boolean;
  _snowy: boolean;
  _sunny: boolean;

  constructor() {}

  @Input()
  set city(city: string) {
    this._city = city;
    this.getTemperature();
  }

  @Input()
  set state(state: string) {
    this._state = state;
  }

  ngOnInit() {}

  getTemperature() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this._city}&appid=${apikey}`
    )
      .then(res => res.json()) //response type
      .then(data => {
        this._temperature = data.main.temp - kelvinToCelcius;
        let feature = data.weather[0].main;
        this._cloudy = feature === 'Clouds';
        this._partly_cloudy = feature === 'partly_cloudy';
        this._rainy = feature === 'Rain';
        this._sunny = feature === 'Clear';
        this._snowy = feature === 'Snow';
        console.log(data);
      });
  }
}
//import {OneCityREsponse} from '/'
//export class
