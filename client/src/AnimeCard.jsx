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
// future enhancement - make it so they can't add this anime to the current collection, only if you're in that collection
// (for when there are multiple collections available)
// future enhancement - when on the collection page change the "Add to Collection" button to "Remove from Collection"
// and have different functionality for that

// on handleSubmit -> use axios to add this particular anime's data to the corresponding collection in the DB

export default function AnimeCard ({ title, image_url, animegenres, aired, animestudios, score, scored_by, status, synopsis, mal_id, currPage }) {

  const [canAdd, setCanAdd] = useState(true)

  function handleSubmit(e){
    e.preventDefault();

    // creating the entry in the anime table will happen if it does not exist already
    // that can be handled server side, along with putting the entry in the anime_collections table

    axios.post("http://localhost:3000/anime", {
      mal_id: mal_id,
      image_url: image_url,
      title: title,
      score: score,
      scored_by: scored_by,
      animegenres: animegenres,
      status: status,
      aired: aired,
      animestudios: animestudios,
      synopsis: synopsis
    }).then(() => {
      setCanAdd(false)
    })

    // insert axios call here to the db - include the full http:// address
  }

  return <div className="anime-card">
    <span className="title">{title}</span>
    <div className="img-container">
      <img className="image" src={image_url} alt={`Image of the ${title} anime`} />
      </div>
    <span className="score">Average Score: {score}</span>
    <span className="votes">User Votes: {scored_by}</span>
    <span className="genres">Genres: {animegenres}</span>
    <span className="status">Status: {status}</span>
    <span className="aired">Aired: {aired}</span>
    <span className="studios">Studio: {animestudios}</span>
    <div className="synopsis-container">
    <div className="synopsis">{synopsis}</div>
    </div>
    <form method="post" onSubmit={handleSubmit}>
      <button type="submit">{function(){
        if(canAdd){
          return "Add to Collection"
        } else {
            return "Added to Collection"
        }
      }()}</button>
    </form>
  </div>
}