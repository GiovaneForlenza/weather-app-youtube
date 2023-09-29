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

const formatCurrentWeather = (data) => {
  return ({
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    timezone,
    weather,
    wind: { speed },
  } = data);
};

const getFormatterWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather(data));
};
