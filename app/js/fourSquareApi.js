module.exports = {
    connect: function() {
        window.location = GET_TOKEN_URL;
    },
    getAccessToken: function() {
        var accessToken = window.location.hash;
        if(accessToken) {
            return accessToken.replace('#access_token=', '');
        }
    },
    getCurrentLocation: function(callback) {
        navigator.geolocation.getCurrentPosition(function(position){
                callback({
                 lat: position.coords.latitude,
                 long: position.coords.longitude
             });
        }, function(error) {
                callback('error:' + error.message);
        }, {timeout:10000});
    },
    venueSearch: function() {
        //var venueSearch = 'https://api.foursquare.com/v2/venues/search?ll='+latlong+'&oauth_token='+accessToken+'&v=20150628';
    }
};

var CLIENT_ID = 'PANFWAX4IHWMHJSZ3NUOTGFJL523INIJWPIPLCFO0TL1R4HI';
var CLIENT_SECRET = 'RFPPUYUAJUVJWL5WNVZMQB2CPJ4FUFI2N1B4CLTBHYVOB0O3';
var REDIRECT_URI = 'http://localhost:8080';
var GET_TOKEN_URL = 'https://foursquare.com/oauth2/authenticate?client_id='+CLIENT_ID+'&response_type=token&redirect_uri='+REDIRECT_URI;
