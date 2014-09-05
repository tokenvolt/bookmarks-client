var Constants = require("../constants");

module.exports = {
  removeBookmark: function(id) {
    this.dispatch(Constants.REMOVE_BOOKMARK, {id: id});
  },

  searchBookmark: function(query) {
    this.dispatch(Constants.SEARCH_BOOKMARK, {query: query});
  }
};