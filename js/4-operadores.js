"use strict"

//****OPERADORES ARITMETICOS */

var datoA = 10;
var datoB = 20;

//suma +
var suma = datoA + datoB;
console.log("la suma de " + datoA + " + " + datoB + " es: " + suma);
//resta -
var resta = datoA - datoB;
console.log("la resta de " + datoA + " - " + datoB + " es: " + resta);
//multiplicación *
var multi = datoA * datoB;
console.log("la multiplicacion de " + datoA + " x " + datoB + " es: " + multi);
//division /
var division = datoA / datoB;
console.log("la division de " + datoA + " / " + datoB + " es: " + division);
//Modulo o Residuo %
var modulo = datoA % datoB;
console.log("el modulo de " + datoA + " % " + datoB + " es: " + modulo);
//Incremento ++
var incremento = datoA;
incremento++
console.log("el incremento de " + datoA + " es: " + incremento);
//decremento --
var decremento = datoA;
decremento--
console.log("el dencremento de " + datoA + " es: " + decremento);

//************
//***operadores relacionales */

var datoC = 10;
var datoD = 20;

//Mayor que >
var mayorQue = datoC > datoD;
console.log("Es " + datoC + " mayor que " + datoD + " es: " + mayorQue);

//menor que <
var menorQue = datoC < datoD;
console.log("Es " + datoC + " menor que " + datoD + " es: " + menorQue);

// mayor o igual que >=
var mayorOIgualQue = datoC >= datoD;
console.log("Es " + datoC + " mayor o igual que " + datoD + " es: " + mayorOIgualQue);

//menor o igual que <=
var menorOIgualQue = datoC <= datoD;
console.log("Es " + datoC + " menor o igual " + datoD + " es: " + menorQue);

//Igual que ==
var igualQue = datoC == datoD;
console.log("Es " + datoC + " igual " + datoD + " es: " + igualQue);

//no es igual que o es diferente que !=
var noEsIgual = datoC != datoD;
console.log("Es " + datoC + " diferente " + datoD + " es: " + noEsIgual);


//***OPERADORES LOGICOS */

var datoE = 10;
var datoF = 20;

//Operador y o AND &&
var and = (datoE > 10 && datoF > 10);
console.log("Es " + datoE + " mayor que 10 y " + datoF + " mayor que 10:  " + and);
//Operador O u OR ||
var or = (datoE > 10 || datoF > 10);
console.log("Es " + datoE + " mayor que 10 o " + datoF + " mayor que 10:  " + or);
//Operador de negación o NOT !
var not = !(datoE < 10);
console.log("Es " + datoE + " es menor que 10: " + not);



//********OPERADORES DE ASIGNACION */

var datoG = 10;

//Asignación simple
var igual = datoG;
console.log("El resultado de la asignacion simple es: " + igual);

//Sumar y asignar
var masIgual = 10;
masIgual += datoG
console.log("El resultado de la asignacion += es: " + masIgual)

//Restar y asignar
var menosIgual = 10;
menosIgual -= datoG;
console.log("El resultado de la asignacion -= es: " + menosIgual);

//Multiplicar y asignar
var porIgual = 10;
porIgual *= datoG;
console.log("El resultado de la asignacion x= es: " + porIgual);

//Dividir y asignar
var entreIgual = 20;
entreIgual /= datoG;
console.log("El resultado de la asignacion /= es: " + entreIgual);

//********OPERADOR NEGATIVO */

var datoH = 10;
var datoI = -datoH;

console.log("El valor de DatoH es: " + datoH + ", despues del operador negativo datoB: " + datoI);


//********* OPERADORES DE CONCATENACION */

var datoJ = 10;
var datoK = 20;
var datoJ1 = "10";
var datoK1 = "20";


var nombre = "Valeria";
var apellido = "Manriquez";

//Concatenacion de números
var concatNumeros = datoJ + datoK;
console.log("Los números " + datoJ + " y " + datoK + " usados como números concatenados hacen una suma igual a: " + concatNumeros);
//cuidado cuando son declaracion diferentes a numero
var concatNumeros1 = datoJ1 + datoK1;
console.log("Los STRING " + datoJ1 + " y " + datoK1 + " usados como STRING concatenados hacen una suma igual a: " + concatNumeros1);

//Concatenación de cadenas de texto
var concatText = nombre + " " + apellido;
console.log("los textos " + nombre + " y " + apellido + " se unen para formar: " + concatText);

//Concatenacion de numeros como texto
var concatNumComoTxt = "2" + "8";
console.log("Los numeros 2 y 8 se unen para formar: " + concatNumComoTxt);

//Concatenacion de texto y numero
var concatxtNum = datoJ + "8";
console.log("El numero " + datoJ + " usado como númerp y 8 como texto se unen para formar: " + concatxtNum);

//*********OPERADOR TERNARIO O CONDICIONAL */
var datoL = 10;
var datoM = 20;

//condicion ? TRUE : FALSE
//en este caso se ve si la condicion se cumple entoces el valo arroga
var result = datoL > datoM ? "si es mayor" : "No es mayor";
console.log("El resultado con el operador ternario u operador condicional es: " + result);

var datoN = datoL + 100;
var result1 = datoN > datoM ? "si es mayor" : "No es mayor";
console.log("El resultado con el operador ternario u operador condicional es: " + result1);



//*********Operador de tipo de datos  */
//identificar los tipos de datos

var datoO = 10; //Número

var NameObj = "Playa"; // Cadena de texto

var activo = true; // Boleano

var persona = {
    Age: 34, // Numero
    deporte: 'Correr' // cadena de texto
}//objeto

console.log("tipo de dato de " + datoO + ": " + typeof datoO)
console.log("tipo de dato de " + NameObj + ": " + typeof NameObj)
console.log("tipo de dato de " + activo + ": " + typeof activo)
console.log("tipo de dato de " + persona + ": " + typeof persona)

console.log("Tipo de dato de " + persona.Age + ": " + typeof persona.Age);
console.log("Tipo de dato de "+persona.deporte +": "+typeof persona.deporte);