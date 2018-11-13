const EventEmitter = require('events');

class SomaNumeros extends EventEmitter {}
const somaNumeros = new SomaNumeros();
somaNumeros.on('number', (number1, number2) => {
  let average = (number1 + number2)/2
  console.log(average)
});
somaNumeros.emit('number', 100, 200);