import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import HorrorList from './components/HorrorList.jsx';
import Search from './components/Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      horror: []
    };
    this.search = this.search.bind(this);
    this.fetchMovieList = this.fetchMovieList.bind(this);
  }

  componentDidMount() {
    this.fetchMovieList();
  }
 
  search(searchMovie) {
    console.log('now searching:', searchMovie);
    //axios get request that will set the state to the searched movies
  }
  
  fetchMovieList() {
    axios.get('/retrieveMovies')
      .then(data => {
        // console.log('fetchmovielist:', data);
        this.setState({
          movies: data.data
        });
      })
      .catch((err) => console.log('fetchMovieList not working', err));
  }

  fetchHorror() {
    axios.get()
      .then()
      .catch();
  }

  render() {
    return (
      <div>
        <h1>My Movies To Watch</h1>
        <MovieList movies={this.state.movies}/>
        <Search onSearch={this.search}/>
        <HorrorList horror={this.state.horror}/>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));
