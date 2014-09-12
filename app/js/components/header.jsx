/** @jsx React.DOM */

var React   = require("react");
var Router  = require('react-router');
var Fluxxor = require('fluxxor');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);
var Link    = Router.Link;
var Navbar  = require('react-bootstrap/Navbar');
var Nav     = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');

var Header = React.createClass({
  mixins: [FluxChildMixin],

  getInitialState: function() {
    return {
      url: ''
    }
  },

  render: function() {
    return (
      <div>
        <Navbar inverse brand={this.props.name} >
        </Navbar>
      </div>
    )
  },

  addBookmark: function(event) {
    event.preventDefault();
    var currentInputValue = this.refs.addNewInput.getDOMNode().value;
    this.getFlux().actions.bookmarks.add(currentInputValue);
  }
});

module.exports = Header;