import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: ''
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
    this.genres = [
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 14,
        "name": "Fantasy"
      },
      {
        "id": 36,
        "name": "History"
      },
      {
        "id": 27,
        "name": "Horror"
      },
      {
        "id": 10402,
        "name": "Music"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Science Fiction"
      },
      {
        "id": 10770,
        "name": "TV Movie"
      },
      {
        "id": 53,
        "name": "Thriller"
      },
      {
        "id": 10752,
        "name": "War"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ];
    // this.genresToChooseFrom = this.genres.map(function(ele) {
    //   return (`${ele.name}: ${ele.id}`);
    // });

  }

  onChange(e) {
    this.setState({
      searchTerms: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.searchTerms);
  }

  render() {
    return (
      <div>
        <h4>Search Genres:</h4>
        <ul>{this.genres.map(ele => <li>{ele.name}: {ele.id}</li>)}</ul>
        
        <div>
          <input value={this.state.searchTerms} onChange={this.onChange}/>
          <button onClick={this.search}>Search Genre</button>
        </div>
      </div>
    )  
  }
}

export default Search;



