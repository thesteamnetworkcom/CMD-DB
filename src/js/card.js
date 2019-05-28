import React from "react";
import {Component, Fragment} from "react"
import css from "../css/card.scss"

class Card extends Component{
  constructor(props){
    super(props);
    this.state={};
    this.getQty = this.getQty.bind(this);
  }
  getQty(){
    let qty=0;
    if(this.props.deck === null){
      return qty;
    }
    for(var key in this.props.deck.cards){
     if(this.props.deck.cards[key] !== undefined){
      for(var i = 0; i < this.props.deck.cards[key].length; i++){
       if(this.props.deck.cards[key][i].card.id === this.props.data.id){
        qty = this.props.deck.cards[key][i].qty;
       }
      }
     }
    }
    return qty;
  }
  render(){
    let qty = this.getQty();
    return(
      <Fragment>
        <div className='card'>
          {this.props.data.image_uris === undefined ? <img src={this.props.data.card_faces[0].image_uris.small} /> : <img src={this.props.data.image_uris.small} />}
          <div className='overlayQty'>
            {qty !== 0 ? qty : ''}
          </div>
          <div className='overlayChangers'>
            <div className='decrement' onClick={()=>this.props.addCard(this.props.data, -1)}>
              <i className="fa fa-minus"></i>
            </div>
            <div className='increment' onClick={()=>this.props.addCard(this.props.data, 1)}>
              <i className="fa fa-plus"></i>
            </div>
          </div>
          <div className='overlayDisplay' onClick={()=>this.props.switchCardState(this.props.data)}>
            <i className="fas fa-expand-arrows-alt"></i>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Card;
