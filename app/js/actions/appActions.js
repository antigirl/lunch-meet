var appDispatcher = require('../dispatcher/appDispatcher');

module.exports = {
  getLocation: function() {
    appDispatcher.dispatch({
      type: 'get-location'
    });
  }
}
