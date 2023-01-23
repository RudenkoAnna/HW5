import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Boryspil",
    temperature: 0,
    date: "Monday 10:00",
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/04n.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <div className="wrapper">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li> {weatherData.date}</li>
            <li>{weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  width="90"
                  className="float-start"
                />
                <div className="float-right">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
