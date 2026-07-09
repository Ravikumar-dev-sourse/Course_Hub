
var sidenavcontainer = document.querySelector(".side-nav-container");

function Show() {
    sidenavcontainer.style.left = "0";
}

function hide() {
    sidenavcontainer.style.left = "-60%";
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

    courses.style.display = "flex";
    wanted.style.display = "block";

    courses.setAttribute("display", "flex");
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







