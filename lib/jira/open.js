var request = require('superagent');
var config = require('../../lib/config');
var opn = require('opn');

var open = {
  inBrowser: function(ticket) {
    var url = config.auth.url + "browse/" + ticket;
    opn(url);
  }
};

module.exports = open;
