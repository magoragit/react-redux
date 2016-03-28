import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { translate, Interpolate } from 'react-i18next';


class Header extends Component {

    constructor(props) {
        super(props);

        this.props = props;
        this.actionSignIn = this.actionSignIn.bind(this);
        this.actionSignOut = this.actionSignOut.bind(this);
    }

    actionSignIn() {
        this.props.popupActions.open("Login");
    }

    actionSignOut() {
        this.props.popupActions.open("Logout");
    }
    render() {

        let self = this;

        return (
            <header className="header">
                <div className="container">
                    <div className="auth">
                        <button onClick = {this.actionSignIn} style = {{"marginRight": "20px"}}>
                            {this.props.t('header:login')}
                        </button>

                        <button onClick = {this.actionSignOut}>
                            {this.props.t('header:logout')}
                        </button>

                    </div>

                    <nav className="navigation">
                        <Link to="/"> Index </Link>
                        <Link to="/movies"> Movies </Link>
                    </nav>
                </div>
            </header>
        )
    }
}


export default  translate(['header'])(Header);