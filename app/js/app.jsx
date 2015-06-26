var React = require('react');
var Items = require('./components/items');
var Controls = require('./components/itemControls');
require('../styles/app.scss')

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Controls/>
        <Items/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
