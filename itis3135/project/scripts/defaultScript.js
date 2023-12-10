let button = document.getElementById('toggle');

function switchMode(){
    let element = document.getElementById("mode");
    if (element.classList != "light"){
  
      lightMode(element);
    } 
     else if(element.classList == "light")
    {

      darkMode(element);
    }
}

function lightMode(element){
  element.classList.toggle("light");
  let toggleBackground = document.getElementById("toggleBG");
  toggleBackground.style.background = 'white';
  toggleBackground.style.border= "2px solid black"
 
  button.style.left="25px";

}
function darkMode(element){
  element.classList.remove("light");
  let toggleBackground = document.getElementById("toggleBG");
  toggleBackground.style.background = 'black';

  button.style.left="0px";
}

function moveToggle(){


}