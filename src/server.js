'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.get('/hello', (req, res) => {
  res.status(200).send('Hello worldeeeeeeeee');
});

function start() {
  app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
}

module.exports = { app, start };
