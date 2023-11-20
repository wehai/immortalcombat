const express = require('express');
const serveIndex = require('serve-index');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.post('/data/set/:game', (req, res) => {
  const game = req.params.game;
  const path = `data/${game}.json`;

  fs.writeFile(path, JSON.stringify(req.body), 'utf8', (err) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.json(req.body)
    }
  });
});

app.get('/data/get/:game', (req, res) => {
  const game = req.params.game;
  const path = `data/${game}.json`;

  let data = {};

  if (fs.existsSync(path)) {
    const json = fs.readFileSync(path, 'utf-8')
    data = JSON.parse(json);
  }

  res.json(data)
});

app.use('/', express.static('public'), serveIndex('public'))