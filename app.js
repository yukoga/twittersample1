var app = require('express.io')(),
  config = require('./config/config')
  ;

require(config.root + '/app/route')(app, config);
app.listen(process.env.PORT || config.port);
