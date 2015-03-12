/*global requirejs,console,define,fs*/
define([
  'superagent',
  '../../lib/config',
  'opn'
], function(request, config, opn) {

  var open = {
    inBrowser: function(ticket) {
      var url = config.auth.url + "browse/" + ticket;
      opn(url);
    }
  };

  return open;

});