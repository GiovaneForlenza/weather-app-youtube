import React from "react";
import { BsSunrise, BsSunset, BsThermometerHigh } from "react-icons/bs";
import { FiDroplet, FiWind } from "react-icons/fi";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

function WeatherInfo({ text, icon, data, symbol }) {
  return (
    <div className="flex items-center text-sm mx-2 flex-wrap">
      <div className="mr-1">
        {icon === "term" ? (
          <BsThermometerHigh />
        ) : icon === "droplet" ? (
          <FiDroplet />
        ) : icon === "wind" ? (
          <FiWind />
        ) : icon === "rise" ? (
          <BsSunrise />
        ) : icon === "set" ? (
          <BsSunset />
        ) : icon === "high" ? (
          <AiOutlineArrowUp />
        ) : (
          <AiOutlineArrowDown />
        )}
      </div>
      <div className="mr-1">{text}</div>
      <span className="font-semibold">
        {data}
        {symbol}
      </span>
    </div>
  );
}

export default WeatherInfo;
