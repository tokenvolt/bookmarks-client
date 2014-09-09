/** @jsx React.DOM */

var React         = require("react");
var SearchBar     = require('./search_bar.jsx');
var BookmarksList = require('./bookmarks_list.jsx');

var Bookmarklet = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar query={this.props.params.searchQuery} />
        <BookmarksList bookmarks={this.props.bookmarks}/>
      </div>
    )
  }
});

module.exports = Bookmarklet;