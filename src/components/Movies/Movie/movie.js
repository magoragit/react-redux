import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { translate, Interpolate } from 'react-i18next';



class Movie extends Component {

    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {

        let self = this;
        let movieItem = this.props.movie;

        return (
          <li className="movie">
              <Link to={'movies/' + movieItem.id}>
                  <h5 className="movie-title">
                     {movieItem.title}
                  </h5>
              </Link>


              <img className="movie-image" src={movieItem.poster} alt=""/>
              
          </li>
        )
    }
}


export default  translate(['header'])(Movie);