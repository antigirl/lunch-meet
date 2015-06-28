var React = require('react');
var appStore = require('../stores/appStore.js');

var Datas = React.createClass({
    getInitialState: function() {
      return {
        data: null
      };
    },
    componentWillMount:function(){
      var _this = this;
      appStore.addChangeListener( function() {
          _this.setState({data: appStore.data});
      });
    },
  render: function() {
    return (
      <div>
          {this.state.data ?
          <table>
              <tr className="city"><td colspan="4">{this.state.data.response.headerFullLocation}</td></tr>
              <tr clasName="heading">
                  <td>Venue</td>
                  <td>Price</td>
                  <td>Rating</td>
                  <td>URL</td>
                  <td>image</td>
              </tr>
                {this.state.data.response.groups[0].items.map(function(item) {
                    return (<tr>
                        <td><img src={item.venue.photos.groups[0].items[0].prefix + '100x100' + item.venue.photos.groups[0].items[0].suffix}/></td>
                        <td>{item.venue.name}</td>
                        <td>{item.venue.price.message}</td>
                        <td>{item.venue.rating}</td>
                        <td>{item.venue.url}</td>
                    </tr>);
                })}
          </table> : null
          }
      </div>
    );
  }
});

module.exports = Datas;
