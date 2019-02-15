
var exec = require('cordova/exec');

var PLUGIN_NAME = 'ASWebAuthenticationSession';

var ASWebAuthenticationSession = {
  start: function(redirectScheme, requestURL, cb, errorCb) {
    exec(cb, errorCb, PLUGIN_NAME, 'start', [redirectScheme, requestURL]);
  }
};

module.exports = ASWebAuthenticationSession;
