/** @jsx React.DOM */

var React = require("react");
var Label = require('react-bootstrap/Label');

var BookmarkTag = React.createClass({
  render: function() {
    return (
      <Label bsStyle="primary" onClick={this.handleTagClick}>{this.props.title}</Label>
    )
  },

  handleTagClick: function() {
    console.log('clicked');
  }
});

module.exports = BookmarkTag;