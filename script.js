var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#gradiant");
var button = document.querySelector(".btnRandom");

// funcion para cambiar fondo con gradient
function setgradiant(){
    body.style.background = "linear-gradient(to right," + color1.value + " , " + color2.value + ")";
   
    css.textContent = body.style.background+ ";";   //escribe el elemento h1 con el valor del fondo 
}


// da un radom color en hexagesimal

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
function setColor(){
     color1.value = getRandomColor();
     color2.value = getRandomColor();
     setgradiant();
} 

button.addEventListener("click",setColor);

color1.addEventListener("input",setgradiant);

color2.addEventListener("input",setgradiant);

setgradiant();


