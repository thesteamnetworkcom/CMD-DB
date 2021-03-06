import React from "react";
import {Component, Fragment} from "react"
import css from '../css/cardsmall.scss'

class CardSmall extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className='cardSmall'>
          <input type='text'
            value={this.props.data.qty}
            className='qty'
            onChange={(e)=>this.props.updateQty(e, this.props.data)}
          />
          <span className='name'>{this.props.data.card.name}</span>
          <div className='clear' onClick={()=>this.props.clear(this.props.data.card)}>
            <i class="fas fa-backspace"></i>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default CardSmall;
