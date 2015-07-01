var appDispatcher = require('../dispatcher/appDispatcher');
var appActions = require('../actions/appActions');
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
            case 'connect':
                fourSquareApi.connect();
                break;

            case 'isConnected':
                appStore.connected = true;
                appActions.getCurrentLocation();
                break;

            case 'location':
                appStore.location = payload.response;
                appActions.venueSearch();
                break;

            case 'venueSearch':
            console.log(appStore.data);
                appStore.data = payload.response;
                break;
        }

        appStore.emitChange();

        return true;

    })
});

module.exports = appStore;
