import React, { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard.jsx';
import axios from 'axios'

export default function ResultList ({ queryString }) {

  const [resultList, setResultList] = useState('');

  useEffect( () => {
    axios.get(`https://api.jikan.moe/v4/anime?q=${queryString}`).then(
      (results) => {
        setResultList(results.data.data)
      }
    )

  }, [queryString])

  // if (resultList.length > 0) {
  //   console.log(resultList)
  // }

  return <div className="result-list">
    <div className="results-for"> Results for {queryString}</div>
    {function (){
      if (resultList.length > 0) {
        let renderResults = resultList.map(
          (result) => {

              function titleName (){
                if (result.title_english){
                  return result.title_english;
                } else {
                  return result.title;
                }
              }
                function animeGenres (){
                  let genres = result.genres.map(
                    (genre) => {
                      return genre.name
                    }
                  )
                  return genres.join(', ');
                }

                  function studios (){
                    let studios = result.studios.map(
                      (studio) => {
                        return studio.name
                      }
                    )
                    return studios.join(', ');
                  }

              // conjoin data to pass into the card itself
              let title = titleName();
              let animegenres = animeGenres();
              let animestudios = studios();

              if (!animegenres.includes("Hentai")) {
                return <AnimeCard key={result.mal_id} mal_id={result.mal_id} title={title} image_url={result.images.jpg.image_url} animegenres={animegenres} aired={result.aired.string}
            animestudios={animestudios} score={result.score} scored_by={result.scored_by} status={result.status} synopsis={result.synopsis}/>
              }
          }
        )
        return renderResults;
      }
    }()}
  </div>
}