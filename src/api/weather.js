import axios from "axios";

const apiWeatherKey = "d87af18618321d177d29201ddb0e6a70";
const getWeather = async (nameCity) => {
  let latitude,
    longtitude,
    temperature,
    airPressure,
    tempMax,
    tempMin,
    cloudNess,
    weather_description = [],
    weather_forecast = [];

  const apiString =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    nameCity +
    "&units=metric&appid=" +
    apiWeatherKey;
  // Get detail
  await axios
    .get(apiString)
    .then((res) => {
      (latitude = res.data.coord.lat),
        (longtitude = res.data.coord.lon),
        (temperature = res.data.main.temp),
        (airPressure = res.data.main.pressure),
        (tempMin = res.data.main.temp_min),
        (tempMax = res.data.main.temp_max),
        (cloudNess = res.data.clouds.all);
      for (var i of res.data.weather) {
        weather_description.push({
          weather: i.main,
          description: i.description,
          id: i.id,
        });
      }
    })
    .catch((err) =>
      console.log("Somethings wrong with Openweathermap api: ", err)
    );

  // Get forecast weather
  await getForecastWeather(longtitude, latitude)
    .then((res) => {
      weather_forecast = res;
      console.log("Result: ", weather_forecast);
    })
    .catch((err) => console.log("Somethings wrong: ", err));

  return {
    nameCity,
    latitude,
    longtitude,
    temperature,
    airPressure,
    tempMax,
    tempMin,
    cloudNess,
    weather_description,
    weather_forecast,
  };
};

const getForecastWeather = async (long, lat) => {
  const apiString =
    "https://api.openweathermap.org/data/2.5/onecall?lon=" +
    long +
    "&lat=" +
    lat +
    "&exclude=daily&units=metric&appid=" +
    apiWeatherKey;

  const data = await axios.get(apiString).then((res) => {
    if (res) return Promise.resolve(res.data);
  });
  return data.hourly;
};

export { getWeather };
