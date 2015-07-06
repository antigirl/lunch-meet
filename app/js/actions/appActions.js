var appDispatcher = require('../dispatcher/appDispatcher');
var fourSquareApi = require('../utils/fourSquareApi');
var Promise = require('Promise');

module.exports = {
    connectFourSquare: function() {
        appDispatcher.dispatch({
            type: 'connect'
        });
    },
    isConnected: function() {
        fourSquareApi.isConnected().then(function() {
            appDispatcher.dispatch({
                type: 'isConnected'
            });
        });
    },
    getCurrentLocation: function() {
        fourSquareApi.getCurrentLocation().then(function(location) {
            appDispatcher.dispatch({
                type: 'location',
                response: location
            });
        }).catch(function() {
            appDispatcher.dispatch({
                type: 'error',
                response: errors
            });
        });
    },
    venueSearch: function() {
        fourSquareApi.venueSearch().then(function(body) {
            appDispatcher.dispatch({
                type: 'venueSearch',
                response: JSON.parse(body)
            });
        });
    }
};
