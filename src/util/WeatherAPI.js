import * as axios from "axios";

const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY || "27ce22c1f868db2026e04cca622c60e4";

const weatherInstance = axios.create({
  baseURL: process.env.REACT_APP_OPEN_WEATHER_BASE_URL || "https://api.openweathermap.org/data/2.5/",
});

export const weatherAPI = {
  getWeather(city, units) {
    try {
      return weatherInstance
        .get(`forecast?q=${city}&units=${units}&appid=${openWeatherKey}`)
        .then((r) => r.data);
    } catch (err) {
      throw new Error(err);
    }
  },
};
