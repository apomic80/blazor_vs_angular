import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetchdata',
  template: `
    <h1>Weather forecast</h1>
    <p>This component demonstrates fetching data from the server.</p>
    <p *ngIf="!forecasts"><em>Loading...</em></p>
    <table class="table" *ngIf="forecasts">
        <thead>
          <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let forecast of forecasts">
              <td>{{ forecast.date | date:'dd/MM/yyyy' }}</td>
              <td>{{ forecast.temperatureC }}</td>
              <td>{{ forecast.temperatureF }}</td>
              <td>{{ forecast.summary }}</td>
          </tr>
        </tbody>
    </table>
  `,
  styles: [
  ]
})
export class FetchDataComponent implements OnInit {

  forecasts: WeatherForecast[] | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<WeatherForecast[]>('http://localhost:5000/weatherforecast')
      .subscribe(result => {
        this.forecasts = result;
      }, 
      error => console.error(error));
  }

}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
