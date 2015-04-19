var express = require('express');
var app = express();
var Twitter = require('twitter-js-client').Twitter;
var searchResult;

var error = function(err, response, body) {
  console.log("ERROR: [%s]", err);
};

var success = function(data) {
  searchResult = data[0];
  console.log("Data [%s]", data);
}

var config = {
  "consumerKey": "EygchgUWpfTaJtKm1fqoEyLRu",
  "consumerSecret": "QgC9rsjvpWFogEDCWP3s20qpQpL6SL70fVA7OXUtnPHfNk8673",
  // "accessToken": "2923537422-lbQWbLqlUvbqCBfpKwHvxW5V17MtbhZhTQfWsA5",
  // "accessTokenSecret": "RiccwXHxdhvkRJCEsNSftWIoCytv1fhFMOQV5ctPSLzc0",
  "callBackUrl": "https://desolate-stream-8656.herokuapp.com/"
}

try {
var twitter = new Twitter(config);
} catch (e) {
  console.log(e);
}
console.log(twitter);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  twitter.getSearch({'q': '#haiku', 'count': 10}, error, function(data) {
    var result = (new Function("return" + data))();
    // response.send('Hello Twitter sample apps.<hr />' + result.search_metadata.max_id);
    response.send('1st tweet for search result #haiku.<br />' + result.statuses[0].text);
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
