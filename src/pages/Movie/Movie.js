import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import Actions
import * as moviesActions from '../../actions/movies';

class Movie extends Component {

  constructor(props) {
      super(props);
      this.props = props;

      this.props.moviesActions.getOne(this.props.params.id);
  }

  render() {

    const moviesStore = this.props.movies;

    return (
        <div>
            <h1>
                {moviesStore.movie.title}
            </h1>

            <img src= {moviesStore.movie.poster} style={{"float": "left"}}/>

            <p>
                {moviesStore.movie.plot}
            </p>
        </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    movies: state.movies
  }
}

function mapDispatchToProps(dispatch) {
    return {
        moviesActions: bindActionCreators(moviesActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie)