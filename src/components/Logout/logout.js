import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'



class Logout extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        let self = this;

        return (
            <div>
                It's my modal with logout
            </div>
        )
    }
}


export default Logout;