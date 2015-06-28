var appDispatcher = require('../dispatcher/appDispatcher');
var appActions = require('../actions/appActions');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var fourSquareApi = require('../fourSquareApi');
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

    connect: function() {
        fourSquareApi.connect();
    },

    getAccessToken: function() {
        return fourSquareApi.getAccessToken();
    },

    isConnected: function() {
        if (this.getAccessToken()) {
            setTimeout(function() {
                appStore.emitChange();
            }, 10);
        }
    },

    getCurrentLocation: function() {
        if (this.getAccessToken()) {
            fourSquareApi.getCurrentLocation(function(resp) {
                appStore.location = resp;
                appStore.emitChange();
            });
        }
    },

    location: null,

    dispatcherIndex: appDispatcher.register(function(payload) {
        switch (payload.type) {
            case 'connect':
                appStore.connect();
                break;
        }

        appStore.emitChange();

        return true;

    })
});

(function init() {
    appStore.isConnected();
    appStore.getCurrentLocation();
})();


module.exports = appStore;
