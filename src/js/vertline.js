import React from "react";
import {Component, Fragment} from "react"
import css from '../css/vertline.scss'

class VertLine extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <Fragment>
        <section className='vertical-line'></section>
      </Fragment>
    )
  }
}

export default VertLine;
