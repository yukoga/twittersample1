var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var twitterKey = {
  "consumerKey": "EygchgUWpfTaJtKm1fqoEyLRu",
  "consumerSecret": "QgC9rsjvpWFogEDCWP3s20qpQpL6SL70fVA7OXUtnPHfNk8673",
  // "accessToken": "2923537422-lbQWbLqlUvbqCBfpKwHvxW5V17MtbhZhTQfWsA5",
  // "accessTokenSecret": "RiccwXHxdhvkRJCEsNSftWIoCytv1fhFMOQV5ctPSLzc0",
  "callBackUrl": "https://desolate-stream-8656.herokuapp.com/"
}

var config = {
  development: {
    twitter: twitterKey,
    root: rootPath,
    app: {
      name: 'TwitterSample1'
    },
    port: 3000,
    db: 'mongodb://localhost/sample1-development'
  },

  test: {
    twitter: twitterKey,
    root: rootPath,
    app: {
      name: 'TwitterSample1'
    },
    port: 3000,
    db: 'mongodb://localhost/sample1-test'
  },

  production: {
    twitter: twitterKey,
    root: rootPath,
    app: {
      name: 'TwitterSample1'
    },
    port: 3000,
    db: 'mongodb://localhost/sample1-production'
  }
};

module.exports = config[env];
