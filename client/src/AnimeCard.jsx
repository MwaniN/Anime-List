import React, { useState } from 'react';


// Use these params
// loop through genres array and for each object take name
// mal_id = key
// score
// scored_by
// status
// title_english
// title
// images.jpg.image_url




export default function AnimeCard ({ result }) {

  // console.log(result, " result from inside the anime card!")

  return <div anime-card>
    <img className="image" src={result.images.jpg.image_url} alt={`Image of the ${result.title_english} anime`} />
    <span className="title">Title: {result.title_english}</span>
  </div>
}