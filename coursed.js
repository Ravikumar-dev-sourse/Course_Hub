var coursedetail= document.querySelector(".course-detail");
var coursed=coursedetail.querySelectorAll(".course-d");
var coursemain=document.querySelector(".main")

var savedScrollPosition = 0; 
var clickedbutton;

function More(event){

    var clickedButton = event.target;
    var courseBox = clickedButton.closest(".course-box");
    var targetCourseName = courseBox.querySelector(".course-name").textContent.trim().toUpperCase();


    savedScrollPosition = window.scrollY;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    for(var i=0;coursed.length;i++){

       var coursename =coursed[i].querySelector("h1").textContent;
    

       if(coursename.toUpperCase()==targetCourseName)
       {
        coursemain.style.display="none";
        coursedetail.style.display="block";
        coursed[i].style.display="block";
      }
      else{
        
        coursed[i].style.display="none";

      }

    }
}
function hideDetails(){
    
    coursedetail.style.display="none;"
    coursemain.style.display="block";

    for (var i = 0; i < coursed.length; i++) {
        coursed[i].style.display = "none";
    }

     window.scrollTo({
        top: savedScrollPosition,
        behavior: "auto" 
    });

}

var overlap = document.querySelector(".overlap");
var popup = document.querySelector(".popup");

var clickedbutton;

function Register(event) {

    clickedbutton = event.target;

    event.target.style.color = "white";
    event.target.style.backgroundColor = "gray";

    overlap.style.display = "block";
    popup.style.display = "block";

    document.body.style.overflow = "hidden";


    var coursed = event.target.closest(".course-d");
    var coursename = coursed.querySelector("h1").textContent;

    var coursechoose = document.querySelector(".course-choose");
    coursechoose.textContent = coursename;
}
//if (backBtn) {
   // backBtn.addEventListener('click', hideDetails);
//}

