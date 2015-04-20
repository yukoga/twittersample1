var app = require('express.io')()
;

module.exports = function(app) {
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
  var req = arguments[0], res = arguments[1];
  res.render('index', {
    title: 'express.io+ect with socket.io apps.'
  });
};
