const client = require('./index.js');


// make async queries that will do the thing
// then make controllers that pass in the stuff
// in the future will need to add logic for the other tables and making multiple collections
// look into promise.all regarding async await -- wanting to add things in sequential order to different tables with one call

module.exports.addAnime = async function (req, res) {

  let postAnime = await client.query(`INSERT INTO anime (mal_id, image_url, title, score, scored_by, animegenres, status, aired, animestudios, synopsis)
   VALUES (req.mal_id, req.image_url, req.title, req.score, req.scored_by, req.animegenres, req.status, req.aired, req.animestudios, req.synopsis)
   ON CONFLICT (mal_id) DO NOTHING;`)

   return postAnime
}