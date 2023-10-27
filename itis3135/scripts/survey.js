function completeFields(){
    document.getElementById(buildPageForm).addEventListener("submit", function(event){
        var nameInput = document.getElementById("name");
        var mascotInput = document.getElementById("mascot");
        var imageInput = document.getElementById("image");
        var captionInput = document.getElementById("caption");
        var agreeSelection = docment.getElementById("agree");
    });

    if(nameInput.value==="" || mascotInput.value ==="" ||  imageInput.value ==="" || captionInput.value ===""
    || agreeSelection.value === ""){
        alert("Please fill out all the necessary fields.");
        preventDefault(); 
    }
}

function addCourse() {
    
    let newCourse = document.getElementById("courseText");

    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'course' + courseCount;
    newInput.id = 'course' + courseCount;
    newCourse.appendChild(newInput);
    

    let deleteButton= document.createElement('button');
    deleteButton.innerHTML = "Delete";
    newCourse.appendChild(deleteButton);
    alert('this works');

    deleteButton.addEventListener("click", function() {
        newCourse.removeChild(newInput);
        newCourse.removeChild(deleteButton);
    });
    /*
courseCount++;
let inputArea = document.getElementById('courseText');
    
    let newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'course' + courseCount;
    newInput.id = 'course' + courseCount;
    inputArea.appendChild(newInput);    
    

    let deleteButton = document.createElement('button');
    let buttonText = document.createTextNode("Delete");
    deleteButton.id ="db" + newInput.id;
    inputArea.appendChild(deleteButton);
    deleteButton.appendChild(buttonText);
    deleteButton.onclick=deleteCourse();

  }

  function deleteCourse() {
    if (courseCount > 0) {
      courseCount--;
      let inputArea = document.getElementById('courseText');
      let inputToDelete = document.getElementById('course' + courseCount);
      inputArea.removeChild(inputToDelete);
      
      if (courseCount === 0) {
        document.getElementById('deleteButton').style.display = 'none';
      }
    }*/ 
  }
  function displayName(){
    
    let nameHeader= document.getElementById("name");
    let userName = document.getElementById("name").value;
    nameHeader.textContent=userName;
    let newH3 = document.createElement("H3");
    newH3.innerText = "HERE";
    document.body.appendChild(newH3);
    alert("here");
    

  }