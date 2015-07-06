var appDispatcher = require('../dispatcher/appDispatcher');
var request = require('browser-request');
var stub = require('./stub.json');
var Promise = require('Promise');

module.exports = {

    location: null,
    accessToken: null,

    connect: function() {
        window.location = GET_TOKEN_URL;
    },

    isConnected: function() {
        var accessToken = window.location.hash;
        if (accessToken) {
            this.accessToken = accessToken.replace('#access_token=', '');
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getCurrentLocation: function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var location = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                };

                _this.location = location;
                resolve(location);

            }, function(error) {
                var errors = 'error:' + error.message;
                reject(errors);

            }, {
                timeout: 10000
            });
        });
    },
    venueSearch: function() {
        var venueSearch = 'https://api.foursquare.com/v2/venues/explore?ll=' + this.location.lat + ',' + this.location.long + '&oauth_token=' + this.accessToken + '&v=20150628&section=food&venuePhotos=1&limit=10';
        return new Promise(function(resolve, reject) {
            request(venueSearch, function(err, response, body) {
                if (!err) {
                    resolve(body);
                }
            });
        });

        //cb(stub);
    }
};

var CLIENT_ID = 'PANFWAX4IHWMHJSZ3NUOTGFJL523INIJWPIPLCFO0TL1R4HI';
var CLIENT_SECRET = 'RFPPUYUAJUVJWL5WNVZMQB2CPJ4FUFI2N1B4CLTBHYVOB0O3';
var REDIRECT_URI = 'http://localhost:8080';
var GET_TOKEN_URL = 'https://foursquare.com/oauth2/authenticate?client_id=' + CLIENT_ID + '&response_type=token&redirect_uri=' + REDIRECT_URI;
