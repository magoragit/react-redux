import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/Content'
import * as userActions from '../actions/User'


// import Component's here
import User from '../components/Header/User/User.js';
import Logotype from '../components/Header/Logotype/Logotype.js';
import ArticleAdd from '../components/ArticleAdd/ArticleAdd.js';

class AppArticle extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        const { user } = this.props.user;

        return (
            <div>
                <header className="header clearfix">
                    <Logotype />
                    <User user={user} userActions = {this.props.userActions} />
                </header>

                <main className="main">
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



export default connect(mapStateToProps, mapDispatchToProps)(AppArticle)