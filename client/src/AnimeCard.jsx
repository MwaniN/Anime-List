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
// summary also

// If there's no English title use the Japanese one, change the logic
// add a toggle for NSFW results?

// future enhancement - make the number of votes be formatted
// future enhancement - limit text overflow for synopsis
// future enhancement - make images load first before rendering the div

// on handleSubmit -> use axios to add this particular anime's data to the corresponding collection in the DB
// for aired and image_url change the way the props are passed in for them so that the card
// can be easily reusable when the anime is called from the DB

export default function AnimeCard ({ result }) {

  let animeGenres = '';
  let animeStudios = '';
  let title = '';

  function handleSubmit(e){
    e.preventDefault();
  }

  return <div className="anime-card">
    <img className="image" src={result.images.jpg.image_url} alt={`Image of the ${result.title_english} anime`} />
    <span className="title">Title: {
      function(){
        if (result.title_english){
          title = result.title_english
          return title;
        } else {
          title = result.title
          return title;
        }
      }()
    }</span>
    <span className="score">Average Score: {result.score}</span>
    <span className="votes">Votes: {result.scored_by}</span>
    <span className="genres">Genres: {
      function (){
        let genres = result.genres.map(
          (genre) => {
            return genre.name
          }
        )
        animeGenres = genres.join(', ')
        return animeGenres;
      }()
    }</span>
    <span className="status">Status: {result.status}</span>
    <span className="year">Aired: {result.aired.string}</span>
    <span className="studios">Studio: {
      function (){
        let studios = result.studios.map(
          (studio) => {
            return studio.name
          }
        )
        animeStudios = studios.join(', ');
        return animeStudios;
      }()
    }</span>
    <div className="synopsis">Synopsis: {result.synopsis}</div>
    <form method="post" onSubmit={handleSubmit}>
      <button type="submit">Add to Collection</button>
    </form>
  </div>
}