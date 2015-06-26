var React = require('react');
var appStore = require('../stores/appStore.js')

var Items = React.createClass({
  getInitialState: function() {
    return {
      items: appStore.getItems()
    };
  },
  componentWillMount:function(){
    var _this = this;
    //set up listener before render function
    //any time change is emitted, make sure to update state
    //updating state will re-render then
    appStore.addChangeListener( function() {
      _this.setState(appStore.getItems())
    });
  },
  render: function() {
    return (
      <ul>
        {this.state.items.map(function (item) {
            return <li>{item}</li>
        })}
      </ul>
    );
  }
});

module.exports = Items;
