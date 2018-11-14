const EventEmitter = require('events');
const somaNumeros = new EventEmitter ();

somaNumeros.on('number', (number1, number2) => {
  let average = (number1 + number2)/2
  console.log(average)
});
somaNumeros.emit('number', 100, 200);