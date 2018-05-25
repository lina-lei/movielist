import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
    this.search = this.search.bind(this);
  }

  search(searchMovie) {
    console.log('now searching:', searchMovie);
    //axios get request that will set the state to the searched movies
  }

  render() {
    return (
      <div>
        <h1>My Movies To Watch</h1>
        <MovieList movies={this.state.movies}/>
        <Search onSearch={this.search}/>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));
