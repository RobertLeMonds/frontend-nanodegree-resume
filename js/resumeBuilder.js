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
};

var education = {
    "schools": [{
        "name": "University of North Texas",
        "location": "Denton,TX",
        "degree": "Incomplete",
        "majors": ["Music Theory Composition", "Marketing"],
        "dates": "2010-2011",
        "url": "https://www.unt.edu/"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/"
    },
    {	"title": "Random Test Online Course",
    	"school": "Freedom",
    	"date": "2020",
    	"url": "https://freedom4everyone.com/"
    }]
};

var work = {
    "jobs": [{
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
            "description": "Helping customers figure out customized furniture designs and leather education."
        }

    ]
};

var projects = {
    "projects": [{
            "title": "Portfolio Project",
            "dates": "April 2016",
            "description": "Udacity's Portfolio Project",
            "images": ["images/197x148.gif", "images/placeholder.png", "images/197x148.gif", "images/placeholder.png"]
        },

        {
            "title": "Random Image project",
            "dates": "May 2016",
            "description": "Random Placeholder",
            "images": ["images/placeholder.png", "images/197x148.gif", "images/placeholder.png", "images/197x148.gif", ]
        }

    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedbioPic, formattedMsg, formattedRole, formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%url%", bio.contacts.email).replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var idStrings = ["#topContacts", "#footerContacts"];
    for (var i = 0, id; i < idStrings.length; i++) {
        id = idStrings[i];
        $(id).append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    }

    $("#header").append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

work.display = function() {

    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedWLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedWLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

projects.display = function() {

    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[i].images.length > 0) {
            for (var index = 0; index < projects.projects[i].images.length; index++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[index]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }

    }
};

projects.display();



education.display = function() {

    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);

        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    	$("#education").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {

        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();

$("#mapDiv").append(googleMap);