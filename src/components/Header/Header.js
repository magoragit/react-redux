import React, {Component} from 'react';
import { Link } from 'react-router'

// import Component's here
import User from '../components/User.js';
import Logotype from '../components/Logotype.js';

export default class Article extends Component {

    render() {

        return (
            <header className="header clearfix">
                <Logotype />
                <User user={user} userActions = {this.props.userActions} />
            </header>

        )
    }
}