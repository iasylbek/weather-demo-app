import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const style = this.props.today ? "today" : "temp";
    const { card } = this.props;
    return (
      <div className="Card">
        {this.props.today && <div className={"title"}>Today</div>}
        {this.props.today ? (
          <div className={"todayBlock"}>
            <img
              className={"todayIcon"}
              src={`https://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}
              alt="Weather icon"
            />
            <div>
              <div className={style}>{Math.round(card.main.temp)}&deg;</div>
              <div>{card.weather[0].description}</div>
            </div>
          </div>
        ) : (
          <ul>
            <li>
              {new Date(card.dt * 1000).toLocaleDateString("en-CA", {
                weekday: "short",
              })}
            </li>

            <img
              src={`https://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}
              alt="Weather icon"
            />
            <li className={style}>{Math.round(card.main.temp)}&deg;</li>
          </ul>
        )}
      </div>
    );
  }
}

export default Card;
