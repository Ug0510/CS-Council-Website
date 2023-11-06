

// ------------------------------------------
// JS for course category in online training 
// ------------------------------------------

function showSubCourses() {
  var select = document.getElementById("course-category");
  var selectedCategory = select.value;
  var subCoursesElement = document.getElementById("sub-courses");

  // Clear any existing sub-courses
  subCoursesElement.innerHTML = "";

  // Define the sub-courses for each category
  var subCourses = {
    graphics: ["Photoshop", "Coreldraw", "Filmora", "Adobe Premier Pro", "Adobe Illustrator", "Adobe After Effects", "Canva", "Figma"],
    office: ["MS Word", "PowerPoint", "Excel", "Advance Excel"],
    programming: ["C Basic", "C++ Basic", "C# Basic", "Python Basic", "Java Basic", "C Advance", "C++ Advance", "C# Advance", "Python Advance", "Java Advance"],
    development: ["HTML", "CSS", "JS", "PHP", "Kotlin", "Android Development", "MERN Stack", "MEAN Stack", "Full Stack", "Website Development", "UI UX Designing"],
    database: ["SQL", "MySQL", "MongoDB", "NoSQL"],
    frameworks: ["Flask", "Django", "Bootstrap", "Laravel", "Tailwind", "React", "Angular", "Node", "Express", "WordPress"],
    marketing: ["Affiliate Marketing", "Digital Marketing", "Marketing", "Content Writing", "Search Engine Optimization", "Social Media Optimization", "SMM", "Email Marketing", "WhatsApp Marketing"],
    technologies: ["Metaverse", "AWS"],
    google: ["Google Preparation Course 1", "Google Preparation Course 2"]
  };

  // Check if a category is selected
  if (selectedCategory && subCourses[selectedCategory]) {
    var courses = subCourses[selectedCategory];

    // Create the list of sub-courses
    var ul = document.createElement("ul");
    for (var i = 0; i < courses.length; i++) {
      var li = document.createElement("li");
      li.textContent = courses[i];
      ul.appendChild(li);
    }

    // Append the list to the sub-courses element
    subCoursesElement.appendChild(ul);
  }
}

// --------------------------------------
// function for scroll with some offset
// --------------------------------------

function scrollWithOffset(elementId, offset) {
  const element = document.querySelector(elementId);
  const elementPosition = element.offsetTop - offset;

  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
}


// ------------------------------------------
// JQuery for course details popup
// ------------------------------------------

// Function to show course details popup
function showCourseDetails(cardElement) {
  // Get the course name from the card's title
  var courseName = $(cardElement).find('.card-title').text().trim();
  
// Load the JSON file using fetch
fetch('./courseDetails.json')
  .then(response => response.json())
  .then(data => {
    // Find the course data in the JSON
    var courseData = data.find(course => course['Course Name'] === courseName);

    // Update the popup content with the course details
    if (courseData) {
      $('#coursename').text(courseData['Course Name']);
      $('#course-popup-duration').text(courseData['Course Duration']);
      $('#courseImage').attr('src', './thumbnails/' + courseData['Course Id'] + '.png');
      var courseSyllabus = courseData['Course Syllabus'];
      var contentHTML = '<li class="course-list-items rounded-pill">' + courseSyllabus.replace(/,/g, '</li><li class="course-list-items rounded-pill">').trim() + '</li>';

      $('#courseContent').html(contentHTML);

      // Show the popup
      $('#coursePopup').show();
    }
  })
  .catch(error => {
    console.error('Error loading course details:', error);
  });

}

// Function to close the popup
function closePopup() {
  $('#coursePopup').hide();
}

