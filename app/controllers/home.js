var app = require('express.io')(),
    Twitter = require('twitter-js-client').Twitter
;

var tw_oauth_obj = {};
module.exports = function(app, config) {
  var articles = [];
  // app.use('/', localLog);
  app.get('/', getHome);
  app.io.route('ready', ready);
};

var ready = function(req, res, next) {
  var req = arguments[0];
  req.io.emit('talk', {
    message: 'io event from an io route on the server. / ready のcallback 関数として外出ししたところからemit.'
  });
  // req.io.emit('talk', {
    // message: 'twitter oauth_token is : ' + tw_oauth_obj.token
  // });
  // req.io.emit('talk', {
    // message: 'twitter oauth_token_secret is : ' + tw_oauth_obj.token_secret
  // });
};

var localLog = function(req, res, next) {
  console.log('called by app.use(). ');
  getHome(req, res, next);
  ready(req, res, next);
  // next();
}

var callbackforready = function() {
  var req = arguments[0];
  req.io.emit('talk', {
    message: 'io event from callbackforready.'
  });
};

var getHome = function() {
  var apikey = {
    // "consumerKey": "EygchgUWpfTaJtKm1fqoEyLRu",
    // "consumerSecret": "QgC9rsjvpWFogEDCWP3s20qpQpL6SL70fVA7OXUtnPHfNk8673",
    // "callBackUrl": "https://desolate-stream-8656.herokuapp.com/"
    "consumerKey": "jTJ3lfXy8mjIVxapeaikdcL6K",
    "consumerSecret": "hOpJ66F9OS3H0MDxuAnqn5X477Gfx6A23O4LFDSSmbGe1aX5Jd",
    "callBackUrl": "http://127.0.0.1:3000"
  };
  var twitter = new Twitter(apikey);
  twitter.getOAuthAccessToken(twitter.oauth, function(){
    tw_oauth_obj = arguments[0];
  });
  var req = arguments[0], res = arguments[1];
  res.render('index', {
    title: 'express.io+ect with socket.io apps.'
  });
};
