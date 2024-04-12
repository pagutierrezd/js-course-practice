/*Un bucle `for` para imprimir en la consola los números del 1 al 10.*/
function mostrarLista(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}

/*Un bucle que sume todos los números del 1 al 100. Deberías obtener como resultado 5050.*/
function sumarNumeros(){
    let suma = 0;
    for(let i=1;i<=100;i++) {
        suma += i;
    }
    return suma;
}

/*Tabla de multiplicar de un número (n) dado por el usuario.*/
function tablaMultiplicar(n){
    let respuesta ="";

    for(let i=1;i<=10;i++){
         respuesta+= `${n} x ${i} = ${n*i}\n`;
    }
   return respuesta;
}

/*Metodo para mostrar FizzBuzz*/
function fizzBuzz(){
    for(let i=1; i<=20; i++){
        if(i%3==0 && i%5==0){
            console.log('FizzBuzz');
        }else if(i%3==0){
            console.log( "Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

/*Crea un bucle `while` que comienza en 100 y se reduce a la mitad en cada iteración, hasta que el número sea menor que 1.*/
function iterarCiclo(){

    let iteracion = 100;
    while(iteracion>1){
        console.log(`Iteración: ${iteracion}`);
        iteracion = iteracion/2;
    }
}

/*Revertir una cadena*/
function revertirCadena(cadena){
     console.log(cadena.split("").reverse().join(""));
}

/*Un array con los nombres de tus amigos.*/
var amigos  = ['Juan', 'Pedro', 'Luisa'];
console.log(amigos[1]);
amigos.push( 'María'); /*Agregamos un elemento al final del Array*/
console.log(amigos);

/*Un objeto que represente a tu libro favorito, con propiedades como título, autor, y número de páginas.*/
var libroObj = {
    titulo : 'El señor de los anillos',
    autor : 'J.R. Tolkien',
    paginas : 678
};