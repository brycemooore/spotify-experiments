let SpotifyWebApi = require('spotify-web-api-node');

class SpotifyService {

    #clientId;
    #clientSecret;
    #spoitfyApi;

    constuctor(clientId, clientSecret){
        this._clientId = clientId;
        this._clientSecret = clientSecret;
        this._spotifyApi = new SpotifyWebApi(this.clientId, this.clientSecret)
        getAccessToken();
    }

    getAccessToken = () => {
        this._spotifyApi.clientCredentialsGrant().then(
            function(data) {
              console.log('The access token is ' + data.body['access_token']);
              spotifyApi.setAccessToken(data.body['access_token']);
            },
            function(err) {
              console.log('Something went wrong!', err);
            }
          );
    }

    getSong = (track, artist) => {
        return this._spotifyApi.searchTracks('track:' + track + ' artist:' + artist)
        .then(function(data) {
          console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', data.body);
        }, function(err) {
          console.log('Something went wrong!', err);
        });
    }

    getAudioFeatures = (id) => {
        return this._spotifyApi.getAudioFeaturesForTrack(id)
        .then(function(data) {
            console.log(data.body);
        }, function(err) {
            done(err);
         });
    }

    getAudioAnalysis = (id) => {
        return this._spotifyApi.getAudioAnalysisForTrack(id)
        .then(function(data) {
            console.log(data.body);
        }, function(err) {
            done(err);
        });
    }

}

module.exports = SpotifyService