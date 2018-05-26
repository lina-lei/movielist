import React from 'react';
import SearchResultsListItem from './SearchResultsListItem.jsx';

const SearchResultsList = ({results, handleClick}) => {
  return (<div>
    <h4>Search Results:</h4>
    {results.map(result => {
      return <SearchResultsListItem result={result} handleClick={handleClick}/>
    })}
  </div>)
}

export default SearchResultsList;
