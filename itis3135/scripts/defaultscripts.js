

function greetingPop(){
    alert("Hello from the other side");
}


function myFunction() {
    const name= document.getElementById('first-name').value;
    const mood = document.getElementById('emotion').value;

    document.getElementById("date-time").textContent = "The Lucid Fox welcomes you " +  
    name + " ! We're Glad you're doing " + mood + "!";

    document.getElementById("greeting").textContent = " ";

  }
function getPoly(){
var num= document.getElementById("fav-number").value;
num = Math.round(Math.abs(num));

var polygons = {
    0: "Polygon does not exist",
    1: "Monogon",
    2: "Digon",
    3: "Trigon",
    4: "Tetragon",
    5: "Pentagon",
    6: "Hexagon",
    7: "Heptagon",
    8: "Octagon",
    9: "Enneagon",
    10: "Decagon"};

    if (polygons[num]) {
        alert(polygons[num]);
      } else {
        alert("Polygon not found for " + num + " sides.");
}

}

function getSpeed()
{
    var distance = prompt("Enter the farthest distance you can run: ");
    miles = parseFloat(distance);
    var multiplier = miles * 2;
    alert("Well, the fox ran faster than you: " + multiplier + " miles per hour!" );
}

function calculateDen()
{
    var length = prompt("Enter the length of the Den: ");
    length = parseFloat(length);
    var width = prompt("Enter the width of the Den: ");
    var denSize = length * width;
    alert("The area of the fox den is "+ denSize);
}
function calculateDistance()
{
    var day1 = prompt("how far did your fox fun on day1: ");
    day1 = parseFloat(day1);
    var day2 = prompt("how far did your fox fun on day2: ");
    day2 = parseFloat(day2);
    var day3 = prompt("how far did your fox fun on day3: ");
    day3 = parseFloat(day3);

    var total= day1+day2+day3;
    alert("The fox ran an average of "+ total + "miles this week.");
}

function foxFact(){
    var numIn= prompt("Please enter a number between 0-5: ");
        numIn = parseInt(numIn);

    var fact = {
        0: "Switzerland tricked foxes into vaccinating themselves.",
        1: "Arctic foxes don’t shiver until -94°F (-70°C).",
        2: "On cold nights, foxes cover themselves with their tail, like a blanket, to keep warm.",
        3: 'A group of foxes is known as either a “skulk” or a “leash.”',
        4: "Some fox dens, passed on from generation to generation, are over 300 years old.",
        5: "Foxes use Earth’s magnetic fieldPentagon."};

        if (fact[numIn]) {
            alert(fact[numIn]);
        } else {
            alert("Please enter a number between 0-5");
}

}

  

window.onload = function() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long',
     day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = "It's" + " " + 
    date.toLocaleDateString('en-US', options);
    document.getElementById('date-time').innerHTML = formattedDate;   

}