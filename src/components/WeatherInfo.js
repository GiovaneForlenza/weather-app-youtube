import React from "react";
import { BsSunrise, BsSunset, BsThermometerHigh } from "react-icons/bs";
import { FiDroplet, FiWind } from "react-icons/fi";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

function WeatherInfo({ text, icon, data }) {
  return (
    <div className="flex items-center justify-between text-sm">
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
      <span className="font-semibold">{data}</span>
    </div>
  );
}

export default WeatherInfo;
