import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './components/MovieList.jsx';
import SearchResultsList from './components/SearchResultsList.jsx';
import Search from './components/Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchResults: []
    };
    this.search = this.search.bind(this);
    this.fetchMovieList = this.fetchMovieList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchMovieList();
  }
 
  search(searchMovie) {
    console.log('now searching:', searchMovie);
    // console.log('SEARCH RESULTS APP', this.state.searchResults);
    axios.get('/searchMovies')
      .then(results => {
        this.setState({
          searchResults: results.data
        });
      })
      .catch((err) => console.log('fetchSearchResults not working', err));
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

  // fetchSearchResults() {
  //   axios.get('/searchMovies')
  //     .then(results => {
  //       this.setState({
  //         searchResults: results
  //       });
  //     })
  //     .catch((err) => console.log('fetchSearchResults not working', err));
  // }
  
  handleClick(item) {
    console.log('clicked! this is the search result you clicked:', item);
    //when search result is clicked on, add it to the DB to-watch list
    axios.post('/saveMovie', {
      item: item
    }).then((data) => console.log('handleClick is working', data))
      .catch((err) => console.log('handleClick err', err))
  }

  render() {
    return (
      <div>
        <h1>My Movies To Watch</h1>
        <MovieList movies={this.state.movies}/>
        <Search onSearch={this.search}/>
        <SearchResultsList results={this.state.searchResults} handleClick={this.handleClick}/>
      </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));
