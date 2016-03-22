import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


export default class Logotype extends Component {
    render() {
        return (
            <div className="header-logotype">
                <Link to="/">
                    <img src="https://magora-systems.com/public/img/layout/logo.png" alt=""/>
                </Link>
            </div>
        )
    }
}