
var studentName = document.getElementById("name"); 
var email = document.getElementById("email");
var coursechoose = document.querySelector(".course-choose");
var category = document.getElementById("Category");
var phoneno = document.getElementById("phone-no");
var submit = document.getElementById("submit");

var overlap = document.querySelector(".overlap");
var popup = document.querySelector(".popup");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    
    if (!studentName.value.trim()) {
        alert("Please enter your name.");
        return;
    }

    var student = {
        name: studentName.value, 
        email: email.value,
        course: coursechoose.textContent,
        category: category.value,
        phone: phoneno.value
    };

    var students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration Successful!");


    studentName.value = "";
    email.value = "";
    phoneno.value = "";
    category.selectedIndex = 0;

    
    overlap.style.display = "none";
    popup.style.display = "none";
    document.body.style.overflow = "auto"; 
});