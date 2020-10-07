import React, { Component } from "react";
import "./App.css";
// import { Button } from "@material-ui/core";
import CardsList from "../CardsList/CardsList";
// import Weather from "../../util/Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      cards: null,
    };
  }

  // https://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=metric&appid=27ce22c1f868db2026e04cca622c60e4

  


  componentDidMount() {
    const openWeatherKey = "27ce22c1f868db2026e04cca622c60e4";
    const weatherUrl = "https://api.openweathermap.org/data/2.5/";
    const city = "Toronto";
    const units = "metric";

    fetch(
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
  }

  render() {
    const { error, isLoaded } = this.state;
    console.log(this.state.cards);
    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <h1>Weather App</h1>
          <CardsList cards={this.state.cards} />
        </div>
      );
    }
  }
}

export default App;
