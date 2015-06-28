var appDispatcher = require('../dispatcher/appDispatcher');

module.exports = {
  connect: function() {
    appDispatcher.dispatch({
      type: 'connect'
    });
  }
};
