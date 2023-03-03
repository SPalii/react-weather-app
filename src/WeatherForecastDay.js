import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

function maxTemperature(){
   let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
}

function minTemperature(){
   let temperature = Math.round(props.data.temp.min);
   return `${temperature}`;
}

function day() {
   let date = new Date(props.data.dt * 1000);
   let day = date.getDay();
   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

   return days[day];
}

return(
<div>
      <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon  code= {props.data.weather[0].icon} size={36} />

            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">{maxTemperature()}°</span>
              <span className="WeatherForecast-temperature-min">{minTemperature()}°</span>
      </div>
</div>
);

}

{/* <div className="WeatherForecast-day">{forecast[0].dt}</div>
          <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}°</span>
            <span className="WeatherForecast-temperature-min">{forecast[0].temp.max}°</span>
          </div> */}