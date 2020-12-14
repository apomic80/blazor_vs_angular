using System;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using blazor_angular.Shared;
using Microsoft.AspNetCore.Components;
using System.Diagnostics;

namespace blazor_angular.Client.Pages
{
    public class FetchDataBase : ComponentBase
    {
        [Inject]
        private HttpClient http { get; set; }

        protected WeatherForecast[] forecasts;

        private Stopwatch sw = new Stopwatch();

        protected override async Task OnInitializedAsync()
        {
            forecasts = await http.GetFromJsonAsync<WeatherForecast[]>("WeatherForecast");
            Console.WriteLine("Start!");
            sw.Start();
        }

        protected override void OnAfterRender(bool firstRender)
        {
            if(sw.IsRunning) 
            {
                sw.Stop();
                Console.WriteLine("rendering: " + sw.Elapsed.TotalMilliseconds + " ms");
            }
            base.OnAfterRender(firstRender);
        }

        protected async Task Save(WeatherForecast forecast)
        {
            await http.PutAsJsonAsync("WeatherForecast", forecast);
        }
    }
}
