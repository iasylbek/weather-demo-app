const openWeatherKey = "27ce22c1f868db2026e04cca622c60e4";
const weatherUrl = "https://api.openweathermap.org/data/2.5/";
const city = "Toronto";
const units = "metric";

// https://api.openweathermap.org/data/2.5/weather/?&q=Montreal&APPID=45dc1d2e92f646d108fe518401d1e210
// https://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=metric&appid=27ce22c1f868db2026e04cca622c60e4

const Weather = fetch(
  `${weatherUrl}forecast?q=${city}&units=${units}&appid=${openWeatherKey}`
)
  .then((res) => res.json())
  .then(
    (jsonResponse) => {
      this.setState({
        isLoaded: true,
        cards: jsonResponse,
      });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error,
      });
    }
  );

export default Weather;

// const getForecast = async () => {
//   const urlToFetch = `${weatherUrl}?&q=${city}&APPID=${openWeatherKey}`;

//   try {
//     const response = await fetch(urlToFetch);
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       return jsonResponse;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const renderForecast = (day) => {
//   const weatherContent = createWeatherHTML(day);
//   //Using HTML template:
//   //const weatherContent = '<h2>' + weekDays[(new Date()).getDay()] + '</h2> <h2>Temperature: ' + ((day.main.temp - 273.15) * 9 / 5 + 32).toFixed(0) + '&deg;F</h2> <h2>Condition: ' + day.weather[0].description + '</h2> <img src="https://openweathermap.org/img/wn/' + day.weather[0].icon + '@2x.png">'
//   $weatherDiv.append(weatherContent);
// };

// const createWeatherHTML = (currentDay) => {
//   console.log(currentDay);
//   return `<h2>${weekDays[new Date().getDay()]}</h2>
// 		<h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
// 		<h2>Condition: ${currentDay.weather[0].description}</h2>
//   	<img src="https://openweathermap.org/img/wn/${
//       currentDay.weather[0].icon
//     }@2x.png">`;
// };

// const kelvinToFahrenheit = (k) => (((k - 273.15) * 9) / 5 + 32).toFixed(0);
// const fahrenheitToCelcius = (f) => (((f - 32) * 5) / 9).toFixed(0);
