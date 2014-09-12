/** @jsx React.DOM */

var React = require("react");
var Moment = require("moment");
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
        <BookmarkTag title={tag.title} />
      );
    });

    return (
      <div>
        <span className="remove-button pull-right" onClick={this.remove}>
          <i className="fa fa-remove"></i>
        </span>
        <div className="bookmark-title">
          <a href={this.props.url} target="_blank">{this.props.title}</a>
          {tags}
        </div>
        <div className="bookmark-meta">
          {Moment(this.props.createdAt).format('MMMM Do YYYY, HH:mm:ss')}
        </div>
      </div>
    )
  },

  remove: function() {
    if (confirm('For real, bro?')) this.getFlux().actions.bookmarks.remove(this.props.slug);
  }
});

module.exports = Bookmark;