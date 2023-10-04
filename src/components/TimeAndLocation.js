import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather }) {
  return (
    <div>
      {/* Date time container */}
      <div className="mt-4 text-white font-thin text-center">
        {formatToLocalTime(weather.dt, weather.timezone)}
      </div>
      {/* City container */}
      <div className=" mt-4 text-white font-semibold text-center text-3xl">
        <span>{weather.name}</span>, <span>{weather.country}</span>
      </div>
      {/* Weather status container */}
      <div className="mt-4 text-cyan-300	  font-semibold text-center">
        <span>{weather.details}</span>
      </div>
    </div>
  );
}

export default TimeAndLocation;
