import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
   const[weatherData, setWeatherData]=useState({ready:false});
   const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){
console.log(response.data);
setWeatherData({
   ready:true,
   temperature:response.data.main.temp,
   humidity:response.data.main.humidity,
   date:new Date(response.data.dt * 1000),
   wind:response.data.wind.speed,
   city: response.data.name,
   description: response.data.weather[0].description,
      // icon: response.data.weather[0].icon,
   iconUrl:"https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
});
}
if(weatherData.ready){
   return(
   <div className="Weather">
<form>
   <div className="row mt-3">
   <div className="col-9">
   <input type="search"
   placeholder="Enter a city"
   className="form-control"
   autoFocus="on" />
   </div>
   <div className="col-3">
   <input type="submit" value="Search" className="btn btn-primary w-100" />
   </div>
   </div>
</form>

<WeatherInfo data={weatherData} />
        </div>// div Weather
);
}
else{
   const apiKey="1ef7d7e2ff03d274cb2d1bf82cc249b8";
   let city="Kyiv";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return(
      "Loading..."
    )
}
}