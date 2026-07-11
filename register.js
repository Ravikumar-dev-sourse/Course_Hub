var studentName = document.getElementById("name"); 
var email = document.getElementById("email");
var coursechoose = document.querySelector(".course-choose");
var category = document.getElementById("Category");
var phoneno = document.getElementById("phone-no");
var submit = document.getElementById("submit");

var overlap = document.querySelector(".overlap");
var popup = document.querySelector(".popup");

if (submit) {
    submit.addEventListener("click", function (event) {
        event.preventDefault();

        if (!studentName.value.trim() || !email.value.trim() || !phoneno.value.trim() || !category.value) {
            alert("Please fill out all fields in the registration form.");
            return; 
        }
        var student = {
            name: studentName.value.trim(), 
            email: email.value.trim(),
            course: coursechoose.textContent.trim(),
            category: category.value,
            phone: phoneno.value.trim()
        };

        
        var students = JSON.parse(localStorage.getItem("students")) || [];
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));

        alert("Registration Successful!");

        
        studentName.value = "";
        email.value = "";
        phoneno.value = "";
        category.selectedIndex = 0;

        if (overlap) overlap.style.display = "none";
        if (popup) popup.style.display = "none";
        document.body.style.overflow = "auto"; 
    });
}