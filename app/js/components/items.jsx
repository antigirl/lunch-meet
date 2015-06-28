var React = require('react');
var appStore = require('../stores/appStore.js');
var appActions = require('../actions/appActions');

var Items = React.createClass({
  getInitialState: function() {
    return {
      connected: false,
      location: null
    };
  },
  componentWillMount:function(){
    var _this = this;
    //set up listener before render function
    //any time change is emitted, make sure to update state
    //updating state will re-render then
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

module.exports = Items;
