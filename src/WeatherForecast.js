import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
// if the coordinates change
// set loaded false не потрібно звгружати div WeatherForecast, а зразу api

useEffect(() => {
setLoaded(false);
}, [props.coordinates]
);

function handleResponse(response) {
     setForecast(response.data.daily);
    setLoaded(true);
  }

if(loaded){

  //console.log(forecast);

return (
    <div className="WeatherForecast">
      <div className="row">

  {forecast.map(function (dailyForecast, index){
    if (index < 5){
return(
<div className="col" key={index}>
          <WeatherForecastDay data={dailyForecast} />
        </div>
      );
    }
    })
    }
    </div>
    </div>
  );
}
else{

  let apiKey ="2a2eaa51d996796495bf456e5b58adf4";
  // let apiKey = "55f59614e2025a21009b8c49463db5d3";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return null;
}
}

