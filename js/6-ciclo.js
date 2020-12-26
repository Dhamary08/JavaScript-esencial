"use strict"

/* ********   CICLOS   ********* */
//
// CICLOS | LOOPS | ITERACIONES
// EXISTEN DOS TIPOS {DEFINIDOS E INDEFINIDOS}
// DEFINIDOS: CICLO FOR (sabemos cuantas veces se vaa ejecutar)
// INDEFINIDOS: CICLO WHILE Y CICLO DO ..... WHILE
/********************************* */


var productos = 5;

//ciclo FOR
//son: contador, condición o evaluación, y el paso que puede ser un incrementador o un decrementador.

for (let i = 0; i < productos; i++) {

    //conjuto de acciones que se repite
    console.log("Productos #" + i);
    //permite trabajar directamente desde el navegador y revisa que sucede en cada paso y se puede entender de una mejor manera
    //se trabaja con la seccion en el  navegador watch
    debugger;
}

//este ciclo  DO-WHILE evalua primero la funcion y despues la ejecuta

var servicio = 5;
while (servicio > 0) {
    console.log("producto vendido");
    productos--;
    debugger;
}

// El ciclo Do-While
// primero se ejecuta una acciones y despues pregunta si quiere seguir ejecutando acciones
var acciones = 5;
do {
    console.log("Producto vendido");
    acciones--;
    debugger
} while (acciones >= 1);


//controlador de ciclos
//BREAK | CONTINUE

var contador = 0;
var cuenta = 0;

for (contador = 0; contador <= 20; contador++) {
    if (contador % 2 == 0) {
        continue //ignora todo lo que sigue y continua en el siguiente paso
    }
    cuenta++;
    debugger;
}
console.log("Hoy " + cuenta + " número impares");

var sumador = 0;
var total = 0;

for (sumador = 0; sumador <= 20; sumador++) {
    if (sumador % 2 == 0) {
        break //se rompe la instruccion y envia fuera del ciclo, ignora los pasos que segian como tambien el flujo que continua
    }
    total++;
    debugger;
}
console.log("Hoy " + total + " número impares");
