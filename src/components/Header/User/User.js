import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { translate, Interpolate } from 'react-i18next';


class User extends Component {

    constructor(props) {
        super();

        this.props = props;
    }

    actionLogin() {
        this.props.userActions.LogIn();
    }

    actionLogout() {
        this.props.userActions.LogOut();
    }

    render() {

        let self = this;

        return (
            <div className="header-user">

                {this.props.user.auth ?
                    <div className="header-user__info">
                        <p>
                            {this.props.user.data.name}
                        </p>
                        <p>
                            {this.props.user.data.age} years old
                        </p>

                        <input type="submit"  value={this.props.t('user:logout')}  onClick={self.actionLogout.bind(self)}/>
                        <Link to="/addPost"><input type="submit" value={this.props.t('user:addpost')} style = {{"marginLeft": "10px"}}/></Link>
                    </div>
                    : (<input type="submit" value={this.props.t('login')}  onClick={self.actionLogin.bind(self)}/>)
                }
            </div>
        )
    }
}


export default translate('user')(User);