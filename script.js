/*** Algoritmo con un condicional ***/
document.getElementById("c1").addEventListener("click", function () {
  const nombre = prompt("Ingrese su nombre.");
  alert("Bienvenido " + nombre + " al simulador de plazos fijos.");
  console.log(nombre + " quiere ingresar al simulador de plazos fijos.");
  const pin = parseInt(prompt("Ingrese su PIN para acceder. (6666)"));

  if (pin === 6666) {
    alert("Pin correcto. Accediendo al simulador de plazos fijos.");
    console.log("Pin correcto.");
    console.log(nombre + " ingresó al simulador de plazos fijos.");

    const plazoFijo = prompt("¿Desea simular un Plazo Fijo? (si/no)");
    if (plazoFijo.toLowerCase() === "si") {
      alert("Próximamente podrás simular un Plazo Fijo.");
      console.log("Accedió a simular un plazo fijo.");
      console.log("El simulador de plazos fijos no está disponible.");
      console.log("Sesión cerrada.");
    } else {
      alert("Se cerró tu sesión.");
      console.log(nombre + " no accedió a simular un plazo fijo.");
      console.log("Sesión cerrada.");
    }
  } else {
    alert("Pin incorrecto. Acceso denegado.");
    console.log(nombre + " ha ingresado un pin incorrecto.");
    console.log("Acceso denegado.");
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
