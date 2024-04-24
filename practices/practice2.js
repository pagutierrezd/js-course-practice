//Algoritmo que solicita datos al usuario y seguido los muestra.
function showUserData() {
  let nameUser = prompt("Digite su nombre");
  let lastNameUser = prompt("Digite su apellido");
  let emailUser = prompt("Digite el correo electrónico");
  let phoneUser = prompt("Digite su número de teléfono");

  alert(
    `Usuario ${nameUser} ${lastNameUser}, con número ${phoneUser} y correo ${emailUser}`
  );
}

//Calcular el tiempo de horas ingresadas por el usuario en minutos, segundo y días.
function calculateTime() {
  let hours = parseFloat(prompt("Ingrese las horas:"));
  let minutes = 60 * hours;
  let seconds = 60 * minutes;
  let days = hours / 24;

  alert(
    `Las ${hours} horas equivalen a: ${minutes} minutos, ${seconds} segundos y ${days} días`
  );
}

//Calcular el promedio de calificación de un estudiante
function averageStudent() {
  let note1 = parseFloat(prompt("Ingrese la primera nota:"));
  let note2 = parseFloat(prompt("Ingrese la segunda nota:"));
  let note3 = pFarseFloat(prompt("Ingrese la tercera nota:"));
  let note4 = parseFloat(prompt("Ingrese la cuarta nota:"));

  let averageNote = (note1 + note2 + note3 + note4) / 4;

  alert(`El promedio de las cuatro notas ingresadas fue de ${averageNote}`);
}

//Calcular promedio de calificaciones con diferentes porcentajes
function calculateAveragePercentage() {
  let qualification1 = parseFloat(prompt("Ingrese la primera nota:"));
  let qualification2 = parseFloat(prompt("Ingrese la segunda nota:"));
  let qualification3 = parseFloat(prompt("Ingrese la tercera nota:"));
  let qualification4 = parseFloat(prompt("Ingrese la cuarta nota:"));

  let finalNote =
    qualification1 * 0.3 +
    qualification2 * 0.2 +
    qualification3 * 0.1 +
    qualification4 * 0.4;
  finalNote = Math.round(finalNote * 100) / 100;

  alert(`El promedio de las cuatro notas ingresadas fue de ${finalNote} `);
}

//Calcular la conversión de dolares a pesos colombianos
function dollarConversion() {
  const colombianPesos = 3900;
  let dollars = parseFloat(
    prompt("Digite la cantidad de dólares que va a comprar:")
  );
  let conversion = dollars * colombianPesos;

  alert(
    `La cantidad que debe pagar de los $${dollars} dólares es de $${conversion} COP`
  );
}

//Suma de números hasta que el usuario desee
function sumNumbers(){
    let amount = parseInt(prompt('Ingrese la cantidad de datos'));
    let count = 0;
    for(let i=1; i <= amount; i++){
        let number = parseInt(prompt('Ingrese un número'));
        count = count + number;
    }
    alert(count);
}

