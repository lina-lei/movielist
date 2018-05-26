import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => (
  <div>
    <h4>My Movie List</h4>
    {props.movies.map(movie => {
      return <MovieListItem movie={movie}/>
    })}
  </div>
)

export default MovieList;