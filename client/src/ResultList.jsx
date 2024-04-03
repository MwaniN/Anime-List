import React, { useState } from 'react';
import AnimeCard from './AnimeCard.jsx';

export default function ResultList ({ queryString }) {

  return <div className="result-list">
    Results for {queryString}
    <AnimeCard />
  </div>
}