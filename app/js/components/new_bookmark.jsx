/** @jsx React.DOM */

var React = require("react");
var Fluxxor = require('fluxxor');
var Accordion           = require('react-bootstrap/Accordion');
var Panel           = require('react-bootstrap/Panel');
var PanelGroup           = require('react-bootstrap/PanelGroup');
var FluxChildMixin = Fluxxor.FluxChildMixin(React);

var NewBookmark = React.createClass({
  mixins: [FluxChildMixin],

  getDefaultProps: function() {
    return {
      placeholderUrl: "http://",
      placeholderTags: "Tags"
    }
  },

  render: function() {
    return (
      <PanelGroup accordion>
        <Panel header="+ Add New" key={1}>
          <form role="search" onSubmit={this.addBookmark}>
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     placeholder={this.props.placeholderUrl}
                     ref="addNewInput" />
            </div>
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     placeholder={this.props.placeholderTags} />
            </div>
            <button type="submit" className="btn btn-success btn-sm btn-block">Add</button>
          </form>
        </Panel>
      </PanelGroup>
    )
  },
});

module.exports = NewBookmark;