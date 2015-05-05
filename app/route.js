// var html = require('ect'),
    // glob = require('glob')
    // ;

/*
var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
*/

var pathMap = {
  '/': 'app/controllers/index',
};
module.exports = function(app, config) {
  app.get('/', function (req, res) {
    pathMap[req.path] ? require(pathMap[req.path]) : require(req.path);
  });
}
