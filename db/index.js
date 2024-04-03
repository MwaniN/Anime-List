const pg = require('pg')
const config = require('../config.js');

const client = new pg.Client(config);

var connectIt = async function () {
  await client.connect();
  return "db is connected";
}

connectIt().then((data) => {console.log(data)});

async function currDBTest () {
  let result = await client.query('SELECT current_database();')
  return result;
}

// anime table should store enough information to be able to render the anime data without querying myanimelist again

currDBTest().then((data) => {console.log(data.rows[0])})