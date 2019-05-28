import React from "react";
import {Component, Fragment} from "react"
import css from "../css/closer.scss"

class Closer extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        {/*Give it a prop for right or left and an open/closed state*/}
        <section className='closer' onClick={this.props.switchState}>
          <i className={"fas fa-chevron-" + this.props.dir + " " + (this.props.open === true ? "" : "reverse")}></i>
        </section>
      </Fragment>
    )
  }
}

export default Closer;
