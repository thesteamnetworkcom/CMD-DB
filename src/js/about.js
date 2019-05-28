import React from "react";
import {Component, Fragment} from "react"
import css from "../css/about.scss"

class About extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className='about-pane'>
        <p>
                  Simple deck builder built using React and the scryfall api.
                  Currently not particularly useful, no save functionality...
                  however, the planned features in order are:
                  <ul>
                  <li>1) Saving to LocalStorage</li>
                  <li>2) Analytics</li>
                  <li>3) Saving to Database</li>
                  <li>4) Diffing of Decks</li>
                  <li>5) Push/Pull of decks, deck trees</li>
                  </ul>
                  </p>
        </div>
      </Fragment>
    )
  }
}
export default About;
