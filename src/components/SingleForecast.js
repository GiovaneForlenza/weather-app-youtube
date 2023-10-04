import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function SingleForecast({ data }) {
  return (
    <div className=" w-[70px] flex flex-col items-center justify-start text-sm">
      <div className=" ">{data.title}</div>
      <div className=" p-0">
        <img src={iconUrlFromCode(data.icon)} alt="" className=" w-12" />
      </div>
      <div className="font-semibold">{data.temp.toFixed()}º</div>
    </div>
  );
}

export default SingleForecast;
