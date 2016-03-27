import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

// He's my components
import Login from '../Login/login.js';
import Logout from '../Logout/logout.js';

class DefaultPopup extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(<div>
            It's default state of popup
        </div>);
    }
}

class Popup extends Component {

    constructor(props) {
        super(props);

        this.props = props;
        this.body =  this.setBodyPopup();
        this.actionClose = this.actionClose.bind(this);
    }

    actionClose() {
        this.props.actions.close();
    }


    setBodyPopup(){
        var newCase = this.props.popup.content;

        console.log(newCase);

        switch (newCase) {
            case 'Login':
                console.log("40");
                return (<Login />);
                break;
            case 'Logout':
                console.log("44");
                return (<Logout />);
                break;
            default:
                console.log("48");
                return (<DefaultPopup />);
                break;
        }
    }


    render() {

        this.body = this.setBodyPopup();


        return (
            <div className={this.props.popup.open ? 'popup-wrapper popup-wrapper_open' : 'popup-wrapper'}>
                <div className="popup">

                    <div className="popup-body">
                        {this.body}
                    </div>

                    <div className="popup-close" onClick={this.actionClose}>
                        close
                    </div>
                </div>
            </div>
        )
    }
}


export default Popup;