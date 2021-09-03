const express = require('express');
const cors = require('cors');
const PORT = 4000;
require('dotenv').config()
const SpotifyService = require('./service/spotifyService.js');



const app = express();
const spotify = new SpotifyService(process.env.clientId, process.env.clientSecret);

app.use(express.json);
app.use(cors({
    origin: '*'
}));

//get song by artist and track
app.get('/song/:artist/:title', (req, res) => {
    console.log('in endpoint to search for song by artist: ' + req.params.artist + ' and title of song:" ' + req.params.title);
    res.send(spotify.getSong(req.params.track, req.params.artist));
});

app.get('/hello', (req, res) => {
    console.log('hello');
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});



