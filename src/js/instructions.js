import React from "react";
import {Component, Fragment} from "react"
import css from "../css/instructions.scss"

class Instructions extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className='instructions-pane'>
          <div className='instruction-words'>

          </div>
        </div>
      </Fragment>
    )
  }
}
export default Instructions;
