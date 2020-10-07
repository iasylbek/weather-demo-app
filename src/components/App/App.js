import React, { Component } from "react";
import "./App.css";
// import { Button } from "@material-ui/core";
import CardsList from "../CardsList/CardsList";
import { weatherAPI } from "../../util/WeatherAPI";
import { CircularProgress } from "@material-ui/core";

// import Weather from "../../util/Weather";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      cards: null,
      currentCity: "Toronto",
      currentUnits: "metric",
      cities: ["Toronto", "Atyrau", "Yellowknife"],
    };
  }

  componentDidMount() {
    this.getWeather();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentCity !== this.state.currentCity) {
      this.getWeather();
    }
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
    } else {
      return (
        <div className="App">
          <div className={"cities"}>
            {this.state.cities.map((city) => (
              <h1
                key={city}
                onClick={() => this.handleChangeCity(city)}
                className={this.state.currentCity === city ? "active" : ""}
              >
                {city.toUpperCase()}
              </h1>
            ))}
          </div>

          {isLoaded ? (
            <div className={"progress"}>
              <CircularProgress style={{ color: "#266e9b" }} size={150} />
            </div>
          ) : (
            this.state.cards && <CardsList cards={this.state.cards} />
          )}
        </div>
      );
    }
  }
}

export default App;
