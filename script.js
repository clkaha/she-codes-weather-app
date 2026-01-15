function search(event) {
	event.preventDefault();
	let searchInputElement = document.querySelector("#search-input");
	let cityElement = document.querySelector("#current-city");
	cityElement.innerHTML = searchInputElement.value;
	function currentTemperature(response) {
		let currentWeatherIconElement = document.querySelector(
			".current-temperature-icon"
		);
		let currentTemperatureElement = document.querySelector(
			".current-temperature-value"
		);
		let currentWeatherIcon = response.data.condition.icon_url;
		let currentTemperatureValue = Math.round(response.data.temperature.current);
		currentWeatherIconElement.innerHTML = `<img src="${currentWeatherIcon}" alt="" />`;
		currentTemperatureElement.innerHTML = `${currentTemperatureValue}`;
	}
	let city = searchInputElement.value;
	let apiKey = "t892ofdde3d43fb03b089a7dffb097a9";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
	axios.get(apiUrl).then(currentTemperature);
}

function formatDate(date) {
	let minutes = date.getMinutes();
	let hours = date.getHours();
	let day = date.getDay();

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	if (hours < 10) {
		hours = `0${hours}`;
	}

	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let formattedDay = days[day];
	return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
