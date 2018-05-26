import React from 'react';

const SearchResultsListItem = ({result, handleClick}) => (
  <div onClick={(event) => {
      event.preventDefault();
      event.stopPropagation();
      handleClick(result);
    }}>
    {result.title}
  </div>
);

export default SearchResultsListItem;