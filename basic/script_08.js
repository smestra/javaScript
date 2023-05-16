let wheels = parseInt(prompt("¿Cuantas ruedas tiene tu vehiculo?"));
let medium = prompt(
  "Es un vehiculo acuatico, aereo o terrestre?"
).toLowerCase();

if (wheels == NaN || medium == "") {
  alert("No ingresaste uno de los datos");
} else {
  if (wheels >= 20 && medium == "aereo") {
    alert("Es un avion");
  } else { if (wheels == 0 && medium == "acuatico") {
    alert("Es un barco");
  }
  }
  if (wheels == 1 && medium == "terrestre") {
    alert("Es un monociclo");
  } else {
    if (wheels == 2 && medium == "terrestre") {
      alert("Es una Bicicleta/Motocicleta");
    } else {
      if (wheels == 4 && medium == "terrestre") {
        alert("Es un Automovil");
      } else {
        if (wheels > 4 && medium == "terrestre") {
          alert("Es un Camion");
        } else {
        }
      }
    }
  }

  if (wheels < 20 && medium == "aereo") {
    alert("Por favor verifica los datos ingresados");
  } else {
    if (wheels > 0 && medium == "acuatico")
      alert("Por favor verifica los datos ingresados");
  }
}