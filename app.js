var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name: "Belmont", image: "http://www.photosforclass.com/download/11407596925"},
		{name: "Redwood", image: "http://www.photosforclass.com/download/2984976440"},
		{name: "Mateo", image: "http://www.photosforclass.com/download/8265812638"},
		{name: "Belmont", image: "http://www.photosforclass.com/download/11407596925"},
		{name: "Redwood", image: "http://www.photosforclass.com/download/2984976440"},
		{name: "Mateo", image: "http://www.photosforclass.com/download/8265812638"},
		{name: "Belmont", image: "http://www.photosforclass.com/download/11407596925"},
		{name: "Redwood", image: "http://www.photosforclass.com/download/2984976440"},
		{name: "Mateo", image: "http://www.photosforclass.com/download/8265812638"}
];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res){
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	// redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render('new.ejs');
});

app.listen(3000, function(){
	console.log('working!');
});