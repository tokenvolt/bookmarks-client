var Constants       = require("../constants");
var Server          = require("../server");
var HTTP            = require('superagent');

module.exports = {
  fetch: function(page) {
    var action = this;

    HTTP.get(Server.bookmarks.root)
        .query({page: page || 1})
        .end(function(res) {
          action.dispatch(Constants.LOAD_BOOKMARKS, {bookmarks: res.body.bookmarks,
                                                     pagination: res.body.pagination});
        });
  },

  remove: function(slug) {
    var action = this;

    HTTP.del(Server.bookmarks.root + '/' + slug)
        .end(function(res) {
          action.dispatch(Constants.REMOVE_BOOKMARK, {slug: slug});
        });
  },

  search: function(query, page) {
    var action = this;

    HTTP.get(Server.bookmarks.search)
        .query({query: query})
        .query({page: page || 1})
        .end(function(res) {
          console.log(res.body);
          action.dispatch(Constants.SEARCH_BOOKMARK, {bookmarks: res.body.bookmarks,
                                                      query: query,
                                                      pagination: res.body.pagination});
        });
  },

  add: function(url) {
    this.dispatch(Constants.ADD_BOOKMARK, {url: url});
  }
};