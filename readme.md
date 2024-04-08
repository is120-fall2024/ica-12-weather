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

## Set Up
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

## Instructions
### 1. Get a random starting date's weather data
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
You can then use these variables to get the weather data for that day. To complete this step, print the data to the console to verify that you have the correct data. Your console print should look like this:
```
Year: 2022, Month: January, Day: 1, Forecast: Cloud, High: 40, Low: 32, Precipitation: 0.2mm, Humidity: 85%, Wind: 8mph
```

### 2. Populate the hero section with that date's weather data
You will need to populate the `<section>` with the id of `weather-hero` with the weather data from the date you selected. You won't need to create any new elements, just populate the existing elements with the data. The elements you will need to populate have the ids of: `day-of-year`, `high-temp-value`, `low-temp-value`, `precip-value`, `humid-value`, and `wind-value`.

The content of the element with id `day-of-year` should be a string of the day of the year in the format of `Month Day, Year`, where `Month` is the full name of the month and `Day` is the day of the month. For example, `January 1, 2022`.

You will also need to change the background image of the `#weather-hero` section based on the weather forecast. There is an Object defined at the top of the `ica12.js` file that you can use to map the forecast to the correct image. Be sure to change the `background-image` CSS property with the correct URL.
```
background-image: url('path-to-image-goes-here');
```

### 3. Create a CSS grid to display all the weather data from that date's month
There is a `<section>` tag with an id of `#month-calendar` that is empty. This section will be used to display all the weather data for the month of the date you selected, and is already built to accept a CSS grid of 7 columns. Before you start populating the grid, be sure to set the innerHTML of the `calendar-indicator` HTML element to the month and year of the date you selected. The format should be `Month Year`, where `Month` is the full name of the month and `Year` is the year. For example, `January 2022`.

The first row of columns should be the days of the week (Sunday through Saturday), and to generate this row, you can iterate through the `daysOfWeek` array that's given in the `ica12.js` file. The code for each day of the week can be built using this html template as a guide:
```html
<div class="calendar-day-header">Sunday</div>
```

The remaining rows should be the weather data for each day of the month. It'd be smart to iterate through the days of the month (the keys of each day object) and build the html for each day. The code for each day can be built using this html template as a guide:
```html
<div class="calendar-day">
  <div class="calendar-day-left">
    <div id="cal-day-value-1">1</div>
    <!-- calendar day icon -->
    <div class="material-symbols-outlined">
      clear_day
    </div>
    <div>Precip. <span id="cal-precip-value-1">0.3</span> mm</div>
  </div>
  <div class="calendar-day-right">
    <div>High <span id="cal-high-value-1">67</span>°F</div>
    <div>Low <span id="cal-low-value-1">52</span>°F</div>
    <div>Humid. <span id="cal-humid-value-1">42</span>%</div>
    <div>Wind <span id="cal-wind-value-1">3</span> mph</div>
  </div>
</div>
```

> [!IMPORTANT]
Each day of the month should have a unique id for each element, such that we can address and put in the values where necessary. The id's should be in the format of `cal-day-value-#`, `cal-precip-value-#`, `cal-high-value-#`, `cal-low-value-#`, `cal-humid-value-#`, and `cal-wind-value-#`. The number at the end of each id should be the day of the month. The icon describing the weather should be placed as the innerHTML of the div with the class of `material-symbols-outlined`. The icon can mapped from the `weatherIcons` object in the `ica12.js` file.

## Resources
You will likely use the following JavaScript functions and properties to complete this ICA. Treat this like an appendix to the instructions above:
```
element.appendChild()
element.innerHTML
element.style
element.id
element.classList.add()
document.createElement()
document.getElementById()
Object.keys()
Math.floor()
Math.random()
fetch()
response.json()
.then()
for( let item of array )
```
You may definitely complete this ICA with other functions and properties as well.

## Conclusion
Once you have completed all the steps, you should have a webpage that displays the weather data for a random date. The hero section should display the weather data for that date, and the month calendar should display all the weather data for that month. You should also have a background image that corresponds to the weather forecast for the date you selected.

