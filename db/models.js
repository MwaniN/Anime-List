const client = require('./index.js');


// make async queries that will do the thing
// then make controllers that pass in the stuff
// in the future will need to add logic for the other tables and making multiple collections
// look into promise.all regarding async await -- wanting to add things in sequential order to different tables with one call
// can do a get request first to check if the mal_id exists instead of relying on SQL to check to avoid SERIAL auto-incrementing

module.exports.addAnime = async function (req, res) {

  // need to accomodate for single quotes in text

  let thingsToInsert = [
    req.mal_id,
    req.image_url,
    req.title,
    req.score,
    req.scored_by,
    req.animegenres,
    req.status,
    req.aired,
    req.animestudios,
    req.synopsis
  ]

  await client.query(`INSERT INTO anime (mal_id, image_url, title, score, scored_by, animegenres, status, aired, animestudios, synopsis)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`, thingsToInsert);

  // await client.query(`INSERT INTO anime (mal_id, image_url, title, score, scored_by, animegenres, status, aired, animestudios, synopsis)
  // VALUES ('${req.mal_id}', '${req.image_url}', '${req.title}', '${req.score}', '${req.scored_by}', '${req.animegenres}', '${req.status}', '${req.aired}',
  // '${req.animestudios}', '${req.synopsis}');`)


  return
}

module.exports.getAnime = async function (req, res) {

  let result = await client.query(`SELECT mal_id, image_url, title, score, scored_by, animegenres, status, aired, animestudios, synopsis FROM
  anime WHERE mal_id = '${req.mal_id}';`)

  return result
}

module.exports.getAllAnime = async function (req, res) {

  let result = await client.query(`SELECT mal_id, image_url, title, score, scored_by, animegenres, status, aired, animestudios, synopsis FROM
  anime;`)

  return result
}