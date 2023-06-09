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

//idioma
let idioma = "es";

const habilidades = [
  "Sitios Web Interactivos",
  "Manejo del Dom",
  "Codigo js escalable",
  "Programación asíncrona",
  "Desarrollo orientado eventos",
  "Modularidad y reutilización",
  "Integración de API",
  "Optimización del rendimiento",
];
const skills = [
  "Interactive Websites",
  "DOM Manipulation",
  "Scalable JS Code",
  "Asynchronous Programming",
  "Event-Driven Development",
  "Modularity and Reusability",
  "API Integration",
  "Performance Optimization",
];

let indice = 0;
//boton javascript
const btnJavascript = document.getElementById("btnjavascript");
btnJavascript.addEventListener("click", (e) => {
  cambiarTexto(idioma);
});

function cambiarTexto(idioma) {
  let liTexto = document.getElementById("liTexto");
  if (idioma == "es") {
    liTexto.textContent = habilidades[indice];
    indice = (indice + 1) % habilidades.length;
  } else {
    liTexto.textContent = skills[indice];
    indice = (indice + 1) % skills.length;
  }
}

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

flagsElement.addEventListener("click", (e) => {
  idioma = e.target.parentElement.dataset.language;
  changeLanguage(idioma);
});

async function changeLanguage(language) {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();
  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const subsection = textToChange.dataset.subsection;
    const value = textToChange.dataset.value;
    subsection
      ? (textToChange.innerHTML = texts[section][subsection][value])
      : (textToChange.innerHTML = texts[section][value]);
    //formulario
    textToChange.placeholder = texts[section][value];
  }
}
