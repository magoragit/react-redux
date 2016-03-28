import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'



class Footer extends Component {

    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {

        let self = this;

        return (
            <footer className="footer">
                <div className="container">
                    It's our footer

                    {this.props.children}
                </div>
            </footer>
        )
    }
}


export default Footer;