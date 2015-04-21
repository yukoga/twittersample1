var app = require('express.io')(),
    html = require('ect'),
    glob = require('glob')
    ;

module.exports = function(app, config) {
  var ectRenderer = html({
    watch: true,
    root: config.root + '/app/views',
    ext: '.html'
  });
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'html');
  app.engine('html', ectRenderer.render);

  app.http().io();

  var controllers = glob.sync(config.root + '/app/controllers/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app, config);
  });

}
