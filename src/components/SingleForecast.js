import React from "react";

function SingleForecast() {
  return (
    <div className=" w-[70px] flex flex-col items-center justify-start text-sm">
      <div className=" ">12:00 PM</div>
      <div className=" p-0">
        <img
          src="https://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          className=" w-12"
        />
        
      </div>
      <div className="font-semibold">59º</div>
    </div>
  );
}

export default SingleForecast;
