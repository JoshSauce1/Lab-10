/*
    Student Name: Joshua Abreu
    File Name: script.js
    Date:5/2/22
*/

// GLobal variables
var figElement = document.getElementById("placeholder");
 var imgSource = document.getElementById("image");
 var figCap = document.querySelector("figcaption");

//Function to display the first picture
function pic1 {
    imgSource.src = "images/trunk-bay.jpg";
    imgSource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block;
    figCap.textContent = "Trunk Bay in St. John";

}

function pic2 {
    imgSource.src = "images/ curacao.jpg";
    imgSource.alt = "The blue waters of Curacao";
    figElement.style.display = "block;
    figCap.textContent = "Curacao";

}
