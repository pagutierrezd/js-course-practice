//Probar los diferentes tipos de datos de las variables, Number, String, Boolean, Object, Null y Undefined.
let NumberVar = 12;
let StringVar = '¿Cómo te va?';
let BooleanVar = true;
let ObjVar = {nombre: "Juan", apellido:"Perez"};
let nullVar = null;
let undefinedVar;

console.log(NumberVar + StringVar); //¿Qué ocurre aquí?
console.log(StringVar && NumberVar);
console.log(ObjVar.version);
console.log(ObjVar.apellido);
console.log(nullVar == undefinedVar);

/*Resultados arrojados:
12¿Cómo te va?
12       
undefined
Perez    
true
*/