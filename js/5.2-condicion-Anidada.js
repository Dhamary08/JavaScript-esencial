"use strict"

//*********EStructura Anidada */
var datoA = 110;
var datoB = 20;
var datoC = 5;
var resultado = "sin datos";

if (datoA > datoB) {

    resultado = "la condicion se cumplio"

    if (datoC < datoA) {

        resultado = "relación anidada verdadera"
    } else {
        resultado = "la relacion anidada no se cumplio"
    }
} else {
    resultado = "La condicion No se cumplio"
}

console.log("El resultado de la evaluacion IF es: ", resultado);
