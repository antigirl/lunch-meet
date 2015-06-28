var React = require('react');
var Connection = require('./components/connection');
var Datas = require('./components/data');
require('../styles/app.scss');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Connection/>
        <Datas/>
      </div>
    );
  }
});

React.render(<App/>, document.body);
