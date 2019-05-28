import React from "react";
import {Component, Fragment} from "react"
import Query from "./query.js"
import css from '../css/querydisp.scss'

class QueryDisp extends Component{
  constructor(props){
    super(props);
    this.state={}
  }
  render(){
    return(
      <Fragment>
        <div className='query-wrapper'>
          <h2>Queries</h2>
          <ul className='query-list'>
            {this.props.queries.map(query=>
              <Query key={query.id} query={query} removeQuery={this.props.removeQuery} />
            )}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default QueryDisp;
