var React = require('react');

var Venue = React.createClass({
    render: function() {
        return (
            <tr>
                <td><img src={this.props.img}/></td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.rating}</td>
                <td>{this.props.url}</td>
            </tr>

        );
    }
});

module.exports = Venue;
