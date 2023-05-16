// control de mayusculas y minusculas
//conversion de tipos de datos (toLowerCase) (toUpperCase)

let age = parseInt( prompt("Ingrese su edad"));
let country = prompt("Ingresa tu nacionalidad").toLowerCase();

console.log(age, country)

if (age == 0 || country == "")
{alert("No ingresaste uno de los valores");
} else { if (age >= 18 && country != "china") {
    alert("Se ha desbloqueado la pagina");
} else {
alert("Acceso denegado");
} }




/**
 *  Operadores de comparacion.
 *
 * >: indicar que es mayor a algo
 * <: indica que es menor  a algo
 * ==: comparar si un valor es igual a algo
 * >=: mayor o igual que algo
 * <: si es menor o igual que algo
 *
 * Operadores logicos
 * &&: Y
 * ||: O
 * !=: diferente de algo
  */