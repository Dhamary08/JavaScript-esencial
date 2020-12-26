"use strict"

//********Esturctura Switch */
//Evaluacion con números
var edad = 30;
var resultado = "";

switch (edad) {
    case 10:
        resultado = "la edad es 10 años";
        break;
    case 20:
        resultado = "la edad es 20 años";
        break;
    case 30:
        resultado = "la edad es 30 años";
        break;

    default:
        resultado = "en ningún caso coincide";
        break;
}

console.log("el resultado del la evaluacion con numero es: " + resultado);


//evaluacion con cadena de texto

var producto = "IV";
switch (producto) {
    case "IV":
        resultado = "se eligio la IV";
        break;
    case "Radio":
        resultado = "se eligio la Radio";
        break;
    case "telefono":
        resultado = "se eligio la telefono";
        break;
    default:
        resultado = "No se eligio nongun producto"
        break;
}

console.log("El resultado de la evaluacion con texto es: "+resultado)