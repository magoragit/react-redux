import React, {Component} from 'react';
import { connect } from 'react-redux'


export default class User extends Component {

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

                        <input type="submit" value="Logout"  onClick={self.actionLogout.bind(self)}  />
                    </div>
                    : (<input type="submit" value="Login"  onClick={self.actionLogin.bind(self)}/>)
                }
            </div>
        )
    }
}