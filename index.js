const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());



app.get('/anime', (req, res) => {

  res.status(200).send("Here's an anime");
})









app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})