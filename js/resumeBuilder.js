/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Honu",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "(808) 532-8700",
		"email" : "honu.menehune@gmail.com",
		"github" : "https://github.com/honu12",
		"twitter" : "@Honu12mene",
		"location" : "Hawaii"
	},
	"welcomeMessage" : "lorem",
	"skills" : ["awesomeness", "programming", "teaching", "JS"],
	"bioPic" : "images/turtle.jpg"
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
