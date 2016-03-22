import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/Content'
import * as userActions from '../actions/User'


// import Component's here
import User from '../components/User.js';
import Logotype from '../components/Logotype.js';
import Article from '../components/Article.js';

class AppArticle extends Component {

    constructor(props) {
        super(props);

        // id of current id
        console.log(props.params.articleId);

        this.state = {
            content : {}
        }

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
                    <Article item={this.state.content} delete={this.props.DeletePost} />
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