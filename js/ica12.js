/* 
  ************  constants  ************
*/
const backgroundURLS = {
	Sunny: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI1MzYzMTJ8&ixlib=rb-4.0.3&q=85",
	Cloudy: "https://images.unsplash.com/photo-1523477587569-ee36be652f47?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI1MzYxNjd8&ixlib=rb-4.0.3&q=85",
	"Partly Cloudy": "https://images.unsplash.com/photo-1445297983845-454043d4eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI1MzYwMjB8&ixlib=rb-4.0.3&q=85",
	"Mostly Sunny": "https://unsplash.com/photos/brown-mountain-under-blue-sky-during-da",
	Rain: "https://unsplash.com/photos/rain-dropping-from-roof-rNBaaxyeWWM",
	Thunderstorms: "https://images.unsplash.com/photo-1482005253821-5d6a2c685879?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI1MzYyMjh8&ixlib=rb-4.0.3&q=85",
	Snow: "https://images.unsplash.com/photo-1468476775582-6bede20f356f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI1MzYyNjN8&ixlib=rb-4.0.3&q=85",
	Snowy: "https://images.unsplash.com/photo-1610204369745-242dc64e8f67?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI1MzYyOTd8&ixlib=rb-4.0.3&q=85",
};
const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];

const weatherIcons = {
	Sunny: "clear_day",
	Cloudy: "cloud",
	"Partly Cloudy": "partly_cloudy_day",
	"Mostly Sunny": "wb_sunny",
	Rain: "rainy",
	Thunderstorms: "thunderstorm",
	Snow: "cloudy_snowing",
	Snowy: "severe_cold",
};

/* 
  ************  functionality  ************
*/

return fetch(
	/* insert url to fetch data here */
)
	.then((response) => response.json())
	.then((data) => {
		// function to execute when the data is retrieved
	});

