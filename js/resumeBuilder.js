/*
This is empty on purpose! Your code to build the resume will go here.
 */
var skills = ["awesomeness", "programming", "teaching", "JS"];

var bio = {
	"name" : "Honu",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "555-555-5555",
		"e-mail" : "honu.menehune@gmail.com",
		"github" : "https://github.com/honu12",
		"twitter" : "",
		"location" : "Hawaii"
	},
	"welcomeMessage" : "lorem",
	"skills" : ["awesomeness", "programming", "teaching", "JS"],
	"bioPic" : "images/turtle.jpg"
};

$("#main").append("Honu");
$("#topContacts").append(bio);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var HTMLcontactGeneric = HTMLcontactGeneric.replace("%data%", bio.mobile);
var HTMLmobile = HTMLmobile.replace("%data%", bio.mobile);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);