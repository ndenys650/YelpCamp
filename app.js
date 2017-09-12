var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
		{name: "Belmont", image: "http://www.photosforclass.com/download/11407596925"},
		{name: "Redwood", image: "http://www.photosforclass.com/download/2984976440"},
		{name: "Mateo", image: "http://www.photosforclass.com/download/8265812638"}
	]
	res.render('campgrounds');
})

app.listen(3000, function(){
	console.log('working!');
});