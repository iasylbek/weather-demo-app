import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { card } = this.props;
    return (
      <div className="Card">
        <ul>
          <li>Date: {(new Date(card.dt * 1000)).toLocaleDateString()}</li>
          <li>Date txt: {card.dt_txt}</li>
          <li>Temperature: {card.main.temp}</li>
          <li>Feels like: {card.main.feels_like}</li>
        </ul>
      </div>
    );
  }
}

export default Card;
