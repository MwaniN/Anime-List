import React, { useState } from 'react';
import axios from 'axios';

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
// future enhancement - use object destructuring for everything

// on handleSubmit -> use axios to add this particular anime's data to the corresponding collection in the DB
// for aired and image_url change the way the props are passed in for them so that the card
// can be easily reusable when the anime is called from the DB - or just assign them to a variable before making the call.

export default function AnimeCard ({ title, image_url, animegenres, aired, animestudios, score, scored_by, status, synopsis }) {

  function handleSubmit(e){
    e.preventDefault();

    // insert axios call here to the db - include the full http:// address
  }

  return <div className="anime-card">
    <img className="image" src={image_url} alt={`Image of the ${title} anime`} />
    <span className="title">Title: {title}</span>
    <span className="score">Average Score: {score}</span>
    <span className="votes">Votes: {scored_by}</span>
    <span className="genres">Genres: {animegenres}</span>
    <span className="status">Status: {status}</span>
    <span className="aired">Aired: {aired}</span>
    <span className="studios">Studio: {animestudios}</span>
    <div className="synopsis">Synopsis: {synopsis}</div>
    <form method="post" onSubmit={handleSubmit}>
      <button type="submit">Add to Collection</button>
    </form>
  </div>
}