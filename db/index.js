const pg = require('pg')
const config = require('../config.js');

const client = new pg.Client(config);

var connectIt = async function () {
  await client.connect();
  return `db is connected on ${config.port}`;
}

connectIt().then((data) => {console.log(data)});

async function currDBTest () {
  let result = await client.query('SELECT current_database();')
  return result;
}

// anime table should store enough information to be able to render the anime data without querying myanimelist again

currDBTest().then((data) => {console.log(data.rows[0])})

// create queries for the three tables

async function CreateTables(){
  await client.query(`CREATE TABLE IF NOT EXISTS anime (
    id SERIAL PRIMARY KEY,
    mal_id INT,
    image_url TEXT,
    title VARCHAR(400),
    score DECIMAL,
    scored_by INT,
    animeGenres VARCHAR(200),
    status VARCHAR(40),
    aired VARCHAR(40),
    animeStudios VARCHAR(400),
    synopsis TEXT
    );`)

  await client.query(`CREATE TABLE IF NOT EXISTS collections (
    id SERIAL PRIMARY KEY,
    collection_name VARCHAR(400),
    created_by VARCHAR(60)
  );`)

  await client.query(`CREATE TABLE IF NOT EXISTS collections_anime (
    id SERIAL PRIMARY KEY,
    anime_id INT references anime(id),
    collection_id INT references collections(id)
  );`)
}

CreateTables().then(() => {console.log(`Tables successfully created or already exist`)})

module.exports = client;