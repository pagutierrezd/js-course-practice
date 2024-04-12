//Prueba para saber como funcionan los tipos de variables en JS
var a = 5;
let b = 10;
const c = 15;

function test(){
    var a  = 4;
    let b = 6;
    const c = 8;
    console.log("Dentro de la función", a, b, c);
}
test();
console.log("Fuera de la función", a, b, c);