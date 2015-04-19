var express = require('express');
var app = express();
var Twitter = require('twitter-js-client').Twitter;

var error = function(err, response, body) {
  console.log("ERROR: [%s]", err);
};

var success = function(data) {
  console.log("Data [%s]", data);
}

var config = {
  "consumerKey": "EygchgUWpfTaJtKm1fqoEyLRu",
  "consumerSecret": "QgC9rsjvpWFogEDCWP3s20qpQpL6SL70fVA7OXUtnPHfNk8673",
  "accessToken": "",
  "accessTokenSecret": "",
  "callBackUrl": "https://desolate-stream-8656.herokuapp.com/"
}

try {
var twitter = new Twitter(config);
} catch (e) {
  console.log(e);
}
console.log(twitter);
var search = twitter.getSearch({'q': '#haiku', 'count': 10}, error, success);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!' + search);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
