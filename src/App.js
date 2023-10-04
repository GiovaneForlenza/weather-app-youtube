import Button from "./components/Button";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";
export default function App() {
  return (
    <main className="border-2 h-screen flex items-center justify-center bg-cyan-50	">
      {/* Main container */}
      <div className="w-[550px] bg-gradient-to-br from-blue-700 to-blue-800  py-5">
        {/* Content container */}
        <div className=" h-full mx-12">
          {/* City buttons */}
          <div className="flex justify-between">
            <Button text="London" />
            <Button text="Paris" />
            <Button text="Tokio" />
            <Button text="São Paulo" />
            <Button text="Sydney" />
          </div>
          {/* Search bar container */}
          <div className="flex justify-between mt-4">
            <div className="flex  items-center  w-full justify-evenly mr-2 ">
              <input
                type="text"
                placeholder="Search City"
                className="w-full p-1 rounded-sm border"
              />
              <Button icon="BsSearch" />
              <Button icon="FiMapPin" />
            </div>
            <div className="flex text-white items-center">
              <Button text="ºC" />|
              <Button text="ºF" />
            </div>
          </div>
          {/* Date time container */}
          <div className="mt-4 text-white font-thin text-center">
            <span>Thursday</span>, <span>31 May 2023</span> | Local Time:{" "}
            <span>11:24 AM</span>
          </div>
          {/* City container */}
          <div className=" mt-4 text-white font-semibold text-center text-3xl">
            <span>London</span>, <span>GB</span>
          </div>
          {/* Weather status container */}
          <div className="mt-4 text-cyan-300	  font-semibold text-center">
            <span>Cloudy</span>
          </div>
          {/* Current Weather container */}
          <div className="mt-4 flex flex-row items-center justify-between text-white">
            {/* Weather icon */}
            <div className="">
              <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
            </div>
            {/* Temperature */}
            <div className="  text-5xl">
              <span>27º</span>
            </div>
            {/* Feels like, real temp, humidity container */}
            <div className="">
              <WeatherInfo text="Feels Like: " icon="term" data="25º" />
              <WeatherInfo text="Humidity: " icon="droplet" data="25%" />
              <WeatherInfo text="Wind: " icon="wind" data="5km/h" />
            </div>
          </div>
          {/* Sun rise/set, min/max temp container */}
          <div className="mt-4 text-white flex items-center justify-between">
            <WeatherInfo text="Rise:" icon="rise" data="04:50AM" />
            <WeatherInfo text="Set:" icon="set" data="07:24PM" />
            <WeatherInfo text="High:" icon="high" data="28º" />
            <WeatherInfo text="Low:" icon="low" data="15º" />
          </div>
          {/* Hourly Forecast */}
          <Forecast title="Hourly" />
          {/* Daily Forecast */}
          <Forecast title="Daily" />
        </div>
      </div>
    </main>
  );
}
