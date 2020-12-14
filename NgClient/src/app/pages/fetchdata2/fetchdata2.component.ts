import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../fetchdata/fetchdata.models';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { MyTimer } from '../../utils/mytimer';

@Component({
  selector: 'app-fetchdata2',
  templateUrl: 'fetchdata2.component.html'
})
export class FetchData2Component implements OnInit {

  forecasts: WeatherForecast[] | null = null;
  
  private timer: MyTimer | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<WeatherForecast[]>(environment.baseUrl + 'weatherforecast')
      .subscribe(result => {
        this.forecasts = result;
        console.log('Start!');
        this.timer = new MyTimer('FetchDataComponent');
      }, 
      error => console.error(error));
  }

  ngAfterViewChecked() {
    if(this.timer) {
      this.timer.stop();
      this.timer = null; 
    }
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