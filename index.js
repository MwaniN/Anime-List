const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;
const client = require('./db');
const models = require('./db/models.js')

app.use(express.json());
app.use(cors());



app.get('/anime/:mal_id', (req, res) => {

  models.getAnime(req.params).then((result) => {res.status(200).send(result.rows)})

})

app.get('/anime/', (req, res) => {

  models.getAllAnime().then((result) => {res.status(200).send(result.rows)})

})

app.post('/anime', (req, res) => {
models.addAnime(req.body).then(() => {res.status(201).send('successfully added anime')})

})








app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})