import { useState } from "react";
import { useEffect } from "react";
import CitiesQuickSearch from "./components/CitiesQuickSearch";
import SearchBarAndQueryUpdate from "./components/SearchBarAndQueryUpdate";

import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";

import ReactLoading from "react-loading";

export default function App() {
  const [query, setQuery] = useState({ q: "sao paulo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeatherData();
  }, [query, units]);

  return (
    <main className="border-2 h-screen flex items-center justify-center bg-cyan-50	">
      {/* Main container */}
      <div className="w-[550px] h-[680px] bg-gradient-to-br from-blue-700 to-blue-800  py-5">
        {/* Content container */}
        <div className=" h-full mx-12">
          <CitiesQuickSearch />
          <SearchBarAndQueryUpdate />

          {weather ? (
            <div className="">
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />
              {/* Hourly Forecast */}
              <Forecast title="Hourly" weather={weather} />
              {/* Daily Forecast */}
              <Forecast title="Daily" weather={weather} />
            </div>
          ) : (
            <div
              className="flex items-center justify-center
            h-[400px]"
            >
              <ReactLoading type={"spinningBubbles"} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
