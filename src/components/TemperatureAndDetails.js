import React from "react";

import WeatherInfo from "./WeatherInfo";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";
function TemperatureAndDetails({ weather }) {
  return (
    <div>
      {/* Current Weather container */}
      <div className="mt-4 flex flex-row items-center justify-between text-white">
        {/* Weather icon */}
        <div className="">
          <img src={iconUrlFromCode(weather.icon)} alt="" />
        </div>
        {/* Temperature */}
        <div className="  text-5xl">
          <span>{weather.temp.toFixed()}º</span>
        </div>
        {/* Feels like, real temp, humidity container */}
        <div className="">
          <WeatherInfo
            text="Feels Like: "
            icon="term"
            data={weather.feels_like.toFixed()}
            symbol="º"
          />
          <WeatherInfo
            text="Humidity: "
            icon="droplet"
            data={weather.humidity.toFixed()}
            symbol="%"
          />
          <WeatherInfo
            text="Wind: "
            icon="wind"
            data={weather.speed.toFixed()}
            symbol="km/h"
          />
        </div>
      </div>
      {/* Sun rise/set, min/max temp container */}
      <div className="mt-4 text-white flex items-center justify-between flex-row">
        <WeatherInfo
          text="Rise:"
          icon="rise"
          data={formatToLocalTime(weather.sunrise, weather.timezone, "hh:mm a")}
        />
        <WeatherInfo
          text="Set:"
          icon="set"
          data={formatToLocalTime(weather.sunset, weather.timezone, "hh:mm a")}
        />
        <WeatherInfo
          text="High:"
          icon="high"
          data={weather.temp_max.toFixed()}
          symbol="º"
        />
        <WeatherInfo
          text="Low:"
          icon="low"
          data={weather.temp_min.toFixed()}
          symbol="º"
        />
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
