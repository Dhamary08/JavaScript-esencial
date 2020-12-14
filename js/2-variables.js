"use strict"
var nameVar = "Valeria - Script Variable"; //variable local

console.log(nameVar)

function saludo(){
    //los nombre de las variables que se agregan son disponibles
    //solo en esta función
    nameVar="yackFX"; //se cambia el contenido
    console.log(nameVar)

    let edad=34;
    console.log(edad);
}
//console.log(edad); es un error ya que solo existe dentro de la estructura

//var variables locales
//let variables resevadas
saludo();


const pi= 3.1416; //en este caso no se permite el cambio en el contenido