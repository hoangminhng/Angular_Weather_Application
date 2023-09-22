import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./service/weather.service";
import {WeatherData} from "./models/weather.model";
import {windowWhen} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService) {
  }

  cityName: string = 'Ho Chi Minh city';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherDaa(this.cityName);
  }

  onSubmit(){
    this.getWeatherDaa(this.cityName);
    this.cityName = '';
  }

  private getWeatherDaa(cityName: string){
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (respone) => {
          this.weatherData = respone;
          console.log(respone);
        }
      })
  }

  protected readonly windowWhen = windowWhen;
  protected readonly onsubmit = onsubmit;
}
