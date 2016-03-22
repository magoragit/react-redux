import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/Content'
import * as userActions from '../actions/User'


// import Component's here
import User from '../components/User.js';
import Logotype from '../components/Logotype.js';
import ArticleList from '../components/ArticleList.js';
import ArticleAdd from '../components/ArticleAdd.js';

class App extends Component {
  render() {

    const { user } = this.props.user;
    const { content } = this.props.content;

    return (
        <div>
          <header className="header clearfix">
              <Logotype />
              <User user={user} userActions = {this.props.userActions} />
          </header>

          <main className="main">
              <ArticleList content={content} actions={this.props.pageActions} />
              <ArticleAdd actionAdd = {this.props.pageActions.AddPost} />
          </main>
        </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    user: state.user,
    content: state.content
  }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)