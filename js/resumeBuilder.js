
/*
// Below is javascript for the header in the online Resume
var formattedName = HTMLheaderName.replace("%data%", "Robert Le Monds");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
var bio = HTMLbioPic.replace("%data%", "images/profilepic.jpg");
	$("#header").prepend(formattedName, formattedRole, bio);
*/


var bio = {
 	"name": "Robert Le Monds",
 	"role": "Web Developer",
 	"contacts": {
 		"mobile": "210-585-6686",
 		"email": "robertlemondsortiz@me.com",
 		"github": "robertlemonds",
 		"twitter": "@mousepotatobob",
 		"location": "San Antonio"
 	},
 	"welcomeMessage": "Welcome to my awesome resume!",
 	"skills": [
 		"Dance Dance Revolution Master", "Violin Jammin'", "Ruling my minecraft world!"
 	],
 	"biopic": "images/profilepic.jpg"
 }

 var education = {
	"schools": [
		{
			"name": "University of North Texas",
			"location": "Denton,TX",
			"degree": "Incomplete",
			"majors": ["Music Theory Composition", "Marketing"],
			"dates": "2010-2011"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "2016"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Home Solutions Sales Executive",
			"location": "San Antonio,TX",
			"dates": "In Progress",
			"description": "Door to Door Sales"
		},

		{
			"employer": "Texas Leather Interiors",
			"title": "Design Consultant",
			"location": "San Antonio, TX",
			"dates": " 11/2014 - 9/2015",
			"description": "Helping customers figure out customized furniture"
		}

	]
}

var projects = {
	"projects": [
		{
		"title": "Portfolio Project",
		"dates": "April 2016",
		"description": "Udacity's Portfolio Project",
		"images": ["../images/portfolio.jpg"]
		}
	]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").prepend(formattedbioPic);
	$("#header").prepend(formattedMsg);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%url%", bio.contacts.email).replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var idStrings = ["#topContacts", "#footerContacts"];
	for (var i = 0, id; i < idStrings.length; i++) {
		id = idStrings[i];
		$(id).append(formattedMobile);
		$(id).append(formattedEmail);
		$(id).append(formattedGithub);
		$(id).append(formattedTwitter);
		$(id).append(formattedLocation);
	}

 	$("#header").append(HTMLskillsStart);

 	for (i = 0; i < bio.skills.length; i++) {
 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
 	}
}

bio.display();