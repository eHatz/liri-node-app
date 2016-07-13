var fs = require('fs');
var commands = process.argv[2];
var args = process.argv.slice(3).join(' ');
var keys;
fs.readFile('keys.js', 'utf8', function (error, data) {
	if (error) {
		return console.error(error);
	};
	var keys = data;
});

if (commands === 'my-tweets') {
	console.log('my-tweeeeeetttsss');
};