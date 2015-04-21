var app = require('express.io')(),
    Twitter = require('twitter-js-client').Twitter
;

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
    "consumerKey": "EygchgUWpfTaJtKm1fqoEyLRu",
    "consumerSecret": "QgC9rsjvpWFogEDCWP3s20qpQpL6SL70fVA7OXUtnPHfNk8673",
    // "accessToken": "2923537422-lbQWbLqlUvbqCBfpKwHvxW5V17MtbhZhTQfWsA5",
    // "accessTokenSecret": "RiccwXHxdhvkRJCEsNSftWIoCytv1fhFMOQV5ctPSLzc0",
    "callBackUrl": "https://desolate-stream-8656.herokuapp.com/"
  };
  var twitter = new Twitter(apikey);
  twitter.getOAuthAccessToken(twitter.oauth, function(){});
  var req = arguments[0], res = arguments[1];
  res.render('index', {
    title: 'express.io+ect with socket.io apps.'
  });
};
