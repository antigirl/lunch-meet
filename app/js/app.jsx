var React = require('react');
var Connection = require('./components/Connection');
var VenueList = require('./components/VenueList');
require('../styles/app.scss');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Connection/>
        <VenueList/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
