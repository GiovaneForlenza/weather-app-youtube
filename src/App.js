import { useState, useEffect } from "react";

import getFormattedWeatherData from "./services/weatherService";

import SearchBarAndQueryUpdate from "./components/SearchBarAndQueryUpdate";
import CitiesQuickSearch from "./components/CitiesQuickSearch";
import Forecast from "./components/Forecast";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";

import ReactLoading from "react-loading";

export default function App() {
  const [query, setQuery] = useState({ q: "sao paulo" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const clearSearch = () => {
      setSearch("");
    };

    const fetchWeatherData = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeatherData();
    clearSearch();
  }, [query, units]);
  return (
    <main className=" h-screen flex items-center justify-center bg-cyan-50	">
      {/* Main container */}
      <div className="min-w-xl max-w-2xl h-2xl bg-gradient-to-br from-blue-700 to-blue-800  py-5">
        {/* Content container */}
        <div className=" h-full px-2 sm:px-12 w-fit">
          <CitiesQuickSearch setQuery={setQuery} />
          <SearchBarAndQueryUpdate
            setQuery={setQuery}
            setUnits={setUnits}
            search={search}
            setSearch={setSearch}
          />

          {weather ? (
            <div className="">
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />
              {/* Hourly Forecast */}
              <Forecast title="Hourly" items={weather.hourly} />
              {/* Daily Forecast */}
              <Forecast title="Daily" items={weather.daily} />
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
