var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'sample1'
    },
    port: 3000,
    db: 'mongodb://localhost/sample1-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'sample1'
    },
    port: 3000,
    db: 'mongodb://localhost/sample1-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'sample1'
    },
    port: 3000,
    db: 'mongodb://localhost/sample1-production'
  }
};

module.exports = config[env];
