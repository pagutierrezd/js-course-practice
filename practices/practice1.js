//Declarando variables para la suma de dos números ingresados por el usuario
function sumNumbers() {
  let numOne = prompt("Digite el primer número");
  let numTwo = prompt("Digite el segundo número");

  let result = parseInt(numOne) + parseInt(numTwo);

  alert(`La suma de ${numOne} + ${numTwo} es ${result}`);
}

//Calcular el valor de una compra con IVA
function purchaseValue() {
  let nameClient = prompt("Digite su nombre");
  let product1 = parseFloat(prompt("Digite el precio del primer producto"));
  let product2 = parseFloat(prompt("Digite el precio del segundo producto"));
  let product3 = parseFloat(prompt("Digite el precio del tercer producto"));

  let sum = product1 + product2 + product3;
  const IVA = 0.19;
  let total = sum + sum * IVA;

  alert(
    `Cliente ${nameClient} debes pagar ${total}, donde su monto del IVA fue de ${
      sum * IVA
    }`
  );
}

//Determinar si el cliente puede prestar el servicio militar
function militaryService() {
  let ageClient = parseInt(prompt("Digite su edad"));
  let sexClient = prompt("Digite su sexo: femenino/masculino");

  if (ageClient >= 18 && sexClient == "masculino") {
    alert("Eres mayor de edad y estás apto para prestar el servicio militar");
  } else if (ageClient >= 18 && sexClient == "femenino") {
    alert(
      "Eres mayor de edad pero no estás obligada a prestar el servicio militar"
    );
  } else {
    alert(
      "Eres menor de edad y no estás obligado(a) a prestar el servicio militar"
    );
  }
}

//Determinar cuántos números enteros son pares
function countIntegers() {
  let counter = 0;
  let digits;

  alert("En el siguiente apartado deberá ingresar números enteros");

  for (let i = 0; i < 10; i++) {
    digits = parseInt(prompt("Digite un número:"));
    if (digits % 2 === 0) counter++;
  }
  alert(`La cantidad total de números pares son ${counter}`);
}
