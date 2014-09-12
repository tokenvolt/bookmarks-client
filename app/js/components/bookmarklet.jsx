/** @jsx React.DOM */

var React                   = require("react");
var NewBookmark             = require("./new_bookmark.jsx");
var SearchBar               = require('./search_bar.jsx');
var BookmarksList           = require('./bookmarks_list.jsx');
var BookmarkSectionsMixin   = require("./mixins/bookmark_sections");
var Col                     = require('react-bootstrap/Col');

var Bookmarklet = React.createClass({
  mixins: [BookmarkSectionsMixin],

  render: function() {
    return (
      <div>
        <NewBookmark />
        <SearchBar query={this.props.params.searchQuery} />
          <BookmarksList bookmarks={this.props.bookmarks.list}
                         query={this.props.params.searchQuery}
                         pagination={this.props.bookmarks.pagination}
                         loadMessage={this.props.bookmarks.loadMessage}
                         loadButtonDisabled={this.props.bookmarks.loadButtonDisabled}
                         header={this.leftSectionTitle}/>
          <BookmarksList bookmarks={this.props.bookmarks.searchList}
                         query={this.props.params.searchQuery}
                         pagination={this.props.bookmarks.paginationSearch}
                         loadMessage={this.props.bookmarks.loadMessageSearch}
                         loadButtonDisabled={this.props.bookmarks.loadButtonDisabledSearch}
                         header={this.rightSectionTitle}/>
      </div>
    )
  }
});

module.exports = Bookmarklet;