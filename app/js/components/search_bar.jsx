/** @jsx React.DOM */

var React = require("react");
var Fluxxor = require('fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var SearchBar = React.createClass({
  mixins: [FluxChildMixin],

  getInitialState: function() {
    return {
      query: ''
    };
  },

  render: function() {
    return (
      <div className="search-bar">
        <form>
          <input className="form-control"
                 type="text"
                 placeholder="Search for bookmarks..."
                 value={this.state.query}
                 onChange={this.performSearch} />
        </form>
      </div>
    )
  },

  performSearch: function(event) {
    this.setState({query: event.target.value}, function() {
      this.getFlux().actions.searchBookmark(this.state.query);
    });
  }
});

module.exports = SearchBar;