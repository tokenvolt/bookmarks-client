/** @jsx React.DOM */

var React           = require("react");
var Fluxxor         = require('fluxxor');
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Header          = require('./header.jsx');
var Footer          = require('./footer.jsx');
var Bookmarklet     = require('./bookmarklet.jsx');

var App = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("BookmarkStore")],

  getDefaultProps: function() {
    return {
      headerName: 'Bookmarks'
    }
  },

  getStateFromFlux: function() {
    var flux = this.getFlux();

    return {
      bookmarks: flux.store("BookmarkStore").getState()
    };
  },

  componentDidMount: function() {
    this.getFlux().actions.bookmarks.fetch();
  },

  render: function() {
    return (
      <div>
        <Header name={this.props.headerName} />
        {this.props.activeRouteHandler({bookmarks: this.state.bookmarks})}
      </div>
    )
  }
});

module.exports = App;