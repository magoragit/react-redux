import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import * as popupActions from '../actions/popup'

// import Component's here
import Popup from '../components/Popup/popup.js';

class App extends Component {

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

    const popupStore = this.props.popup;


    return (
        <div className="container">
            <header>
                <a onClick = {this.actionSignIn} style = {{"marginRight": "20px"}}>
                    Sign in
                </a>

                <a onClick = {this.actionSignOut}>
                    Sign out
                </a>
            </header>

            <Link to="/movies"> Movies </Link>

            <Popup actions = {this.props.popupActions} popup = {popupStore} />
        </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    popup: state.popup
  }
}

function mapDispatchToProps(dispatch) {
    return {
        popupActions: bindActionCreators(popupActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)