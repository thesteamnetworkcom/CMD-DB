import React from "react";
import {Component, Fragment} from "react"
import css from "../css/paginationblock.scss"

class PaginationBlock extends Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <Fragment>
        <div className='pagination-block'>
          <span onClick={this.props.prev}>Prev</span><h2>Cards</h2><span onClick={this.props.next}>Next</span>
        </div>
      </Fragment>
    )
  }
}

export default PaginationBlock;
