import React, { Component } from "react";
import "./App.css";
// import { Button } from "@material-ui/core";
import CardsList from "../CardsList/CardsList";
import { weatherAPI } from "../../util/WeatherAPI";

// import Weather from "../../util/Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      cards: null,
      currentCity: "Toronto",
      currentUnits: "metric",
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    this.setState({ isLoaded: true });
    try {
      const cards = await weatherAPI.getWeather(
        this.state.currentCity,
        this.state.currentUnits
      );
      this.setState({ cards });
    } catch (error) {
      this.setState({ error });
    }
    this.setState({ isLoaded: false });
  };

  handleChangeCity = (currentCity) => {
    this.setState({ currentCity });
  };

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <h1>Weather App</h1>
          {this.state.cards && <CardsList cards={this.state.cards} />}
        </div>
      );
    }
  }
}

export default App;
