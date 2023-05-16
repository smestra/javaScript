let day = prompt("Ingrese un dia").toLowerCase(); //martes - MARTES - Martes - etc.

if (day == "sabado" || day == "domingo") {
  alert("Es un fin de semana");
} else {
  if (
    day == "lunes" ||
    day == "martes" ||
    day == "miercoles" ||
    day == "jueves" ||
    day == "viernes"
  ) {
    alert("Es un dia entre semana");
  } else {
    alert("por favor ingresa un dia de la semana");
  }
}
