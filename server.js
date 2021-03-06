var browserBookmarks = require('browser-bookmarks');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req,res) {
	browserBookmarks.getChrome().then(function(bookmarks){
	var n = bookmarks.length;
	var ind = Math.floor(Math.random() * n);
	var url = bookmarks[ind].url;
	res.redirect(url);
}).catch(function () {
     console.log("Promise Rejected");
});
});

app.listen(port, function() {
	console.log('Shuffle App listening on port' + port);
});