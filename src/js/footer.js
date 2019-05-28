import React from "react";
import {Component, Fragment} from "react"
import css from "../css/footer.scss"

class Footer extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className='footer'>
          <div className='footer-wrapper'>
            <span className='copyright'>Copyright 2019</span>
          </div>
          <div className='footer-wrapper'>
            <span className='social'>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-discord"></i>
              <i className="fab fa-twitch"></i>
              <i className="fab fa-wizards-of-the-coast"></i>
            </span>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Footer;
