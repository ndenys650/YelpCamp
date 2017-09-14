
// import DB and schema model
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
	{
		name: "Sky's Peak", 
		image: "https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg",
		description: "welcome welcome welcome!"
	},
	{
		name: "Dry Oasis", 
		image: "https://lostriver.com/style/images/Pic-2-Tent.jpg",
		description: "welcome welcome welcome!"
	},
	{
		name: "RV's paradise", 
		image: "http://wafflefarm.com/wp-content/uploads/2016/12/WaffleFarmCampground_Sunset_ClubGroup-Camping-Slide.jpg",
		description: "welcome welcome welcome!"
	}
]

function seedDB(){
	// Remove all Campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds!**");
		// add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err);
				} else {
					console.log("added a campground");
					// add a few comments
					Comment.create(
						{
							text: "This place is amazing but no internet sucks!",
							author: "Nate"
						}, function(err, comment){
							if(err){
								console.log(err)
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("created a new comment");
							}
						});
				}
			});
		});
	})

}

module.exports = seedDB;