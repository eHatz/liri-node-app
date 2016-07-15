var keys = require('./keys').twitterKeys;
var Twitter = require('twitter');

function tweets () {
	var client = new Twitter (keys);
	var params = {
		screen_name: 'efthemiH',
		count: 21
		};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
		if (error) {
			return console.error(error);
		};

		for (var i = 0; i < tweets.length; i++) {
			console.log(i + 1 + ': ' + tweets[i].text);
			console.log(tweets[i].created_at);
			console.log(' ');
			console.log('===================================================================');
			console.log(' ');
		};
	});
};

module.exports['my-tweets'] = tweets;