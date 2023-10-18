import React from "react";
import SingleForecast from "./SingleForecast";

function Forecast({ title, items }) {
  return (
    <div className=" mt-4 text-white">
      <div className="uppercase font-bold">{title} forecast</div>
      <div className="border-b border-white my-1"></div>
      <div className="flex items-center justify-between">
        {items.map((item, id) => {
          return <SingleForecast data={item} key={id} />;
        })}
      </div>
    </div>
  );
}

export default Forecast;
