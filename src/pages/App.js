import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import * as popupActions from '../actions/common/popup'
import * as i18nActions from '../actions/common/i18n'

// import Component's here
import Popup from '../components/Common/Popup/popup.js';
import Header from '../components/Common/Header/header.js';
import Footer from '../components/Common/Footer/footer.js';
import Lang from '../components/Common/i18n/i18n.js';

// Languages
import { I18nextProvider } from 'react-i18next';
class App extends Component {

  constructor(props) {
      super(props);

      this.props = props;
  }

  render() {

    const popupStore = this.props.popup;
    const i18nStore = this.props.i18n;

    return (
        <I18nextProvider i18n={  i18nStore.i18n }>
            <div>
                <Header popupActions = {this.props.popupActions} />

                <main className="main">
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>

                <Footer>
                    <Lang  actions = {this.props.i18nActions} />
                </Footer>

                <Popup actions = {this.props.popupActions} popup = {popupStore} />
            </div>
        </I18nextProvider>
    )
  }
}


function mapStateToProps (state) {
  return {
    popup: state.popup,
    i18n: state.i18n
  }
}

function mapDispatchToProps(dispatch) {
    return {
        popupActions: bindActionCreators(popupActions, dispatch),
        i18nActions: bindActionCreators(i18nActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)