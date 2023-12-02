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

// CÓDIGO PARA DESCARGAR ARCHIVO .JS CON LA OPCIÓN DE CANCELAR LA DESCARGA (HECHO CON CHATGPT).
function downloadFile() {
  var link = document.createElement("a");
  link.href = "assets/chatgpt.js";
  link.download = "assets/chatgpt.js";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function confirmDownload() {
  var confirmation = confirm("¿Deseas descargar el archivo chatgpt.js?");

  if (confirmation) {
    downloadFile();
    console.log("Archivo chatgpt.js descargado.");
    alert("Descarga realizada con éxito.");
  } else {
    console.log("Descarga cancelada por el usuario.");
    alert("Descarga cancelada con éxito.");
  }
}

// EJECUTAR EL CÓDIGO A TRAVÉS DE UN ID (HECHO CON CHATGPT).
/*
  document.getElementById("ID ACÁ").addEventListener("click", function () {
    (((CÓDIGO ACÁ)))
  });
*/
