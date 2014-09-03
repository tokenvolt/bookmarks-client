var React   = require("react");
var Fluxxor = require('fluxxor');
var stores  = require('./stores/_index');
var actions = require('./actions/_index');
var flux    = new Fluxxor.Flux(stores, actions);

var App = require('./components/app.jsx');
React.renderComponent(App({flux: flux}), document.getElementById("app"));