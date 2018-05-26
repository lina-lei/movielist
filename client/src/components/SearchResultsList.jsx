import React from 'react';
import SearchResultsListItem from './SearchResultsListItem.jsx';

const SearchResultsList = ({results, handleClick}) => {
  return (<div>
      {results.map(result => {
        return <SearchResultsListItem result={result} handleClick={handleClick}/>
      })}
    </div>)
}

export default SearchResultsList;
