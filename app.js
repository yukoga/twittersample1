var app = require('express.io')(),
  config = require('./config/config'),
  glob = require('glob')
  // mongoose = require('mongoose')
  ;

/*
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
*/


require('./config/express.io')(app, config);

app.listen(config.port);

