/** @jsx React.DOM */

var React = require("react");
var Router = require('react-router');
var Fluxxor = require('fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var SearchBar = React.createClass({
  mixins: [FluxChildMixin],

  getDefaultProps: function() {
    return {
      placeholder: "Search for bookmarks..."
    }
  },

  getInitialState: function() {
    return {
      query: this.props.query ? decodeURIComponent(this.props.query) : ''
    };
  },

  componentDidMount: function() {
    this.refs.searchInput.getDOMNode().focus();
    if (this.state.query) this.performSearch();
  },

  componentWillReceiveProps: function(nextProps) {
    var currentQuery = this.props.query;
    var updatedQuery = nextProps.query;

    if (updatedQuery == currentQuery) return;

    if (updatedQuery != null && updatedQuery != undefined) {
      var updatedQuery = decodeURIComponent(updatedQuery);
    }

    this.setState({query: updatedQuery}, function() {
      this.performSearch();
    });
  },

  render: function() {
    return (
      <div className="search-bar">
        <form>
          <input className="form-control"
                 type="text"
                 placeholder={this.props.placeholder}
                 value={this.state.query}
                 ref="searchInput"
                 onChange={this.onChange} />
        </form>
      </div>
    )
  },

  onChange: function(event) {
    var currentQuery = encodeURIComponent(event.target.value);

    if (!currentQuery) {
      Router.transitionTo('/');
    } else {
      Router.transitionTo('search', {searchQuery: currentQuery});
    };
  },

  performSearch: function(query) {
    this.getFlux().actions.bookmarks.search(this.state.query);
  }
});

module.exports = SearchBar;