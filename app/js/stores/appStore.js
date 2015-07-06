var appDispatcher = require('../dispatcher/appDispatcher');
var appActions = require('../actions/appActions');
var constants = require('../actions/constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var fourSquareApi = require('../utils/fourSquareApi');
var CHANGE_EVENT = 'change';

var appStore = assign(EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    data: null,
    connected: null,
    location: null,

    dispatcherIndex: appDispatcher.register(function(payload) {
        switch (payload.type) {
            case constants.CONNECT:
                fourSquareApi.connect();
                break;

            case constants.IS_CONNECTED:
                appStore.connected = true;
                appActions.getCurrentLocation();
                break;

            case constants.LOCATION:
                appStore.location = payload.response;
                appActions.venueSearch();
                break;

            case constants.VENUE_SEARCH:
                appStore.data = payload.response;
                break;
        }

        appStore.emitChange();

        return true;

    })
});

module.exports = appStore;
