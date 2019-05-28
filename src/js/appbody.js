import React from "react";
import {Component, Fragment} from "react"
import css from "../css/appbody.scss"
import LeftPane from "./leftpane.js"
import CmdPrompt from "./cmdprompt.js"
import RightPane from "./rightpane.js"

class AppBody extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className='body-wrapper'>
          <LeftPane
            cardList={this.props.cardList}
            curList={this.props.curList}
            addCard={this.props.addCard}
            switchCardState={this.props.switchCardState}
            deck={this.props.deck}
            prev={this.props.prev}
            next={this.props.next}
          />
          <CmdPrompt
            inputString={this.props.inputString}
            returnString={this.props.returnString}
            output={this.props.output}
            input={this.props.input}
            deck={this.props.deck}
            intro={this.props.intro}
            version={this.props.version}
            handleKeyPress={this.props.inputUpdate}
          />
          <RightPane
            queries={this.props.queries}
            removeQuery={this.props.removeQuery}
            deck={this.props.deck}
            updateQty={this.props.updateQty}
          />
        </div>
      </Fragment>
    )
  }
}

export default AppBody;
