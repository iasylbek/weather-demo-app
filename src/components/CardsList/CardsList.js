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

  componentDidMount() {
    this.refactorCards();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.cards !== this.props.cards) {
      this.refactorCards();
    }
  }

  refactorCards = () => {
    let cardItemArr = [];
    let prev_date = null;
    this.props.cards.list.forEach((card) => {
      let curr_date = new Date(card.dt * 1000).toLocaleDateString();
      if (curr_date !== prev_date) {
        cardItemArr.push(card);
      }
      prev_date = curr_date;
    });
    this.setState({ cardsState: cardItemArr });
  };

  render() {
    const today = this.state.cardsState.find(
      (card) =>
        new Date(card.dt * 1000).toLocaleDateString() ===
        new Date().toLocaleDateString()
    );
    const cards = this.state.cardsState
      .filter(
        (card) =>
          new Date(card.dt * 1000).toLocaleDateString() !==
          new Date().toLocaleDateString()
      )
      .slice(0, 4);

    return (
      <div className="CardsList">
        <div>{today && <Card card={today} today={true} />}</div>
        <div className={"cardItem"}>
          {cards.map((cardR) => {
            return <Card card={cardR} key={cardR.dt} />;
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
