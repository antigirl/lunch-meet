var appDispatcher = require('../dispatcher/appDispatcher');
var fourSquareApi = require('../utils/fourSquareApi');
var constants = require('./constants');
var Promise = require('Promise');

module.exports = {
    connectFourSquare: function() {
        appDispatcher.dispatch({
            type: constants.CONNECT
        });
    },
    isConnected: function() {
        fourSquareApi.isConnected().then(function() {
            appDispatcher.dispatch({
                type: constants.IS_CONNECTED
            });
        });
    },
    getCurrentLocation: function() {
        fourSquareApi.getCurrentLocation().then(function(location) {
            appDispatcher.dispatch({
                type: constants.LOCATION,
                response: location
            });
        }).catch(function() {
            appDispatcher.dispatch({
                type: constants.ERROR,
                response: errors
            });
        });
    },
    venueSearch: function() {
        fourSquareApi.venueSearch().then(function(body) {
            appDispatcher.dispatch({
                type: constants.VENUE_SEARCH,
                response: JSON.parse(body)
            });
        });
    }
};
