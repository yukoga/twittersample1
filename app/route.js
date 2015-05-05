var html = require('ect'),
    hashmap = require('hashmap'),
    modelmap = require('node-modelmap'),
    glob = require('glob')
    ;

module.exports = function(app, config) {
  var models = modelmap.load(glob.sync(config.root + '/app/models/*.js'));
  app.models = models;

  app.http().io();

  var ectRenderer = html({
    watch: true,
    root: config.root + '/app/views',
    ext: '.html'
  });
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'html');
  app.engine('html', ectRenderer.render);

  var controllers = glob.sync(config.root + '/app/controllers/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app, config);
  });

}
