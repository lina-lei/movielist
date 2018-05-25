import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: ''
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
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
      <div>Search a movie here
        <input value={this.state.searchTerms} onChange={this.onChange}/>
        <button onClick={this.search}>Search Movies</button>
      </div>
    )  
  }
}

export default Search;