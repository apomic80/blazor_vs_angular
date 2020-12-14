import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from './fetchdata.models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fetchdata',
  templateUrl: 'fetchdata.component.html'
})
export class FetchDataComponent implements OnInit {

  forecasts: WeatherForecast[] | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<WeatherForecast[]>(environment.baseUrl + 'weatherforecast')
      .subscribe(result => {
        this.forecasts = result;
      }, 
      error => console.error(error));
  }

}