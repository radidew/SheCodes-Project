let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function searchForCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-name-input");
  let cityName = document.querySelector("#current-city");
  cityName.innerHTML = cityInput.value;
}

function dayAndTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let timeHour = date.getHours();
  let timeMinutes = date.getMinutes();

  if (timeMinutes < 10) {
    timeMinutes = `0${timeMinutes}`;
  }
  if (timeHour < 10) {
    timeHour = `0${timeHour}`;
  }

  let formattedDate = `${day} ${timeHour}:${timeMinutes}`;
  return formattedDate;
}
let now = new Date();
let currentDay = document.querySelector("#day-and-time");
currentDay.innerHTML = dayAndTime(now);

let form = document.querySelector("#search-bar");
form.addEventListener("submit", searchForCity);
