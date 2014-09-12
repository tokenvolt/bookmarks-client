var _               = require('lodash');
var Fluxxor         = require('fluxxor');
var Constants       = require("../constants");

module.exports = Fluxxor.createStore({
  initialize: function(options) {
    this.list = [];
    this.searchList = [];
    this.pagination = {};
    this.paginationSearch = {};
    this.loadMessage = 'Load More...';
    this.loadMessageSearch = 'Load More...';
    this.loadButtonDisabled = false;
    this.loadButtonDisabledSearch = false;

    this.bindActions(Constants.ADD_BOOKMARK, 'handleAddBookmark',
                     Constants.LOAD_BOOKMARKS, 'handleLoadBookmarks',
                     Constants.REMOVE_BOOKMARK, 'handleRemoveBookmark',
                     Constants.SEARCH_BOOKMARK, 'handleSearchBookmark');
  },

  handleAddBookmark: function(payload) {
    console.log('added');
  },

  handleLoadBookmarks: function(payload) {
    this.list               = this.list.concat(payload.bookmarks);
    this.pagination         = payload.pagination;
    this.loadMessage        = 'Load More...';
    this.loadButtonDisabled = false;
    this.emit("change");
  },

  handleRemoveBookmark: function(payload) {
    _.remove(this.list, function(bookmark) { return bookmark.slug == payload.slug; });
    _.remove(this.searchList, function(bookmark) { return bookmark.slug == payload.slug; });
    this.emit("change");
  },

  handleSearchBookmark: function(payload) {
    if (payload.pagination.current_page > 1) {
      this.searchList = this.searchList.concat(payload.bookmarks);
    } else {
      this.searchList = payload.query && payload.bookmarks ? payload.bookmarks : [];
    }

    this.paginationSearch         = payload.pagination;
    this.loadMessageSearch        = 'Load More...';
    this.loadButtonDisabledSearch = false;
    this.emit("change");
  },

  getState: function() {
    return {
      list: this.list,
      searchList: this.searchList,

      pagination: this.pagination,
      paginationSearch: this.paginationSearch,

      loadMessage: this.loadMessage,
      loadMessageSearch: this.loadMessageSearch,

      loadButtonDisabled: this.loadButtonDisabled,
      loadButtonDisabledSearch: this.loadButtonDisabledSearch
    };
  }
});