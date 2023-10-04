import { DateTime } from "luxon";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "e37ac004829824b7fe9c4723fed7bd07";

//Created the URL to search
//infoType defines if it's Weather (current weather), hourly or daily weather
//searchParams define what are que queries to search (country name, lat, lon, units, ...)
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
};

/*
  Extracts all the info from the json response and returns it as an object
*/
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    weather,
    sys: { country, sunrise, sunset },
    timezone,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    timezone,
    speed,
    details,
    icon,
  };
};

/*
  Extracts all the daily and hourly info from the json response and returns it as an object
*/
const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  //Gets the first 5 days to be used
  daily = daily.slice(1, 6).map((d) => {
    return {
      //Formats the days e.g.: 'Mon'
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      //Gets the daily avg for the day
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  //Gets the next 5 hours to be used
  hourly = hourly.slice(1, 6).map((h) => {
    return {
      //Formats the hours e.g.: '01:00PM'
      title: formatToLocalTime(h.dt, timezone, "hh:mm a"),
      //Gets the hourly avg for the hour
      temp: h.temp,
      icon: h.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

/* This is the main function to be called from the front end
   From here everything is done automatically to get all the information at once and return it
   1. getFormattedWeatherData -> getWeatherData -> formatCurrentWeather (This gives the current weather)
   2. getWeatherData -> FormatForecastWeather (This gives the formatted hourly and daily weather)
*/
const getFormattedWeatherData = async (searchParams) => {
  //Gets the info to be used for the current weather
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
    //Formats the current weather data
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  //Gets the info to be used in the forecast (hourly and daily)
  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
    //Formats the forecast weather
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
