"use strict"
/* estuctura básica de una funcion  */

function saludar() {
    var saludo = "Welcome to the Jungle";
    console.log(saludo);
    return saludo

}
saludar()

/* PARAMETROS de una función */

console.log("------------------------");

function empresa(nombre, edad) {
    console.log("Hola: ", nombre);
    console.log("Edad: ", edad)
    var resulado = nombre + " tiene " + edad + " años";
    //siempre hay que retornan algo
    return resulado
}

var mensaje = empresa("pedro", 34);
console.log(mensaje);

/* PARAMETROS inicializacion */
/* que pasa cuando no quiere enviar parametros */
/* agregando valor por defecto */

console.log("------------------------");

function contar(cantidad = 20) { /* en caso de querer enviar algo a la "contar()" se agrega el parametro */
    console.log('Total ', cantidad);

}
contar(100);

/* PARAMETROS REST */
/* VIENE POR LA EXPRESION EL RESTO DE..... EN ESTE CASO HAY 2 INGREDIENTE POR ENDE TOMA LOS DOS Y NO EL RESTO DE PARAMETR */

/* function cocinar(ingrediente1, ingrediente2) {
    console.log("Primer ingrediente: " + ingrediente1);
    console.log("Segundo ingrediente: " + ingrediente2);
}
cocinar("huevo", "tomate","arroz","porotos","carne"); */


/* REST es : "...parametro" */
function cocinar(ingrediente1, ingrediente2, ...masingredientes) {
    console.log("Primer ingrediente 1: " + ingrediente1);
    console.log("Segundo ingrediente 2: " + ingrediente2);
    console.log("otros ingredientes 3: " + masingredientes)
}
cocinar("huevo", "tomate", "arroz", "porotos", "carne");

console.log("------------------------");


/* parametros SPREAD, que se pueden expandir */
function pedido(producto1, producto2, producto3) {
    console.log("Primer producto 1: " + producto1);
    console.log("Segundo producto 2: " + producto2);
    console.log("otros productos 3: " + producto3)
}

var ingredientesBase = ["clavo", "cuerda"];

pedido(...ingredientesBase, "martillo");


/* Conbinar REST con SPREAD */
console.log("------------------------");


/* parametros SPREAD, que se pueden expandir */
function pedido(articulos1, articulos2, articulos3, ...otro) { //se agrega con otro parametro
    console.log("Primer articulos 1: " + articulos1);
    console.log("Segundo articulos 2: " + articulos2);
    console.log("otros articuloss 3: " + articulos3);
    console.log("otros; " + otro);
}

var articulosBase = ["olla", "plato"];

pedido(...ingredientesBase, "basija", "taza", "servicio");


console.log("------------------------");

/* FUNCIONES ANONIMAS */

/* Aislar la funcion, hay que desactivar el USE STRICT de la linea 1 para que funcione en consola*/
/* (
    function () {
        var mensaje ="Hello again";
        console.log(mensaje);
    }
)() */

//ahora se escribira de una forma mas regularizada
var sent = function (nombre) {
    var mensaje = "Hello again, " + nombre;
    return mensaje;
}

console.log("------------------------");

/* Funciones como CALLBACKS */

function Calcular(datoA, datoB, callbacksCB, restarCB) { //idealmente es bueno agregar un CB al incio o al final para así 
    //poder indentificar el callback sin problemas
    var suma = datoA + datoB;
    var resta = datoA - datoB;
    callbacksCB(suma); //esta esperando una respuesta o un valor
    restarCB(resta);
}

Calcular(2, 3,
    function (result) {
        console.log("Suma: ", result); //una funcion anonima
    }, function (result) {
        console.log("Resta: ", result);
    });
//calcular (d1, d2, func, func)