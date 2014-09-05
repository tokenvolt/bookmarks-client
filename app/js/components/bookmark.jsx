/** @jsx React.DOM */

var React = require("react");
var Fluxxor = require('fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);
var BookmarkTag = require('./bookmark_tag.jsx');

var Bookmark = React.createClass({
  mixins: [FluxChildMixin],

  getInitialState: function() {
    return {
      overlayed: false
    }
  },

  render: function() {
    var tags = this.props.tags.map(function(tag, index) {
      return (
        <BookmarkTag title={tag} />
      );
    });

    return (
      <li>
        <span className="remove-button pull-right" onClick={this.remove}>
          <i className="fa fa-remove fa-lg"></i>
        </span>
        <div className="bookmark-title">
          <a href={this.props.url} target="_blank">{this.props.title}</a>
          {tags}
        </div>
        <div className="bookmark-meta">3 days ago</div>
      </li>
    )
  },

  remove: function() {
    this.getFlux().actions.removeBookmark(this.props.id);
  }
});

module.exports = Bookmark;