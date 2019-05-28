import React from "react";
import {Component, Fragment} from "react"
import Nav from "./nav.js"
import css from "../css/optionpane.scss"

class OptionPane extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className='optionPane'>
          <Nav />
        </div>
      </Fragment>
    )
  }
}
export default OptionPane;
