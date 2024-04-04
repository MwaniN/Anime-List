import React, { useState } from 'react';
import ResultList from './ResultList.jsx';

// future enhancements - add loading animation while querying
// future enhancements - display a message when there's no result

export default function SearchBar () {

  const [searchInput, setSearchInput] = useState('');
  const [queryString, setQueryString] = useState('');

  function handleSubmit (e){

    setQueryString(searchInput);

    console.log(queryString, " this is query string");

    console.log(searchInput, " this is search input");

    setSearchInput('');
    e.preventDefault();

  }


  return <div><form method="post" onSubmit={handleSubmit} >
  <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="search-bar" className="search-bar" placeholder="Search for your Anime"/>
  <button type="submit">Search!</button>
  </form>
  {function (){
    if (queryString.length > 0) {
      return <ResultList queryString={queryString} />
    }
    return
  }()}
  </div>
}