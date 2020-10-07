import * as axios from 'axios'

const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY || '';

const weatherInstance = axios.create({
    baseURL: process.env.REACT_APP_OPEN_WEATHER_BASE_URL || ''
})

export const weatherAPI = {
    getWeather(city, units) {
        try {
            return weatherInstance.get(`forecast?q=${city}&units=${units}&appid=${openWeatherKey}`).then(r => r.data)
        } catch (err) {
            throw new Error(err)
        }
    }
}
