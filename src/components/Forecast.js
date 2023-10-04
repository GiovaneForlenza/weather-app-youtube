import React from "react";
import SingleForecast from "./SingleForecast";

function Forecast({ title }) {
  return (
    <div className=" mt-4 text-white">
      <div className="uppercase font-bold">{title} forecast</div>
      <div className="border-b border-white my-1"></div>
      <div className="flex items-center justify-between">
        <SingleForecast />
        <SingleForecast />
        <SingleForecast />
        <SingleForecast />
        <SingleForecast />
      </div>
    </div>
  );
}

export default Forecast;
