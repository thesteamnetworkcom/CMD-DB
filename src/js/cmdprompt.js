import React from "react";
import {Component, Fragment} from "react"
import css from "../css/cmdprompt.scss"

class CmdPrompt extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className='cmdprompt-wrapper effect8' tabIndex="0" onKeyDown={this.props.handleKeyPress}>
          <div id="cmdprompt-content" tabIndex="-1">
            <div id="cmdprompt-output">
              !$~ {this.props.intro} ~$!<br/>
              !$~ {this.props.version} ~$!<br/>
              !$~ {this.props.deck !== null ? this.props.deck.name : "None Loaded"} ~$!<br/>
              {this.props.output.map(newStr=>
                <span key={newStr.key}>{newStr.result}<br/></span>
              )}
            </div>
            <div id="cmdprompt-input">
              {this.props.inputString}{this.props.input}
            </div>
            <div id="cmdprompt-cursor">_|</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default CmdPrompt;
