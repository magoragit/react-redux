import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'



class Lang extends Component {

    constructor(props) {
        super(props);

        this.props = props;
        this.actionChange = this.actionChange.bind(this);
    }

    actionChange(e) {
       this.props.actions.changeLanguage(e.target.value);
    }

    render() {

        let self = this;

        return (
            <select onChange = {this.actionChange}>
                <option value="eng">Eng</option>
                <option value="ru">Ru</option>
            </select>
        )
    }
}


export default Lang;