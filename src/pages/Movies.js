import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as popupActions from '../actions/popup'

// import Component's here
import Popup from '../components/Popup/popup.js';

class Movies extends Component {

  constructor(props) {
      super(props);

      this.props = props;
  }


  render() {

    const popupStore = this.props.popup;

    return (
        <div className="container">
           Here's our movies
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


export default connect(mapStateToProps, mapDispatchToProps)(Movies)