"use strict"

var edad = 35;

var cantidad = "100"; //se interpreta como texto y no como valor numerico

//convertir de string a numero

var nuevaCantidad = Number(cantidad);

//parseInt() convierte en datos enteros
//parseFloat() convertir datos a decimales

//indistino el uso de las comillas si tienen que ser inicio y fin
var bebida = "agua";
var comida = 'ceviche';
var intruccion = "El platillo se llama 'ceville' ";

//convierte el dato en cadena de texto
var edadtxt = String(edad);

//Dato Bolean (true or False "0,1")
var activo = true; // saber que decisiones tomar si sucede algo

var estado = Boolean(10 > 9); //es este caso debiera salir un valor true
var estado = Boolean(10 < 9); //arrogara falso

//Simbologia

var fecha = new Date(); // en este caso dara el dia, año mes y minuto cuando se ejecuta el codigo

fecha.getDay(); //entrega el Día en que se realiza el codigo
fecha.getDate(); //el dia del mes
fecha.setDate(1); // se cargan datos
//METODO SET 
//Se envian valores
//METODO GET
//se muestran los valores exsistentes

//Simbolos
//cada vez que se genera un symbolo se crea und dato unico del programa
var simbolo1 = Symbol();
var simbolo2 = Symbol(); //tanto 1 como 2 no son iguales técnicamente porque cada uno es UNICO
var ambiente = Symbol('dev');

//JSON => JavaScript Object Notation
//es un formato creado formato de intercambio de datos ligero

var persona = {nombre: 'sergio', twitter:'jacafx'};

var gente = [
    {nombre: 'hugo', twitter:'dchugo'},
    {nombre: 'paco', twitter:'dcpaco'},
    {nombre: 'luis', twitter:'dcluis'},
    persona
]

var personaJSON = JSON.stringify(persona);
//en este caso es el inverso
var nuevaPersona = JSON.parse(personaJSON);