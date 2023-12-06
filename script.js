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
  let continuar = true;
  do {
    const monto = parseInt(prompt("Ingrese un monto en números."));
    const meses = parseInt(prompt("Ingrese cantidad de meses en números."));
    console.log("Ingresó " + monto + " al plazo fijo.");
    console.log("Por " + meses + " meses.");
    console.log("El TNA es de 100%");
    const tna = 100;
    const interes = tna / 12 / 100;
    console.log(
      "El total con intereses es " + (monto + monto * interes * meses)
    );

    const seguir = prompt("Desea realizar otro plazo fijo? (si/no)");
    continuar = seguir.toLowerCase() == "si";
  } while (continuar);
});

/*** Simulador interactivo ***/
document.getElementById("c3").addEventListener("click", function () {
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
      console.log("Accedió a simular un plazo fijo.");
      let continuar = true;
      do {
        const monto = parseInt(prompt("Ingrese un monto en números."));
        const meses = parseInt(prompt("Ingrese cantidad de meses en números."));
        console.log("Ingresó $" + monto + " al plazo fijo.");
        console.log("Por " + meses + " meses.");
        console.log("El TNA es de 100%");
        const tna = 100;
        const interes = tna / 12 / 100;
        console.log(
          "El total con intereses es $" + (monto + monto * interes * meses)
        );
        console.log(
          nombre +
            " recibirá $" +
            (monto + monto * interes * meses) +
            " dentro de " +
            meses +
            " meses."
        );
        console.log("Plazo fijo aceptado.");
        alert(
          "Ingresaste al plazo fijo $" +
            monto +
            " durante " +
            meses +
            " meses, el interés será de $" +
            (monto + monto * interes * meses)
        );

        const seguir = prompt("Desea realizar otro plazo fijo? (si/no)");
        continuar = seguir.toLowerCase() == "si";
      } while (continuar);
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
