// CÓDIGO PARA VISUALIZAR LA CONSOLA DENTRO DEL HTML (CHATGPT).
(function () {
  var oldLog = console.log;
  console.log = function (message) {
    if (typeof message == "object") {
      document.getElementById("consoleOutput").innerHTML +=
        (JSON && JSON.stringify ? JSON.stringify(message) : message) + "<br />";
    } else {
      document.getElementById("consoleOutput").innerHTML += message + "<br />";
    }
    oldLog.apply(console, arguments);
  };
})();

// CÓDIGO PARA VACIAR LA CONSOLA (CHATGPT).
function limpiarConsola() {
  if (typeof console.clear === "function") {
    console.clear();
  }
  document.getElementById("consoleOutput").innerHTML = "<br>".repeat(0);
}

// CÓDIGO PARA PODER VER EL ARCHIVO .JS EN EL NAVEGADOR (CHATGPT).
const abrirJS = document.getElementById("jscode");
abrirJS.addEventListener("click", function () {
  const archivoJS = "./script.js";
  window.open(archivoJS, "_blank");
});

/***  COMIENZO DEL PROYECTO ***/

document.getElementById("c1").addEventListener("click", function () {
  // EJECUTAR EL CÓDIGO AL HACER CLICK EN EL BOTÓN (CHATGPT).
  alert("Atención. Este sitio es para mayores de 18 años.");
  const nombre = prompt("Ingrese su nombre.");
  const edad = parseInt(prompt("Ingrese su edad en números."));
  if (edad >= 18) {
    console.log("Hola " + nombre + ", podés ingresar.");
  } else {
    console.log("Lo sentimos " + nombre + ", no tenes permitido el ingreso.");
  }
});

document.getElementById("c2").addEventListener("click", function () {
  codigo;
});
