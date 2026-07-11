
var sidenavcontainer = document.querySelector(".side-nav-container");
var overlay= document.querySelector(".overlay");

function Show() {
    sidenavcontainer.style.left = "0";
    overlay.style.display = "block";
}

function hide() {
    sidenavcontainer.style.left = "-60%";
      overlay.style.display = "none";
}

function Cancel() {

    overlap.style.display = "none";
    popup.style.display = "none";

    document.body.style.backgroundColor = "white";

    clickedbutton.style.backgroundColor = "#0f172a";
    clickedbutton.style.color = "white";

    document.body.style.overflow = "auto";
}



var courses = document.querySelector(".courses");
var wanted = document.querySelector(".wanted");
var start = document.querySelector(".start");

function started() {

    document.body.style.backgroundColor = "white";

    start.style.backgroundColor = "gray";
    start.style.color = "black";
    
    courses.classList.add("show-courses");
    wanted.classList.add("show-courses");

}


/**  
var searchbtn = document.getElementById("search-btn");
var search = document.getElementById("search");
var resultbox = document.getElementById("result-box");

var courses = document.querySelector(".courses");
var coursebox = courses.querySelectorAll(".course-box");


searchbtn.addEventListener("click", function (event) {

    event.preventDefault();

    var enteredtext = search.value.toUpperCase();

    for (var i = 0; i < coursebox.length; i++) {

        var coursename = coursebox[i]
            .querySelector("h3")
            .textContent;

        if (coursename.toUpperCase().indexOf(enteredtext) < 0) {

            coursebox[i].style.display = "none";

        }
        else {

            coursebox[i].style.display = "block";

        }
    }
});**/

var courses = document.querySelector(".courses");
var coursebox = courses.querySelectorAll(".course-box");
var search = document.getElementById("search");


search.addEventListener("keyup", function() {

    var enteredtext = search.value.toUpperCase();

    for (var i = 0; i < coursebox.length; i++) {

        var coursename = coursebox[i]
            .querySelector("h3")
            .textContent;

        if (coursename.toUpperCase().indexOf(enteredtext) < 0) {
            coursebox[i].style.display = "none";
        }
        else {
            coursebox[i].style.display = "block";
        }

    }

});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent the page from automatically refreshing on submit
    event.preventDefault();

    // Get value strings from all fields
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const feedback = document.getElementById("contactFeedback").value.trim();

    // Check if any fields are completely empty
    if (name === "" || email === "" || phone === "" || feedback === "") {
        alert("Please enter all details in the contact section.");
    } else {
        // Successful message pop-up
        alert(`Thank you, ${name}! Your form has been submitted successfully.`);
        
        // Optional: Reset the form fields back to blank after clicking OK
        this.reset();
    }
});







