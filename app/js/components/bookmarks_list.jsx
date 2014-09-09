/** @jsx React.DOM */

var React           = require("react");
var Fluxxor         = require('fluxxor');
var FluxMixin       = Fluxxor.FluxMixin(React);
var FluxChildMixin  = Fluxxor.FluxChildMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Bookmark        = require("./bookmark.jsx");

var BookmarksList = React.createClass({
  mixins: [FluxChildMixin],

  render: function() {
    return (
      <div className="bookmarks-list">
        <ul>
          {this.getBookmarks()}
        </ul>
      </div>
    )
  },

  componentWillMount: function() {
    this.getFlux().actions.bookmarks.fetch();
  },

  getBookmarks: function() {
    return this.props.bookmarks.list.map(function(bookmark, index) {
      return (
        <Bookmark slug={bookmark.slug}
                  title={bookmark.title}
                  url={bookmark.url}
                  tags={bookmark.tags}
                  createdAt={bookmark.created_at} />
      );
    });
  }
});

module.exports = BookmarksList;