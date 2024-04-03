import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';

// will import the search bar and also show the search results when they're generated
//              search results consists of a list with individual cards (use the id for the key in the list)
// Create state for the list up here - API call will be handled up here - (pass down the function to the search bar) and pass down the results to the list through the state


export default function MainPage () {


  return <div className="main-page">
    <SearchBar />
  </div>
}