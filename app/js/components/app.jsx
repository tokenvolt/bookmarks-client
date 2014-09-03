var React           = require("react");
var Fluxxor         = require('fluxxor');
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Header          = require('./header.jsx');

var App = React.createClass({
  // mixins: [FluxMixin, StoreWatchMixin()],

  getDefaultProps: function() {
    return {
      name: 'React-Fluxxor Skeleton'
    }
  },

  render: function() {
    return (
      <div>
        <Header name={this.props.name} />
      </div>
    )
  }
});

module.exports = App;