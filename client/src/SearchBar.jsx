import React, { useState } from 'react';

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


  return <form method="post" onSubmit={handleSubmit} >
  <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="search-bar" className="search-bar" placeholder="Search for your Anime"/>
  <button type="submit">Search!</button>
  </form>
}