var app = require('express.io')(),
  config = require('./config/config'),
  glob = require('glob')
  ;

/*
var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
*/
require(config.root + '/config/express.io')(app, config);
app.listen(process.env.PORT || config.port);
