/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Bio Object

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
	"welcomeMessage" : "There are some Hawaiian legends which said that turtles were the first to guide the Polynesians to the Hawaiian islands, while other myths attribute that to the golden plover.",
	"skills" : ["HTML", "CSS", "Javascript", "JQuery", "PHP", "Python"],
	"bioPic" : "images/turtle.jpg"
}

// Handler for the Bio Object

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkill = HTMLskills.replace("%data%", bio.skills);

// Work Object

var work = {};
work.employer = "Independent Contractor";
work.title = "Web Developer";
work.dates = "3 years";
work.location = "Hawaii";
work.description = "Just crawling around";

// Handler for Work Object

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedDates = HTMLworkDates.replace("%data%", work.dates);
var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
var formattedDescription = HTMLworkDescription.replace("%data%", work.description);

// Display Bio 

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
for (var e in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
      $("#skills").append(formattedSkill);
    }

// Display Work Eperience

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedTitle);
$("#workExperience").append(formattedDates);
$("#workExperience").append(formattedLocation);
$("#workExperience").append(formattedDescription);