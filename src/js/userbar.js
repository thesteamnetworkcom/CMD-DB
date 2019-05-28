import React from "react";
import {Component, Fragment} from "react"
import css from '../css/userbar.scss'

class UserBar extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <Fragment>
                <div className={'user-bar ' + this.props.showLogin ? 'active' : 'inactive'} >
                </div>

            </Fragment>
        )
    }
}
export default UserBar;
