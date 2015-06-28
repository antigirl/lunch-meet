var React = require('react');
var appStore = require('../stores/appStore.js');
var appActions = require('../actions/appActions');

var connection = React.createClass({
  getInitialState: function() {
    return {
      connected: false,
      location: null
    };
  },
  componentWillMount:function(){
    var _this = this;
    appStore.addChangeListener( function() {
        _this.setState({connected: appStore.getAccessToken(), location:appStore.location});
    });
  },
  connectFourSquare: function() {
      appActions.connect();
  },
  render: function() {
    return (<div>
        {this.state.connected ? <div>{this.state.location ? <div> you are at {this.state.location}</div> : 'fetching location...' }</div> : <img src="app/images/foursquare.png" width="150" height="23" onClick={this.connectFourSquare}/> }

    </div>
    );
  }
});

module.exports = connection;
