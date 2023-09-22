import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {WeatherData} from "../models/weather.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string):Observable<WeatherData>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=a044c9b6d2b5e524b71d60c2478af349';
    return this.http.get<WeatherData>(url);
  }
}
