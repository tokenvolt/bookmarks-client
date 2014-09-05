/** @jsx React.DOM */

var React = require("react");
var Bookmark = require("./bookmark.jsx");

var BookmarksList = React.createClass({
  render: function() {
    var bookmarks = this.props.bookmarks.list.map(function(bookmark, index) {
      return (
        <Bookmark id={bookmark.id}
                  title={bookmark.title}
                  url={bookmark.url}
                  tags={bookmark.tags} />
      );
    });

    return (
      <div className="bookmarks-list">
        <ul>
          {bookmarks}
        </ul>
      </div>
    )
  }
});

module.exports = BookmarksList;