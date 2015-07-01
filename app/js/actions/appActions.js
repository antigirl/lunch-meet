var appDispatcher = require('../dispatcher/appDispatcher');
var fourSquareApi = require('../utils/fourSquareApi');

module.exports = {
    connectFourSquare: function() {
        appDispatcher.dispatch({
            type: 'connect'
        });
    },
    isConnected: function() {
        fourSquareApi.isConnected();
    },

    getCurrentLocation: function() {
        fourSquareApi.getCurrentLocation();
    },
    venueSearch: function() {
        fourSquareApi.venueSearch();
    }
};
