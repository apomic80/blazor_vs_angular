﻿using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using blazor_angular.Shared;
using Microsoft.AspNetCore.Components;

namespace blazor_angular.Client.Pages
{
    public class FetchDataBase : ComponentBase
    {
        [Inject]
        private HttpClient http { get; set; }

        protected WeatherForecast[] forecasts;

        protected override async Task OnInitializedAsync()
        {
            forecasts = await http.GetFromJsonAsync<WeatherForecast[]>("WeatherForecast");
        }
    }
}
