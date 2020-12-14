import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from './fetchdata.models';
import { environment } from 'src/environments/environment';
import { FormControl, NgForm } from '@angular/forms';

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

  save(form: NgForm, forecast: WeatherForecast) {
    debugger;
    if(form.valid)
    {
      this.http.put<WeatherForecast>(environment.baseUrl + 'weatherforecast', forecast)
        .subscribe(result => {
          console.log('forecast saved');
        }, 
        error => console.error(error));
    }
  }
}