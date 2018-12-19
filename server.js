const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const https = require('https')

const PORT = process.env.PORT || 3000
const distRoot = './dist'

app.use(bodyParser.json())
app.use(express.static(distRoot))

const LASTFM_API_KEY = process.env.LASTFM_API_KEY

function parseLatestTrack(lastfmData) {
  // todo: better validation (with typechecks?)
  if (!lastfmData || !lastfmData.recenttracks || !lastfmData.recenttracks.track || !lastfmData.recenttracks.track.length) {
    return {};
  }
  const track = lastfmData.recenttracks.track[0]
  return {
    artist: track.artist['#text'],
    name: track.name,
  }
}

app.get('/api/lastfm/latest/:username', (req, res) => {
  const username = req.params ? req.params.username : ''
  if (!username) {
    return res.json({ error: 'specify username' })
  }
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${LASTFM_API_KEY}&format=json`

  const lastfmRequest = https.get(url, resp => {
    let data = ''
    resp.on('data', (chunk) => {
      data += chunk
    })
    resp.on('end', () => {
      res.json(parseLatestTrack(JSON.parse(data)))
    })
  })

  lastfmRequest.on('error', err => {
    console.log(err)
    res.json({ error: err.message })
  })
})

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, distRoot, "index.html"))
})

app.listen(PORT, function() {
  console.log(`running on ${PORT}`)
})
