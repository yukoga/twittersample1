var app = require('express.io')(),
    Twitter = require('twitter-js-client').Twitter
;

var tw_oauth_obj = {};
module.exports = function(app, config) {
  var articles = [];
  app.get('/', getHome);

  var apikey = config.twttr;
  var twitter = new Twitter(apikey);
  twitter.getOAuthRequestToken(function(oauth){
    tw_oauth_obj = oauth;
  });
  app.get('/redirect', function(req, res) {
    var url = twitter.getAuthenticateUrl(tw_oauth_obj);
    res.redirect(302, url);
  });
  app.io.route('ready', ready);
};

var ready = function(req, res, next) {
  var req = arguments[0];
  req.io.emit('talk', {
    message: 'io event from an io route on the server. / ready のcallback 関数として外出ししたところからemit.'
  });
};

var getHome = function() {
  var req = arguments[0], res = arguments[1], auth_message;
  if (req.query.oauth_token && req.query.oauth_verifier) {
    auth_message = "Succeeded to Twitter authentication.";
  } else if (req.query.denied) {
    auth_message = "You've failed or rejected to connect this apps and Twitter.";
  } else {
    auth_message = "You've got a something wrong.";
  }
  res.render('index', {
    title: 'express.io+ect with socket.io apps.',
    auth_message: auth_message,
    oauth_token: req.query.oauth_token,
    oauth_verifier: req.query.oauth_verifier
  });
};
