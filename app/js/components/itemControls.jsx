var React = require('react');
var appActions = require('../actions/appActions');

var itemControls = React.createClass({
  addItem: function() {
    var item = this.refs.item.getDOMNode().value;
    appActions.addItem(item);
  },
  removeItem: function() {
    var item = this.refs.item.getDOMNode().value;
    appActions.removeItem(item);
  },
  render: function() {
    return (
      <div>
        <input ref="item" type="text" placeholder="item"></input>
        <button onClick={this.addItem}>add item</button>
        <button onClick={this.removeItem}>remove item</button>
      </div>
    );
  }
});

module.exports = itemControls;
