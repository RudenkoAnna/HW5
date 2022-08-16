function todayIS() {
  let now = new Date();
  let h2 = document.querySelector("h2");
  let date = now.getDate();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  h2.innerHTML = `${day}, ${month} ${date} </br> ${hours}:${minutes} `;
}
todayIS();

// Week 5

//

function showTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let tempTOchange = document.querySelector("#temper");
  tempTOchange.innerHTML = `${temperature}`;
  let weatherCity = document.querySelector("#city");
  weatherCity.innerHTML = response.data.name;
  let weatherId = document.querySelector("#weatherId");
  weatherId.innerHTML = response.data.weather[0].description;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
}
function displayWeather(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let search = document.querySelector("#textInput");
  searchCity(search.value);
}

function searchCity(city) {
  let apiKey = "67bd5f95b927ba25009785402ef4eff3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let searchButton = document.querySelector("#cityForm");
searchButton.addEventListener("submit", search);

//

function showPosition(position) {
  let apiKey = "67bd5f95b927ba25009785402ef4eff3";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLocationButton = document.querySelector("#currentlocation");
currentLocationButton.addEventListener("click", getCurrentPosition);
