/***  COMIENZO DEL PROYECTO ***/

document.getElementById("c1").addEventListener("click", function () {
  // EJECUTAR EL CÓDIGO A TRAVÉS DE UN ID (HECHO CON CHATGPT).
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
