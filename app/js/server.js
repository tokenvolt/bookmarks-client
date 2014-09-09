var scheme    = 'http://';
var domain    = 'localhost:3000';
var apiPrefix = '/api/v1';

module.exports = {
  scheme:    scheme,
  domain:    domain,
  apiPrefix: apiPrefix,

  bookmarks: {
    root: scheme + domain + apiPrefix + '/bookmarks',
    search: scheme + domain + apiPrefix + '/bookmarks/search'
  }
};