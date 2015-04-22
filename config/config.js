var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    twttr: {
      consumerKey: "BiSDarSJOisgVyR1ujn6fPxNU",
      consumerSecret: "u6VFsBb7kE1qqMcLaEwfXyObYraQRZABUvaS4EL8TEWKCym2DB",
      callBackUrl: "http://127.0.0.1:3000"
    },
    root: rootPath,
    app: {
      name: 'TwitterSample1'
    },
    port: 3000,
    db: 'mongodb://localhost/sample1-development'
  },

  test: {
    twttr: {
      consumerKey: "BiSDarSJOisgVyR1ujn6fPxNU",
      consumerSecret: "u6VFsBb7kE1qqMcLaEwfXyObYraQRZABUvaS4EL8TEWKCym2DB",
      callBackUrl: "http://127.0.0.1:3000"
    },
    root: rootPath,
    app: {
      name: 'TwitterSample1'
    },
    port: 3000,
    db: 'mongodb://localhost/sample1-test'
  },

  production: {
    twttr: {
      consumerKey: "EygchgUWpfTaJtKm1fqoEyLRu",
      consumerSecret: "QgC9rsjvpWFogEDCWP3s20qpQpL6SL70fVA7OXUtnPHfNk8673",
      callBackUrl: "https://desolate-stream-8656.herokuapp.com/"
    },
    root: rootPath,
    app: {
      name: 'TwitterSample1'
    },
    port: 3000,
    db: 'mongodb://localhost/sample1-production'
  }
};

module.exports = config[env];
