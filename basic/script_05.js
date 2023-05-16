// condicionales if/else

// Algoritmo que dependiendo si el o la usuaria es mayor de 18 años habilita el acceso
// si el pais es china, asi sea mayor de edad no habilite el catalogo.

let age = prompt("Ingrese su edad");
let country = prompt("Ingresa tu nacionalidad")

if (age >= 18 && country != "china" ) {
  alert("Se ha desbloqueado la pagina");
} else {
  alert("Acceso denegado");
}

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
