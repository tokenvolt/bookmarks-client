var React          = require("react");
var Fluxxor        = require('fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);
var BookmarkSectionsMixin   = require("./mixins/bookmark_sections");

var LoadMoreLink = React.createClass({
  mixins: [FluxChildMixin, BookmarkSectionsMixin],

  getInitialState: function() {
    return {
      message: this.props.message,
      buttonDisabled: this.props.buttonDisabled
    }
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({message: nextProps.message, buttonDisabled: nextProps.buttonDisabled})
  },

  render: function() {
    return (
      <button className="btn btn-success btn-block load-more"
              disabled={this.state.buttonDisabled}
              onClick={this.onClick}>
        {this.state.message}
      </button>
    )
  },

  onClick: function(event) {
    event.preventDefault();

    this.setState({message: 'Loading...', buttonDisabled: true}, function() {
      if (this.props.header == this.leftSectionTitle) {
        this.getFlux().actions.bookmarks.fetch(this.props.page);
      } else {
        this.getFlux().actions.bookmarks.search(this.props.query, this.props.page);
      }
    });
  }
});

module.exports = LoadMoreLink;