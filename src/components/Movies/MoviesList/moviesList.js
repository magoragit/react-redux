import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { translate, Interpolate } from 'react-i18next';

// import Component's here
import Movie from '../Movie/movie.js';

class MoviesList extends Component {

    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {

        let self = this;

        let Movies = this.props.movies.map((item) => {
            return(<Movie movie = {item} />)
        });

        return (
          <ul className="movies-list">
              {Movies}
          </ul>
        )
    }
}


export default  translate(['header'])(MoviesList);