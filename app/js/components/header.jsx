/** @jsx React.DOM */

var React   = require("react");
var Navbar  = require('react-bootstrap/Navbar');
var Nav     = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar inverse brand={this.props.name} >
          <Nav>
            <NavItem key={1} href="#">Add New</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
});

module.exports = Header;