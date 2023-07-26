function skillsMember()
{
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectsContent = document.getElementById("projectsContent");
    var contactContent = document.getElementById("contactContent");
    var aboutContent = document.getElementById("aboutContent");
    member.style.backgroundColor = "#1F1F1F";
    skills.style.backgroundColor = "#000000";
    projects.style.backgroundColor = "#000000";
    contact.style.backgroundColor = "#000000";
    about.style.backgroundColor = "#000000";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    contactContent.style.display = "none";
    aboutContent.style.display = "none";
}
