"use strict"

//*********CONDICION IF */
//tomar desiciones sobre que flujo seguir

var datoA = 10;
var datoB = 20;
var resultado = "sin datos";

if (datoA > datoB) {

    resultado = "la condicion se cumplio"
}

console.log("El resultado de la evaluacion IF es: ", resultado);

if (datoA < datoB) {

    var resultado1 = "la condicion se cumplio"
}

console.log("El resultado1 de la evaluacion IF es: ", resultado1);


//********CONDICION IF-ELSE */

if (datoA > datoB) {

    resultado = "la condicion se cumplio"
} else {
    resultado = "La condicion No se cumplio"
}

console.log("El resultado de la evaluacion IF es: ", resultado);


//**********CONDICION IF-ELSE-IF */

if (datoA > datoB) {

    resultado = "la condicion se cumplio"
} else if (datoB == datoA) {
    resultado = "Segunda evaluacion es verdadera"
}else if (datoA >= datoB){
    resultado = "el dato a es mayor o igual que b"
} else {
    resultado = "NO se cumplio ninguna evaluación"
}

console.log("El resultado de la evaluacion IF es: " + resultado);
