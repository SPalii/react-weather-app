import React, {useState, useSyncExternalStore} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
   const[ready, setReady]=useState(false);
   const[weatherData, setWeatherData]=useState({});
function handleResponse(response){
console.log(response.data);

setWeatherData({
   temperature:response.data.main.temp,
   humidity:response.data.main.humidity,
   date:"Sunday",
   wind:response.data.wind.speed,
   city: response.data.name,
   description: response.data.weather[0].description,
      // icon: response.data.weather[0].icon,
   iconUrl:"https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
});
setReady(true);
}

if(ready){
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
      <h1>{weatherData.city}</h1>
      <ul>
      <li>{weatherData.date}</li>
      <li className="text-capitalize">{weatherData.description}</li>
      </ul>

        <div className="row mt-3" >
   <div className="col-6">
      <div className="cleafix">
         <img src={weatherData.iconUrl}
         alt={weatherData.description}
         className="float-left"/>
         {/* <div className="float-left"> */}
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
         {/* </div> */}
      </div>
   </div>

<div className="col-6">
   <ul>
   <li>Humidity: {weatherData.humidity}%</li>
   <li>Wind:{weatherData.wind}km/h</li>
   </ul>
</div>
        </div>
        </div>// div Weather
);
}
else{
   const apiKey="1ef7d7e2ff03d274cb2d1bf82cc249b8";
   let city="Sydney";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return(
      "Loading..."
    )
}
}