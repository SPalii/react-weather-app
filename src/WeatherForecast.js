import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
console.log(props); //it is property include coord

let apiKey ="1ef7d7e2ff03d274cb2d1bf82cc249b8";
let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

return(
<div className="WeatherForecast">
<div className="row">

<div className="col">
   <div className="WeatherForecast-day">Sun
   </div>
   <WeatherIcon code="01d" size={36} />
   <div className="WeatherForecast-temperature">
   <span className="WeatherForecast-temperature-max"> 19°</span>
   <span className="WeatherForecast-temperature-min">10°</span>
   </div>
</div>

</div>
</div>

);
}