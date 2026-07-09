var register = document.querySelector(".register");
var students = JSON.parse(localStorage.getItem("students")) || [];


function renderStudents() {
    register.innerHTML = ""; 

    students.forEach(function(student, index) {
        var div = document.createElement("div");
        div.classList.add("register-box");

        div.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Course:</strong> ${student.course}</p>
            <p><strong>Category:</strong> ${student.category}</p>
            <p><strong>Phone:</strong> ${student.phone}</p>
            <div>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        register.append(div);

        var deletebtn = div.querySelector(".delete-btn");
        deletebtn.addEventListener("click", function() {
            
            students.splice(index, 1);
           
            localStorage.setItem("students", JSON.stringify(students));
            
            renderStudents();
        });
    });
}


renderStudents();