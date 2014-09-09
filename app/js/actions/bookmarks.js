var Constants       = require("../constants");
var Server          = require("../server");
var HTTP            = require('superagent');

module.exports = {
  fetch: function() {
    var action = this;

    HTTP.get(Server.bookmarks.root)
        .end(function(res) {
          action.dispatch(Constants.LOAD_BOOKMARKS, {bookmarks: res.body});
        });
  },

  remove: function(slug) {
    var action = this;

    HTTP.del(Server.bookmarks.root + '/' + slug)
        .end(function(res) {
          action.dispatch(Constants.REMOVE_BOOKMARK, {slug: slug});
        });
  },

  search: function(query) {
    var action = this;

    HTTP.get(Server.bookmarks.search)
        .query({query: query})
        .end(function(res) {
          action.dispatch(Constants.SEARCH_BOOKMARK, {bookmarks: res.body});
        });
  }
};