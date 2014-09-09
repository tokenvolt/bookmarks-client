/** @jsx React.DOM */

var React  = require('react');
var Router = require('react-router');
var Route  = Router.Route;
var Routes = Router.Routes;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var Fluxxor = require('fluxxor');
var stores  = require('../stores/_index');
var actions = require('../actions/_index');
var flux    = new Fluxxor.Flux(stores, actions);

var App = require('./app.jsx');
var About = require('./about.jsx');
var Bookmarklet = require('./bookmarklet.jsx');

var NotFound = React.createClass({
  render: function() {
    return <h2>Not found</h2>;
  }
});

var routes = (
  <Routes>
    <Route name="app" path="/" handler={App} flux={flux}>
      <DefaultRoute handler={Bookmarklet}/>
      <Route name="about" handler={About}/>
      <Route name="search" path="search/:searchQuery" handler={Bookmarklet}/>
      <NotFoundRoute handler={NotFound}/>
    </Route>
  </Routes>
);

module.exports = routes;