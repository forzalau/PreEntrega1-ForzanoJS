/*** Algoritmo con un condicional ***/
document.getElementById("c1").addEventListener("click", function () {
  // EJECUTAR EL CÓDIGO A TRAVÉS DE UN ID (HECHO CON CHATGPT).
  alert("Atención. Este sitio es para mayores de 18 años.");
  const nombre = prompt("Ingrese su nombre.");
  const edad = parseInt(prompt("Ingrese su edad en números."));
  if (edad >= 18) {
    console.log(nombre + " es mayor, puede ingresar al sitio.");
    alert("Hola " + nombre + ", podés ingresar.");
  } else {
    console.log(nombre + " es menor, no tiene permitido el acceso al sitio.");
    alert("Lo sentimos " + nombre + ", no tenes permitido el ingreso.");
  }
});

/*** Algoritmo utilizando un ciclo ***/
document.getElementById("c2").addEventListener("click", function () {
  codigo;
});

/*** Simulador interactivo ***/
document.getElementById("c3").addEventListener("click", function () {
  codigo;
});
