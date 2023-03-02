// import React from "react";
// import WeatherIcon from "./WeatherIcon";
// import "./WeatherForecast.css";
// import axios from "axios";

// export default function WeatherForecast(props) {

//    function handleResponse(response) {
// //console.log(response.data);
// }

// let apiKey = "55f59614e2025a21009b8c49463db5d3";
// let longitude = props.coordinates.lon;
// let latitude = props.coordinates.lat;
// let apiUrl =
// `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


// axios.get(apiUrl).then(handleResponse);

// return (
//     <div className="WeatherForecast">
//       <div className="row">
//         <div className="col">
//           <div className="WeatherForecast-day">Thu</div>
//           <WeatherIcon code="01d" size={36} />
//           <div className="WeatherForecast-temperatures">
//             <span className="WeatherForecast-temperature-max">19°</span>
//             <span className="WeatherForecast-temperature-min">10°</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
    }
    else {
    let apiKey = "55f59614e2025a21009b8c49463db5d3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}


// https://api.openweathermap.org/data/2.5/onecall?lat=50.44&lon=30.52&appid=55f59614e2025a21009b8c49463db5d3

// let apiKey ="85dbd95fc1afc65ff87ff855b27d372f";
// let longitude = props.coordinates.lon;
// let latitude = props.coordinates.lat;
// let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
