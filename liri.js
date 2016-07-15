var userCommands = process.argv[2];
var userArgs = process.argv.slice(3).join(' ');

var spotifyFunction = require('./spotify')['spotify-this-song']; // pulls function from spotify.js
var omdbFunction = require('./omdb')['movie-this']; // pulls function from omdb.js
var twitterFunction = require('./twitter')['my-tweets']; // pulls function from twitter.js
var fs = require('fs');

//put all commands in a function to avoid having to rewrite
//a bunch of if statements to check every option inside the 'do-what-it-says' command
function allCommands (command, args) { 
	if (command === 'spotify-this-song') { //Calls function in spotify.js
		if (!args) { // if no song was selected
			return spotifyFunction('The Sign'); // Searches for default song 'The Sign'
		};
		spotifyFunction(args);
	};
	if (command === 'movie-this') {
		if (!args) {
			return omdbFunction('Mr. Nobody');
		};
		omdbFunction(args);
	};
	if(command === 'my-tweets') {
		twitterFunction();
	};
};

if(userCommands === 'do-what-it-says') {
	fs.readFile('random.txt', 'utf8', function (err, data) {
		if(err) {
			return console.error(err);
		};
		var txtToArray = data.split('\r\n');//splits all lines in random.txt into a position in an array (\r\n represents new line)
		for (var i = 0; i < txtToArray.length; i++) { //runs through the lines array
			var txtCommands = txtToArray[i].split(','); //splits each element in the array into a smaller array seperated by commas
			
			// takes the first element in the array which is the command and the second element which 
			//is the argument (also removes the " marks from the string) and puts them in the function above
			allCommands(txtCommands[0], txtCommands[1].replace(/"/g, ''))
		};
	});
};

allCommands(userCommands, userArgs); // uses what the user typed in ad the parameters for the function