/** @jsx React.DOM */

var React           = require("react");
var Fluxxor         = require('fluxxor');
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Header          = require('./header.jsx');
var BookmarksList   = require('./bookmarks_list.jsx');
var SearchBar       = require('./search_bar.jsx');

var App = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("BookmarkStore")],

  getDefaultProps: function() {
    return {
      name: 'Bookmarks'
    }
  },

  getStateFromFlux: function() {
    var flux = this.getFlux();

    return {
      bookmarks: flux.store("BookmarkStore").getState()
    };
  },

  render: function() {
    return (
      <div>
        <Header name={this.props.name} />
        <SearchBar />
        <BookmarksList bookmarks={this.state.bookmarks}/>
      </div>
    )
  }
});

module.exports = App;