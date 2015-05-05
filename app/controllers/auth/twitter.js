var Twitter = require('twitter-js-client').Twitter
;

var tw_oauth_obj = {};
module.exports.login = function(req, res) {

  var apikey = config.twttr;
  var twitter = new Twitter(apikey);
  twitter.getOAuthRequestToken(function(oauth){
    tw_oauth_obj = oauth;
  });
  var url = twitter.getAuthenticateUrl(tw_oauth_obj);
  res.redirect(302, url);
};
