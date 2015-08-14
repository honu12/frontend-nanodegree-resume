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
		"location" : "Honolulu, HI"
	},
	"welcomeMessage" : "There are some Hawaiian legends which said that turtles were the first to guide the Polynesians to the Hawaiian islands, while other myths attribute that to the golden plover. Nonetheless, there is a longstanding legend of a big green sea turtle, Kailua, who could turn itself into the form of a girl at will. In human form, she would look after the children playing on Punalu'u Beach.",
	"skills" : ["HTML", "CSS", "Javascript", "JQuery", "PHP", "Python"],
	"bioPic" : "images/turtle.jpg"
}

// Handler for Bio Object

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
work.location = "Honolulu, HI";
work.description = "Just crawling around";

// Handler for Work Object

var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
var formattedDates = HTMLworkDates.replace("%data%", work.dates);
var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
var formattedDescription = HTMLworkDescription.replace("%data%", work.description);

//Education Object

var education = {
	"schools": {
		"name": "University of Hawaii",
		"major": "Computer Science",
		"date": "2010 - 2014",
		"city": "Honolulu, HI",
		"degree": "BA",
	}
}

// Handler for Education Object

var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools.name);
var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools.major);
var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools.date);
var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools.city);
var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools.degree);

// Online Object

var online = {
	"learning": {
		"classes": "?",
		"title": "Frontend Developer Nanodegree",
		"school": "Udacity",
		"date": "2014 - present",
		"url" : "https://www.udacity.com/"
	}
}

// Handler for Online Object

var formattedHTMLonlineClasses = HTMLonlineClasses.replace("%data%", online.learning.classes);
var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", online.learning.title);
var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", online.learning.school);
var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", online.learning.date);
var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", online.learning.url);

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

// Display Work

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedEmployer);
$("#workExperience").append(formattedTitle);
$("#workExperience").append(formattedDates);
$("#workExperience").append(formattedLocation);
$("#workExperience").append(formattedDescription);

// Display Education

$("#education").append(HTMLschoolStart);
$("#education").append(formattedHTMLschoolName);
$("#education").append(formattedHTMLschoolDegree);
$("#education").append(formattedHTMLschoolDates);
$("#education").append(formattedHTMLschoolLocation);
$("#education").append(formattedHTMLschoolMajor);

//Display Online

$("#education").append(formattedHTMLonlineClasses);
$("#education").append(formattedHTMLonlineTitle);
$("#education").append(formattedHTMLonlineSchool);
$("#education").append(formattedHTMLonlineDates);
$("#education").append(formattedHTMLonlineURL);
