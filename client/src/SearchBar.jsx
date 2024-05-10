import React, { useState } from 'react';
import ResultList from './ResultList.jsx';

// future enhancements - add loading animation while querying
// future enhancements - display a message when there's no result

export default function SearchBar () {

  const [searchInput, setSearchInput] = useState('');
  const [queryString, setQueryString] = useState('');

  function handleSubmit (e){

    setQueryString(searchInput);

    // console.log(queryString, " this is query string");

    // console.log(searchInput, " this is search input");

    setSearchInput('');
    e.preventDefault();

  }


  return <div>
    <div className="form-container">
    <form className="search-form" method="post" onSubmit={handleSubmit} >
  <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="search-bar" className="search-bar" placeholder="search for anime"/>
  <button className="search-button" type="submit">Search!</button>
  </form>
  </div>
  {function (){
    if (queryString.length > 0) {
      return <ResultList queryString={queryString} />
    }
    return
  }()}
  </div>
}