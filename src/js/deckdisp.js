import React from "react";
import {Component, Fragment} from "react"
import CardSmall from "./cardsmall.js"
import css from '../css/deckdisp.scss'

class DeckDisp extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <Fragment>
        <div className='deck-wrapper'>
          <h2>Deck {this.props.deck !== null ? "- " + this.props.deck.name + (this.props.deck.format !== null ? "- " + this.props.deck.format : "") : ""}</h2>
          <ul className='deck-list'>
            {this.props.deck !== null ? Object.keys(this.props.deck.cards).map(cardType =>
                <Fragment>
                {console.log(this.props.deck.cards[cardType])}
                {this.props.deck.cards[cardType] !== undefined ?
                    <Fragment>
                        <h3>{cardType}</h3>
                        {this.props.deck.cards[cardType].map(card=>
                            <CardSmall key={card.id} data={card} updateQty={this.props.updateQty} clear={this.props.clear}/>
                        )}
                    </Fragment>
                : null}
                </Fragment>
            ) : null}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default DeckDisp;
