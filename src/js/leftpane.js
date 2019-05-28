import React from "react";
import {Component, Fragment} from "react"
import PaginationBlock from "./paginationblock.js"
import Closer from "./closer.js"
import Card from "./card.js"
import css from "../css/leftpane.scss"

class LeftPane extends Component{
  constructor(props){
    super(props);
    this.state={
      open:true
    };
    this.switchState=this.switchState.bind(this);
  }
  switchState(){
    this.setState({
      open:!this.state.open
    });
  }
  render(){
    return(
      <Fragment>
        <div className={'LeftPane ' + (this.state.open === true ? "xPane" : "yPane")}>
          {this.state.open === true ?
            <div className='card-wrapper'>
              <PaginationBlock prev={this.props.prev} next={this.props.next}/>
              <div className='cards'>
              {(this.props.cardList[this.props.curList] !== undefined && this.props.cardList[this.props.curList].data !== undefined)?this.props.cardList[this.props.curList].data.map(card=>
                <Card key={card.id} data={card} addCard={this.props.addCard} deck={this.props.deck} switchCardState={this.props.switchCardState}/>
              ) : null}
              </div>
              {this.props.cardList[this.props.curList] !== undefined && this.props.cardList[this.props.curList].data !== undefined ?
                <PaginationBlock prev={this.props.prev} next={this.props.next} />
              : null}
            </div>
          : null}
          <Closer dir={"left"} open={this.state.open} switchState={this.switchState}/>
        </div>
      </Fragment>
    )
  }
}

export default LeftPane;
