//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
  var opciones = document.querySelectorAll("#links  a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "seleccionado";

  //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
  //en modo responsive
  var x = document.getElementById("nav");
  x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

const habilidades = [
  "Sitios Web Interactivos",
  "Manejo del Dom",
  "Codigo js escalable",
  "Programación asíncrona",
  "Desarrollo orientado eventos",
  "Modularidad y reutilización",
  "Integración de API",
  "Optimización del rendimiento"

];
var indice = 0;

function cambiarTexto() {
  // Obtener el div por su id
  var liTexto = document.getElementById("liTexto");

  liTexto.textContent = habilidades[indice];

  // Actualizar el índice para el siguiente texto
  indice = (indice + 1) % habilidades.length;
}
