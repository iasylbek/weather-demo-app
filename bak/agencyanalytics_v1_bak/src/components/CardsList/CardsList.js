import React, { Component } from "react";
import "./CardsList.css";
import Card from "../Card/Card";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsState: [],
    };
  }
  render() {
    let cardItemArr = [];
    let prev_date = null;
    this.props.cards.list.forEach((card) => {
      let curr_date = new Date(card.dt * 1000).toLocaleDateString();
      // console.log("Current", curr_date)
      if (curr_date !== prev_date) {
        cardItemArr.push(card);
      }
      prev_date = curr_date;
      // console.log("Prev", prev_date)
    });
    this.setState({ cardsState: cardItemArr });

    // return (
    //   <div className="CardList">
    //     <Card card={card} key={card.dt} />
    //   </div>
    // );
    return (
      <div className="CardsList">
        {this.state.cardsState.map((cardR) => {
          return <Card card={cardR} key={cardR.dt} />;
        })}
      </div>
    );
  }
}

export default CardList;
