import React from "react";
import {Component, Fragment} from "react"
import Closer from "./closer.js"
import QueryDisp from "./querydisp.js"
import VertLine from "./vertline.js"
import DeckDisp from "./deckdisp.js"
import css from '../css/rightpane.scss'

class RightPane extends Component{
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
        <div className={"RightPane " + (this.state.open === true ? "xPane" : "yPane")}>
          <Closer dir={"right"} open={this.state.open} switchState={this.switchState}/>
          {this.state.open === true ?
            <React.Fragment>
              <QueryDisp
                queries={this.props.queries}
                removeQuery={this.props.removeQuery}
              />
              <VertLine />
              <DeckDisp
                deck={this.props.deck}
                updateQty={this.props.updateQty}
              />
            </React.Fragment>
          : null}
        </div>
      </Fragment>
    )
  }
}

export default RightPane;
