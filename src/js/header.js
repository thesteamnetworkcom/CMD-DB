import React from "react";
import {Component, Fragment} from "react"
import UserBar from "./userbar.js"
import css from '../css/header.scss'

class Header extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className={'header ' + (this.props.showLogin ? 'active' : 'inactive')}>
          <UserBar loginDetails={this.props.loginDetails} showLogin={this.props.showLogin} switchLogin={this.props.switchLogin} />
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
            <i className="fas fa-user-ninja" onClick={this.props.switchLogin}></i>
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
