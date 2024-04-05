import React, { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard.jsx';
import axios from 'axios';


// Left side is the list of collections
// Right side shows the current collection and anime cards for them
// Could also have the collections be in a dropdown instead - might avoid needing to resize the cards

// Start with only having one collection, so no need for the left side showing the collection
// future enhancement - allow "delete" to remove a card from the collection

export default function CollectionPage ({ currPage }) {

  const [animeList, setAnimeList] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/anime/').then((results) => {
      setAnimeList(results.data)
    })
  }, [])

  return <div className="collection-list">
    Your Collection
    {function(){
      if (animeList){
        let currList = animeList.map((result) => {
          return <AnimeCard key={result.mal_id} mal_id={result.mal_id} title={result.title} image_url={result.image_url} animegenres={result.animegenres} aired={result.aired}
            animestudios={result.animestudios} score={result.score} scored_by={result.scored_by} status={result.status} synopsis={result.synopsis} currPage={currPage}/>
        })
        return currList;
      }
    }()}
  </div>
}