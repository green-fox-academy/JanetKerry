import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherCitySummaryComponent } from './weather-city-summary/weather-city-summary.component';
import { WeatherCityPanelComponent } from './weather-city-panel/weather-city-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCitySummaryComponent,
    WeatherCityPanelComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
