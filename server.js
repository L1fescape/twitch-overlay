var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() )

var PORT = process.env.PORT || 3000;

var songs = [];
var lights = {
  user: "",
  state: "off"
}

function createSong(title, artist) {
  return Object.assign({}, {
    title,
    artist
  })
}

app.post("/scrobble", (req, res) => {
  console.log(req.body)

  res.json({});

})

app.get("/scrobble", (req, res) => {
  console.log(req.query)

  var song = createSong(req.query.track, req.query.artist)

  songs.push(song)

  res.json(song);
})

app.get("/lights", (req, res) => {
  res.json({
    user: lights.user,
    lights: lights.state
  });
})

app.post("/lights", (req, res) => {
  var user = req.body.user;
  var state = req.body.state;

  console.log(req.body)

  lights = {
    user: user,
    state: state
  }

  res.send();
})

app.get("/v1/list", (req, res) => {
  res.json(songs);
})

app.listen(PORT, function() {
  console.log(`running on ${PORT}`)
})
