const pg = require('pg')
const config = require('../config.js');

const client = new pg.Client(config);