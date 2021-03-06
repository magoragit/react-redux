import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// import Component's here
import MoviesList from '../../components/Movies/MoviesList/moviesList.js';

// import Actions
import * as moviesActions from '../../actions/movies';

class Movies extends Component {

  constructor(props) {
      super(props);
      this.props = props;
      this.props.moviesActions.getAll();
  }


  render() {

    const moviesStore = this.props.movies;

    return (
        <div>
            <h1>
                All movies
            </h1>

           <MoviesList movies = {moviesStore.content} />
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


export default connect(mapStateToProps, mapDispatchToProps)(Movies)