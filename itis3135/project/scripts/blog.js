let buttonid;

let blogintro= document.getElementById("intro-pop");
blogintro.style.display = "none";



let overlay = document.createElement("div");
overlay.style.position = "fixed";

overlay.style.top = "0";
overlay.style.bottom = "0";
overlay.style.left = "0";
overlay.style.right = "0";
overlay.style.background = "rgba(0,0,0,.9)";
overlay.style.filter = "blur(8px)";
overlay.style.zIndex = "0";
overlay.style.display = "none";
document.body.appendChild(overlay);

 document.onmousedown= function (e)
{
     let targ;
     if (e.target) targ = e.target;{
        buttonid = targ.id;
     }
}

function displayIntro() {
  let anchor = document.getElementById(buttonid);
  let blog_link = anchor.querySelector('a');

  overlay.style.display = "block";
 console.log("this us" + buttonid);
   const xhttp = new XMLHttpRequest();
   xhttp.onload = function() {
     let parser = new DOMParser();
         let htmlDoc = parser.parseFromString(this.responseText, 'text/html');
         let title = htmlDoc.querySelector('h3').textContent;
        /*alert(title);*/
         let introd = htmlDoc.querySelector('h4').textContent;

         let paragraph = htmlDoc.querySelector('p').textContent;
    
         let introduction_Popup = document.getElementById("intro-pop");
        
    
    
    let h3 = document.createElement("h3");
    h3.textContent = title;
    let h4 = document.createElement("h4");
    h4.textContent = introd;

    let p1 = document.createElement("p");
    p1.textContent = paragraph;

    let button = document.createElement('button');
    button.textContent="X";
    button.className= "closeButton"
    
    let button2 = document.createElement('button');
    button2.textContent="Read Blog";

   
    button.onclick = function() {
      // Get the parent element
      let parent = this.parentElement;
      
      // Remove all child nodes
      while (parent.firstChild) {
    
          parent.removeChild(parent.firstChild);
          overlay.style.display = "none";
          blogintro.style.display = "none";
      }
  };

  button2.onclick = function() {
    let tab = window.open(blog_link  , "  _blank");
    tab.blur();
    window.focus();
  
};
  

    introduction_Popup.appendChild(h3);
    introduction_Popup.appendChild(h4);
    introduction_Popup.appendChild(p1);
    introduction_Popup.appendChild(button2);
    introduction_Popup.appendChild(button);
    blogintro.style.display = "block";
    
    
   }
   xhttp.open("GET", "../blogintro/" + buttonid +".html");
   xhttp.send();


   
 }

