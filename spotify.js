var spotify = require('spotify');

function spotifySong (theSong) {
	spotify.search({
		type: 'track',
		query: theSong
	}, function(err, data) {
		if (err) {
			return console.log('Error: ' + err);
		};


		var song = data.tracks.items
		for (var i = 0; i < song.length; i++) {
			if((song[i].name).toLowerCase() === theSong.toLowerCase()){ //checks if the song name is what was searched for
				var songInfo = {
					artist: song[i].artists[0].name,
					songName: song[i].name,
					preview: song[i].preview_url,
					album: song[i].album.name
				};
				console.log('Artist: ' + songInfo.artist); // displays all songs with that name, can be moved out of the for loop to only display
				console.log('Song Name: ' + songInfo.songName);//1 song, but i figured if users want to look at all songs with that name they can
				console.log('Preview Link: ' + songInfo.preview);
				console.log('Album: ' + songInfo.album);
				console.log('===================================================================');
			};
		};
	});
};
module.exports['spotify-this-song'] = spotifySong;