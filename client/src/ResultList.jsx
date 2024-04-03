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

  if (resultList.length > 0) {
    console.log(resultList)
  }

  return <div className="result-list">
    Results for {queryString}
    {function (){
      if (resultList.length > 0) {
        let renderResults = resultList.map(
          (result) => {
            return <AnimeCard result={result} key={result.mal_id} />
          }
        )
        return renderResults;
      }
    }()}
  </div>
}