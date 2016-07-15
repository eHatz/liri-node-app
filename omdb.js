var request = require('request');

function omdbSearch(movieName) {

	var movieUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&tomatoes=true&r=json'
	request(movieUrl, function(error, response, body) {

		if (response.statusCode === 200 & !error) {

			var allMovieData = JSON.parse(body);
			var movieObj = {
				'Title': allMovieData.Title,
				'Year': allMovieData.Year,
				'IMDb Rating': allMovieData.Rated,
				'Country': allMovieData.Country,
				'Language': allMovieData.Language,
				'Plot': allMovieData.Plot,
				'Actors': allMovieData.Actors,
				'Rotten Tomatoes Rating': allMovieData.tomatoRating,
				'Rotten Tomatoes URL': allMovieData.tomatoURL
			};

			for(var movieProp in movieObj) {
				console.log(movieProp + ": " + movieObj[movieProp]);
			};
			console.log('===================================================================')
		};
		
	});

};

module.exports['movie-this'] = omdbSearch