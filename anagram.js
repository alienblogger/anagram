var readline = require("readline");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var string = "";
var substr = "";

rl.question("Enter a String: ", function(answer) {
	string = answer;
	rl.question("Enter substring: ", function(answer) {
		substr = answer;
		rl.pause();
	});
});

rl.on("pause", function() {
	var len = substr.length;
	var start = 0;
	var end = len;
	var found = false;
	for (; start < string.length; ) {
		if (string.substring(start, end) == substr) {
			found = true;
			break;
		} else {
			start++;
			end++;
		}
	}

	var result = found ? "substring found" : "substring doesn't exist";
	console.log(result);
});
