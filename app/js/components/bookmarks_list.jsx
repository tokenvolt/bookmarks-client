/** @jsx React.DOM */

var React                   = require("react");
var Bookmark                = require("./bookmark.jsx");
var NotFound                = require('./not_found.jsx');
var LoadMoreLink            = require('./load_more_link.jsx');
var BookmarkSectionsMixin   = require("./mixins/bookmark_sections");
var Col                     = require('react-bootstrap/Col');

var BookmarksList = React.createClass({
  mixins: [BookmarkSectionsMixin],

  getDefaultProps: function() {
    return {
      bookmarks: []
    }
  },

  render: function() {
    var bookmarks = this.getBookmarks();
    var columnWidth = this.columnWidth();
    var response;
    var loadMoreLink;

    if (bookmarks.length == 0) {
      response = <NotFound />;
    } else {
      response = bookmarks;
      if (this.props.pagination.next_page != null) {
        loadMoreLink = <LoadMoreLink page={this.props.pagination.next_page}
                                     query={this.props.query}
                                     header={this.props.header}
                                     message={this.props.loadMessage}
                                     buttonDisabled={this.props.loadButtonDisabled}/>;
      }
    }

    return (
      <Col xs={columnWidth} md={columnWidth}>
        <div className="bookmarks-list">
          <h2>{this.props.header}</h2>
          <ul>
            {response}
            {loadMoreLink}
          </ul>
        </div>
      </Col>
    )
  },

  columnWidth: function() {
    var value = null;

    if (this.props.header == this.leftSectionTitle) {
      if (this.props.query) {
        if (this.props.query.length == 0) {
          value = 12;
        } else {
          value = 6;
        }
      } else {
        value = 12;
      }
    } else {
      if (this.props.query) {
        if (this.props.query.length == 0) {
          value = 0;
        } else {
          value = 6;
        }
      } else {
        value = 0;
      }
    }

    return value;
  },

  getBookmarks: function() {
    return this.props.bookmarks.map(function(bookmark, index) {
      return (
        <li key={bookmark.slug}>
          <Bookmark slug={bookmark.slug}
                    title={bookmark.title}
                    url={bookmark.url}
                    tags={bookmark.tags}
                    createdAt={bookmark.created_at} />
        </li>
      );
    });
  }
});

module.exports = BookmarksList;