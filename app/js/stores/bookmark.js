var _ = require('lodash');
var Fluxxor = require('fluxxor');
var Constants = require("../constants");
var Server    = require("../server");
var Http = require('superagent');

module.exports = Fluxxor.createStore({
  initialize: function(options) {
    this.list = this.fetch();

    this.bindActions(Constants.ADD_BOOKMARK, 'handleAddBookmark',
                     Constants.REMOVE_BOOKMARK, 'handleRemoveBookmark',
                     Constants.SEARCH_BOOKMARK, 'handleSearchBookmark');
  },

  handleAddBookmark: function(payload) {
    console.log('added');
  },

  handleSearchBookmark: function(payload) {
    if (!payload.query) {
      this.list = this.fetch();
    } else {
      this.list = this.search(payload.query);
    }

    this.emit("change");
  },

  handleRemoveBookmark: function(payload) {
    _.remove(this.list, function(boomark) { return boomark.id == payload.id; });
    this.emit("change");
  },

  fetch: function() {
    // Fetch bookmarks from server

    return [
      {id: 1, title: 'vk', url: 'http://vk.com', tags: ['ruby', 'js', 'java']},
      {id: 2, title: 'facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook facebook', url: 'http://facebook.com', tags: ['ruby', 'erlang']},
      {id: 3, title: 'twitter', url: 'http://twitter.com', tags: ['ruby', 'js']},
      {id: 4, title: 'google', url: 'http://google.com', tags: ['ruby', 'js']}
    ];
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