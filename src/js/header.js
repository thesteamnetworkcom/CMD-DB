import React from "react";
import {Component, Fragment} from "react"
import css from '../css/header.scss'

class Header extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className='header'>
          <div>
            <span>
              Deck Builder -
            </span>
            <span className="colorLight">
              Scryfall Powered,
            </span>
            <span className="colorAccentDark">
               &nbsp; Command Prompt Inspired
            </span>
          </div>
          <span className='byLine'>
            By: ScottieLew
          </span>
          <span className='user-section'>
            <i className="fas fa-user-ninja"></i>
          </span>
          <span>
            <span>About: </span>
            <i className="fas fa-caret-square-down" onClick={this.props.switchAbout}></i>
          </span>
        </div>
      </Fragment>
    )
  }
}

export default Header;
