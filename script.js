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
//elementos de la descarga del CV
const linkCV = document.querySelector("#CV");
const LinkCVSpanish =
  "https://drive.google.com/uc?export=download&id=1zFaIjzOctATriLkrw0e_fBJ1YDw-a2mc";
const LinkCVEnglish =
  "https://drive.google.com/uc?export=download&id=1uXAgeZmPassYxqgj5sKLivwoPu9d3s1q";

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
  changeLinkCV(idioma);
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

//emailJS
const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_6qjnkdj";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
//Efecto del titulo
let titulo = document.title;
window.addEventListener("blur", () => {
  document.title = "Hey a donde vas!! :(";
});
window.addEventListener("focus", () => {
  document.title = titulo;
});

function changeLinkCV(idioma) {
  if (idioma == "es") {
    linkCV.href = LinkCVSpanish;
    console.log(LinkCVSpanish);
  } else if (idioma == "en") {
    linkCV.href = LinkCVEnglish;
    console.log(LinkCVEnglish);
  }
}

