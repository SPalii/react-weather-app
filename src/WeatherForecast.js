import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
   // console.log(response.data);
  //console.log(props); //it is property include coord
setForecast(response.data.daily);
setLoaded(true);
}

if (loaded) {
   console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Sun</div>
            <WeatherIcon  code= "01d" />

            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">15 </span>
              <span className="WeatherForecast-temperature-min">10 </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {

let apiKey ="ba966cff003b8578448515672de556e8";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return null;
}
}