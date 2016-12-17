var path = require('path')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 3000;
var distRoot = './dist'

app.use(bodyParser.json())
app.use(express.static(distRoot))

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

app.post("/api/scrobble", (req, res) => {
  console.log(req.body)

  res.json({});

})

app.get("/api/scrobble", (req, res) => {
  console.log(req.query)

  var song = createSong(req.query.track, req.query.artist)

  songs.push(song)

  res.json(song);
})

app.get("/api/lights", (req, res) => {
  res.json({
    user: lights.user,
    lights: lights.state
  });
})

app.post("/api/lights", (req, res) => {
  var user = req.body.user;
  var state = req.body.state;

  console.log(req.body)

  lights = {
    user: user,
    state: state
  }

  res.send();
})

app.get("/api/list", (req, res) => {
  res.json(songs);
})

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, distRoot, "index.html"))
})

app.listen(PORT, function() {
  console.log(`running on ${PORT}`)
})
