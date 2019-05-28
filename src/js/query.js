import React from "react"
import {Component, Fragment} from "react"
import css from "../css/query.scss"

class Query extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <li className='query-item'>
          <span>{this.props.query.result}</span>
          <div className='clear' onClick={()=>this.props.removeQuery(this.props.query.id)} >
            <i className="fas fa-backspace"></i>
          </div>
        </li>
      </Fragment>
    )
  }
}

export default Query;
