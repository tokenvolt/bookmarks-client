var _               = require('lodash');
var Fluxxor         = require('fluxxor');
var Constants       = require("../constants");

module.exports = Fluxxor.createStore({
  initialize: function(options) {
    this.list = [];

    this.bindActions(Constants.ADD_BOOKMARK, 'handleAddBookmark',
                     Constants.LOAD_BOOKMARKS, 'handleLoadBookmarks',
                     Constants.REMOVE_BOOKMARK, 'handleRemoveBookmark',
                     Constants.SEARCH_BOOKMARK, 'handleSearchBookmark');
  },

  handleAddBookmark: function(payload) {
    console.log('added');
  },

  handleLoadBookmarks: function(payload) {
    this.list = payload.bookmarks;
    this.emit("change");
  },

  handleRemoveBookmark: function(payload) {
    _.remove(this.list, function(boomark) { return boomark.slug == payload.slug; });
    this.emit("change");
  },

  handleSearchBookmark: function(payload) {
    this.list = payload.bookmarks;
    this.emit("change");
  },

  search: function() {
    // Perform a search to server

    return [
      {id: 1, title: 'vk', url: 'http://vk.com', tags: ['ruby', 'js', 'java']},
      {id: 4, title: 'google', url: 'http://google.com', tags: ['ruby', 'js']}
    ];
  },

  getState: function() {
    return {
      list: this.list
    };
  }
});