# Introduction
Welcome to ICA 12, your final ICA of the semester. This ICA is designed to help you learn about the basics of data retrieval and manipulation onto a webpage. You will be retrieving data from an pubically available API that provides information about fictional weather data. You will then use this data to display the weather information on a webpage.

The actual weather data is provided by this API:
`https://swo0i51ctk.execute-api.us-east-1.amazonaws.com/weather-api/weather`

You must use this API to retrieve the weather data. The data is in JSON format and you will need to parse the data to extract the information you need. If you need to observe the data, you follow that link in your browser. The full json data is also stored in the `json/weather.json` file in this repository, but you must retrieve the data from the API.

The structure of the data is as follows:
```json
{
    "year": {
        "month": {
            "day": {
              "forecast": "Rain",
              "high": 44,
              "low": 35,
              "precipitation": 0.5,
              "humidity": 80,
              "wind": 12
            },
          // repeat for all days of the month
        },
        // repeat for all months
    },
    // repeat for two more years
}
```
There's a total of 28 months worth of data. 2022 has 12 months, 2023 has 12 months, and 2024 has 4 months. Each month has the actual number of days in that month, but remember that this data is fictional and doesn't match the actual weather data for those years.

> [!NOTE]
> The `high` and `low` values are in Fahrenheit, the `precipitation` value is in millimeters, the `humidity` value is in percentage, and the `wind` value is in mph. There are eight possible values for the `forecast` key: "Sunny" is for clear skies, "Cloudy" is for overcast skies, "Partly Cloudy" is for a mix of sun and clouds, "Mostly Sunny" is for mostly clear skies, "Rain" is for rain, "Thunderstorms" is for thunderstorms, "Snow" is for light snow or flurries, and "Snowy" is for heavy snow storms.

# Set Up
You can retrive the data from the API using the fetch architecture and assigning the data to a variable. You can then use this variable to extract the data you need.
```javascript
fetch('link-to-api-goes-here')
    .then(response => response.json())
    .then(data => {
        functionToBuildSite(data);
    });
```
> [!IMPORTANT]
> This is a basic example of how to retrieve the data from the API, where the variable 'data' contains the contents from the API. It's important to call a function from the second `.then()` to handle the data as this functionality is asynchronous, meaning, the data is not immediately available after the fetch call. The actual building of the html elements that will be populated with the weather information should be done in the function that is called from the second `.then()`. You can then use this data to populate the webpage with the weather information.

# Instructions
## 1. Get a random starting date's weather data
Select a random year to start with. You can use the `Math.random()` function to generate a random number between 0 and 1. You can then multiply this number by the number of years to get a random year.
```javascript
let year = Math.floor(Math.random() * 3) + 2022;
```
From there, you can select a random month from all the months in that year. Use the `Object.keys()` function to get all the keys in the object and then select a random month.
```javascript
let months = Object.keys(data[year]);
let month = months[Math.floor(Math.random() * months.length)];
```
Finally, you can select a random day from all the days in that month. Use the same method as above to get all the days in the month and then select a random day.
```javascript
let days = Object.keys(data[year][month]);
let day = days[Math.floor(Math.random() * days.length)];
```
You can then use these variables to get the weather data for that day.

## 2. Populate the hero section with that date's weather data
## 3. Create a CSS grid to display all the weather data from that date's month 