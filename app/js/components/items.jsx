var React = require('react');
var appStore = require('../stores/appStore.js')
var appActions = require('../actions/appActions');

var Items = React.createClass({
  getInitialState: function() {
    return {
      location: 'waiting'
    };
  },
  componentWillMount:function(){
    var _this = this;
    //set up listener before render function
    //any time change is emitted, make sure to update state
    //updating state will re-render then
    appStore.addChangeListener( function() {
      _this.setState({location: appStore.calculatedLocation()});
    });
  },
  render: function() {
    return (<div>
     fetching location.... {this.state.location}
    </div>
    );
  }
});

module.exports = Items;
