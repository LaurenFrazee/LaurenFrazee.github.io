let courseCount = 0;


function addCourse() {
  courseCount++;
  let newCourse = document.getElementById("courseText");

  let newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'course' + courseCount;
  newInput.id = 'course' + courseCount;
  newCourse.appendChild(newInput);

  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete";
  newCourse.appendChild(deleteButton);


  deleteButton.addEventListener("click", function() {
    courseCount--;
    newCourse.removeChild(newInput);
    newCourse.removeChild(deleteButton);
  });


}


function displayBg() {

  let formData = [];
  let formLabels = [];

  displayName();
  displayMascot();
  displayImage();



  let originaldiv = document.getElementById("aboutMe");

  let bglabel = document.getElementById("bg").textContent;
  let pgblabel = document.getElementById("pgb").textContent;
  let ablabel = document.getElementById("ab").textContent;
  let sblabel = document.getElementById("sb").textContent;
  let pltlabel = document.getElementById("plt").textContent;
  let courseLabel = document.getElementById("crs").textContent;
  let iflabel = document.getElementById("if").textContent;


  let personalBackground = document.getElementById('personal-background').value;
  let professionalBackground = document.getElementById('professional-background').value;
  let academicBackground = document.getElementById('academic-background').value;
  let subBackground = document.getElementById('sub-background').value;
  let platform = document.getElementById('platform').value;
  let course = document.getElementById('interesting').value;

  let courses = document.getElementById("courseText");
  let courseInput = courses.querySelectorAll('input');
  let interesting = document.getElementById('interesting').value;


  let workpl = Array.from(courseInput).map(input => input.value);
  let finalCourses = workpl.join('\n');
  formData.push(personalBackground, professionalBackground, academicBackground, subBackground, platform, finalCourses, interesting);
  formLabels.push(bglabel, pgblabel, ablabel, sblabel, pltlabel, courseLabel, iflabel);
  //alert(workpl);

  let section = document.createElement("section");
  section.className = "info";
  section.id = "info";

  let aboutMeSection = document.getElementById("aboutMe").textContent = "";
  document.getElementById("aboutMe").appendChild(section);

  let ul = document.createElement("ul");
  let courseParagraph = document.createElement("p");
  let list = courseParagraph.appendChild(ul);


  for (let i = 0; i < formData.length; i++) {
    let article = document.createElement("article");
    article.className = "about-me outer_card"

    let div1 = document.createElement("div");
    div1.className = "question";
    let div2 = document.createElement("div");
    div2.className = "answer indent";

    let p1 = document.createElement("p");
    p1.textContent = formLabels[i];

    let p2 = document.createElement("p");
    p2.textContent = formData[i];

    article.appendChild(div1).appendChild(p1);
    article.appendChild(div2).appendChild(p2);

    document.getElementById("info").appendChild(article);
  }
}

function displayName() {
  //storing the original element
  let originaldiv = document.getElementById('nameSection');

  let username = document.getElementById('name').value;
  //document.getElementById("nameSection").textContent = username;
  //document.getElementById("name").textContent = " ";

  let h2 = document.createElement('h2');
  h2.textContent = username;
  document.getElementById('nameSection').replaceWith(h2);

}

function displayMascot() {

  let originaldiv = document.getElementById('mascotSection');
  let mascotName = document.getElementById('mascot').value;
  let h2 = document.createElement('h2');
  h2.textContent = mascotName;
  document.getElementById('mascotSection').replaceWith(h2);

}

function displayImage() {
  var imageFile = document.getElementById('image').files[0];
  var captionText = document.getElementById('caption').value;
  var reader = new FileReader();

  reader.onload = function(e) {
    var img = document.createElement('img');
    img.src = e.target.result;

    var figcaption = document.createElement('figcaption');
    figcaption.textContent = captionText;

    var fig = document.createElement('figure');
    fig.className = "intro-picture";
    fig.appendChild(img);
    fig.appendChild(figcaption);

    var imageSection = document.getElementById('imageSection');
    imageSection.parentNode.replaceChild(fig, imageSection);
  }

  reader.readAsDataURL(imageFile);
}

function validateAndDisplay() {
  // Define the IDs of the elements you want to validate
  const elementIds = ['personal-background', 'professional-background',
    'academic-background', 'sub-background',
    'platform', 'interesting'
  ];

  // Validate each field
  for (let id of elementIds) {
    let field = document.getElementById(id);
    if (!field.value) {
      alert('Please fill out all fields before submitting.');
      return;
    }
  }

  // If all fields are valid, call displayBg
  displayBg();
  displayName();
  displayMascot();
  displayImage();
}
