import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
   const[weatherData, setWeatherData]=useState({ready: false});
   const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){
console.log(response.data);
setWeatherData({
   ready:true,
   coordinates: response.data.coord,   //use for weatherForecast
   temperature:response.data.main.temp,
   humidity:response.data.main.humidity,
   date:new Date(response.data.dt * 1000),
   wind:response.data.wind.speed,
   city: response.data.name,
   description: response.data.weather[0].description,
   icon: response.data.weather[0].icon,
//   iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
});
}

function handleSubmit(event){
   event.preventDefault();
  // alert(city);
  search();
   }

function handleCityChange(event){
   setCity(event.target.value);
}
function search(){
   const apiKey="1ef7d7e2ff03d274cb2d1bf82cc249b8";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);
}

if(weatherData.ready){
   return(
   <div className="Weather">
<form onSubmit={handleSubmit}>
   <div className="row mt-3">
   <div className="col-9">
   <input type="search"
   placeholder="Enter a city"
   className="form-control"
   autoFocus="on"
   onChange={handleCityChange}
   />
   </div>
   <div className="col-3">
   <input type="submit" value="Search" className="btn btn-primary w-100" />
   </div>
   </div>
</form>

<WeatherInfo data={weatherData} />
<WeatherForecast coordinates={weatherData.coordinates} />
        </div>// div Weather
);
}
else{
   search();
    return(
      "Loading..."
    )
}
}