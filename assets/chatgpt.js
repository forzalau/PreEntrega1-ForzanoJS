// CÓDIGO PARA VISUALIZAR LA CONSOLA DENTRO DEL HTML (HECHO CON CHATGPT).
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

// CÓDIGO PARA LIMPIAR LA CONSOLA (HECHO CON CHATGPT).
function limpiarConsola() {
  if (typeof console.clear === "function") {
    console.clear();
  }
  document.getElementById("consoleOutput").innerHTML = "<br>".repeat(0);
}

// CÓDIGO PARA VER ARCHIVOS .JS EN EL NAVEGADOR (HECHO CON CHATGPT).
const abrirJS = document.getElementById("jscode");
abrirJS.addEventListener("click", function () {
  const archivoJS = "./script.js";
  window.open(archivoJS, "_blank");
  console.log("Archivo script.js abierto en una nueva pestaña.");
});

const abrirJSGPT = document.getElementById("jsgptcode");
abrirJSGPT.addEventListener("click", function () {
  const archivoJSGPT = "./assets/chatgpt.js";
  window.open(archivoJSGPT, "_blank");
  console.log("Archivo chatgpt.js abierto en una nueva pestaña.");
});

// EJECUTAR EL CÓDIGO A TRAVÉS DE UN ID (HECHO CON CHATGPT).
/*
  document.getElementById("ID").addEventListener("click", function () {
    (CÓDIGO)
  });
*/
