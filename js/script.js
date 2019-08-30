var color1 = document.querySelector(".colo1");
var color2 = document.querySelector(".colo2");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");
var chichi = "linear-gradient(to right," + color1.value + "," + color2.value + ")";

function changeColor(){
    console.log(color1.value);
   body.style.background =  "linear-gradient(to right," + color1.value + "," + color2.value + ")";
   h3.textContent = body.style.background;

}

color1.addEventListener("input",changeColor);

color2.addEventListener("input",changeColor);


