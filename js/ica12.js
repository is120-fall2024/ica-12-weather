let weatherData;

function retrieveWeatherData() {
	return fetch(
		"https://swo0i51ctk.execute-api.us-east-1.amazonaws.com/weather-api/weather"
	)
		.then((response) => response.json())
		.then((data) => {
      weatherData = data;
      return data;
		});
}

function iterateWeatherData(data) {
  const janFirstForecast = data["2024"].January["1"].forecast;

	console.log(janFirstForecast);
}


retrieveWeatherData().then((data) => {
	console.log('data retrrieved!');
  iterateWeatherData(data);
});


console.log(weatherData);

// iterateWeatherData(weatherData);
